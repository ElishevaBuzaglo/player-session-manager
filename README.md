# Player Session Manager (Backend Assignment)

A professional backend service implementation for managing player sessions and activity registrations. Built with a focus on data integrity, scalability, and seamless deployment using modern tools.

## 🚀 Features
- **Data Modeling:** Robust schema designed with Prisma ORM and PostgreSQL.
- **Business Logic:** Secure registration process with status validation and duplicate prevention.
- **Database Constraints:** Leverages PostgreSQL unique constraints for absolute data consistency.
- **Containerized:** Fully Dockerized environment for consistent execution across different platforms.

## 🛠 Tech Stack
- **Runtime:** Node.js
- **ORM:** Prisma
- **Database:** PostgreSQL
- **Infrastructure:** Docker & Docker Compose

## 📁 Project Structure
- `src/main.js` - System entry point demonstrating core flows.
- `src/game.service.js` - Main business logic and service layer.
- `prisma/schema.prisma` - Database models and relationships.
- `Dockerfile` & `docker-compose.yml` - Container orchestration and setup.

## 🏃 How to Run
To run this project locally, ensure you have Docker installed and follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <YOUR_REPOSITORY_URL>
   cd player-session-manager
Start the system:

Bash
docker-compose up --build
What to expect:

A PostgreSQL database container will start.

Database migrations will be applied automatically.

The main script will run, creating a test user and registering them for an activity.

Success or error messages will be printed directly to your terminal.

🧪 Consistency Testing
The system is built to handle duplicate requests. If you run docker-compose up a second time, the service will identify that the player is already registered for that specific session and return a clear, handled error message instead of crashing.
