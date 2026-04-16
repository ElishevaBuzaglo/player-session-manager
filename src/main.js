import prisma from './prisma.js'; // ייבוא המופע המשותף
import { joinGame } from './game.service.js'; // ייבוא הפונקציה
import { GameStatus } from '@prisma/client'; // ייבוא ה-Enum

/**
 * סקריפט הרצה ראשי (Entry Point) בסטנדרט מודרני
 */
async function main() {
  try {
    console.log("🚀 Starting main process...");
    
    // התחברות למסד הנתונים
    await prisma.$connect();
    console.log("📡 Connected to Database.");

    // יצירת נתוני דמי (Mock Data)
    // שימוש ב-upsert למניעת שגיאות כפל (Idempotency)
    const user = await prisma.user.upsert({
      where: { username: 'test_player' },
      update: {},
      create: { username: 'test_player' }
    });

    // יצירת משחק חדש תוך שימוש ב-Enum
    const game = await prisma.game.create({
      data: { 
        status: GameStatus.Waiting 
      }
    });

    console.log(`📝 Attempting to join user ${user.username} to game ID: ${game.id}`);

    // קריאה ללוגיקה העסקית מהשירות
    await joinGame(user.id, game.id);

    // הדפסת הודעת הצלחה
    console.log("✅ Success: User joined game successfully");
    
  } catch (error) {
    // טיפול בשגיאות והדפסה ברורה ללוגים
    console.error("❌ Operation failed:", error.message);
  } finally {
    // סגירת החיבור למסד הנתונים - חשוב מאוד למניעת דליפות משאבים
    await prisma.$disconnect();
    console.log("🔌 Connection closed.");
  }
}

// הרצת הפונקציה הראשית
main();