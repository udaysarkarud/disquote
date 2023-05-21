# Disquote Discord Bot

Disquote is a TypeScript-based Discord bot developed with Node.js. It allows users to request quotes based on different categories. The bot integrates with a PostgreSQL database using Prisma and is deployed on Railway. It utilizes Axios for making HTTP requests to external APIs and utilizes dotenv for environment variable management.

## Features

- Request quotes based on different categories.
- Caching quotes in the database and retrieving from the API if not found.
- Diverse collection of quotes.
- PostgreSQL database integration with Prisma.
- HTTP requests with Axios.
- Environment variable management with dotenv.

## Caching and API Integration

The Disquote bot caches quotes in the PostgreSQL database. When a user requests a quote, the application first searches for a quote in the database based on the specified category. If there is no quote related to that category in the database, the application calls the external API.

If the API returns a quote, the application saves it in the database and then returns the quote to the user. This caching mechanism ensures that subsequent requests for the same category can be served from the database without making unnecessary API calls.

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

4. Open the .env file and provide the necessary values for environment variables for Set the DATABASE_URL environment variable in the .env file with the connection URL.
5. Migrate the database schema:
   ```shell
   npx prisma migrate dev
   ```
6. Start the bot:
   ```shell
   npm run start
   ```

## Usage

Once the bot is running and connected to your Discord server, you can use the following commands to request quotes: <category> - Request a random quote based on the specified category. Replace <category> with the desired category, such as "inspiration", "love", "life", etc. For example, to request an Wisdom quote, you can type:

```shell
wisdom
```

## Available Categories

The Disquote bot supports the following categories for requesting quotes:

| Column 1      | Column 2      | Column 3       | Column 4       |
| ------------- | ------------- | -------------- | -------------- |
| Age           | History       | Philosophy     | Science        |
| Athletics     | Honor         | Politics       | Self           |
| Business      | Humor         | Power Quotes   | Self Help      |
| Change        | Humorous      | Proverb        | Social Justice |
| Character     | Imagination   | Religion       | Society        |
| Competition   | Inspirational | Sadness        | Spirituality   |
| Conservative  | Knowledge     | Science        | Sports         |
| Courage       | Leadership    | Self           | Stupidity      |
| Creativity    | Life          | Social Justice | Success        |
| Education     | Literature    | Society        | Technology     |
| Ethics        | Love          | Spirituality   | Time           |
| Failure       | Mathematics   | Sports         | Tolerance      |
| Faith         | Motivational  | Stupidity      | Truth          |
| Family        | Nature        | Success        | Virtue         |
| Famous Quotes | Opportunity   | Technology     | War            |
| Film          | Pain          | Time           | Weakness       |
| Freedom       | Perseverance  | Tolerance      | Wellness       |
| Friendship    | Philosophy    | Truth          | Wisdom         |
| Future        | Politics      | Virtue         | Work           |
| Generosity    | Power Quotes  | War            |                |
| Genius        | Proverb       | Weakness       |                |
| Gratitude     | Religion      | Wellness       |                |
| Happiness     | Sadness       | Wisdom         |                |
| Health        | Science       |                |                |
