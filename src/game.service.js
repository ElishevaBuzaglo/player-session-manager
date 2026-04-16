import prisma from './prisma.js';
import { GameStatus, ParticipantRole, Prisma } from '@prisma/client';

/**
 * פונקציה לרישום משתמש למשחק
 * מבוצעת בצורה אטומית למניעת Race Conditions ומנצלת את כוחו של ה-DB
 * * @param {number} userId - מזהה המשתמש
 * @param {number} gameId - מזהה המשחק
 */
export async function joinGame(userId, gameId) {
  return await prisma.$transaction(async (tx) => {

    // בדיקה אם המשחק קיים
    const game = await tx.game.findUnique({
      where: { id: gameId }
    });

    if (!game) {
      throw new Error("Game not found");
    }

    //בדיקה שהמשחק בסטטוס Waiting בלבד
    if (game.status !== GameStatus.Waiting) {
      throw new Error("Cannot join: Game is already Live or Finished");
    }

    try {
      // ניסיון יצירת הרישום - ה-DB יגן עלינו מכפילויות בזכות ה-Unique Constraint
      return await tx.gameParticipant.create({
        data: {
          userId,
          gameId,
          role: ParticipantRole.Player
        }
      });
    } catch (error) {
      // בדיקה ספציפית אם השגיאה היא על הפרת ייחודיות (Unique constraint violation)
      // P2002 הוא הקוד של פריזמה לכפילות בנתונים
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        throw new Error("User is already registered for this game");
      }
      
      // אם זו שגיאה אחרת, נזרוק אותה הלאה
      throw error;
    }
  });
}