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
To run this project locally, ensure you have Docker and Docker Compose installed, then follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ElishevaBuzaglo/player-session-manager.git
   cd player-session-manager
2. **Start the environment:**
   ```bash
   docker-compose up --build
3. **What to expect:**
   - **Infrastructure:** A dedicated PostgreSQL database container initializes.
   - **Database Synchronization:** Prisma automatically applies the schema and syncs models with the database.
   - **Automated Demo:** The `main.js` script executes a core business flow: creating a test user and attempting to register them for a specific activity session.
   - **Live Logging:** Execution results, success confirmations, and any handled errors are printed directly to your terminal.

## 🧪 Consistency & Error Handling
The system is architected to prioritize **data integrity**:
- **Idempotency:** The service is designed to handle duplicate requests gracefully.
- **Constraint Validation:** The system leverages PostgreSQL unique constraints to identify if a player is already registered.
- **Handled Response:** If you run `docker-compose up` a second time, the service will identify the existing registration and return a clear, handled error message instead of crashing, demonstrating robust business logic.
