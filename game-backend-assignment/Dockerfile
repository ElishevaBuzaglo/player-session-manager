FROM node:20

WORKDIR /usr/src/app

# מעתיק רק את הגדרות החבילות
COPY package.json ./

# מבצע את האיתחול (npm install) בתוך הסביבה המבודדת של דוקר
RUN npm install && npm cache clean --force

# מעתיק את שאר הקוד
COPY . .

# מעקף נטפרי
ENV NODE_TLS_REJECT_UNAUTHORIZED=0

# יצירת ה-Client של גרסה 6 בלבד
RUN ./node_modules/.bin/prisma generate

# החזרת הגדרות אבטחה
ENV NODE_TLS_REJECT_UNAUTHORIZED=1

# הרצה
CMD npx prisma migrate deploy && node src/main.js