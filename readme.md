# Disquote Discord Bot

Disquote is a TypeScript-based Discord bot developed with Node.js. It allows users to request quotes based on different categories. The bot integrates with a PostgreSQL database using Prisma and is deployed on Railway. It utilizes Axios for making HTTP requests to external APIs and utilizes dotenv for environment variable management.

## Features

- Request quotes based on different categories.
- Easy-to-use Discord bot commands.
- Fast and reliable responses.
- Diverse collection of quotes.
- PostgreSQL database integration with Prisma.
- Deployment on Railway.
- HTTP requests with Axios.
- Environment variable management with dotenv.
- Caching quotes in the database and retrieving from the API if not found.

## Installation

To install and run Disquote on your local machine, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/udaysarkarud/disquote
   ```

2. Navigate to the project directory:

   ```shell
   cd disquote
   ```

3. Install the required dependencies:

   ```shell
   npm install
   ```

4. Install the required dependencies:

   ```shell
   npm install
   ```

5. Open the .env file and provide the necessary values for environment variables for Set the DATABASE_URL environment variable in the .env file with the connection URL.
6. Migrate the database schema:
   ```shell
   npx prisma migrate dev
   ```
7. Start the bot:
   ```shell
   npm run start
   ```

## Caching and API Integration

The Disquote bot caches quotes in the PostgreSQL database. When a user requests a quote, the application first searches for a quote in the database based on the specified category. If there is no quote related to that category in the database, the application calls the external API.

If the API returns a quote, the application saves it in the database and then returns the quote to the user. This caching mechanism ensures that subsequent requests for the same category can be served from the database without making unnecessary API calls.