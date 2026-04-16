import { PrismaClient } from '@prisma/client';

/**
 * יצירת מופע יחיד של PrismaClient (Singleton Pattern).
 * מונע פתיחת חיבורים מרובים למסד הנתונים ושומר על ביצועים אופטימליים.
 */
const prisma = new PrismaClient({
  log: ['error', 'warn'], // אופציונלי: מוסיף לוגים של שגיאות ואזהרות לטרמינל
});

export default prisma;