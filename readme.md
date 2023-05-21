# Disquote Discord Bot

Disquote is a TypeScript-based Discord bot developed with Node.js. It allows users to request quotes based on different categories. The bot integrates with a PostgreSQL database using Prisma and is deployed on Railway. It utilizes Axios for making HTTP requests to external APIs and utilizes dotenv for environment variable management.

```shell
https://discord.gg/a2ztXpvn
```

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

| Column 1      | Column 2      | Column 3       | Column 4       | Column 5     | Column 6     |
| ------------- | ------------- | -------------- | -------------- | ------------ | ------------ |
| Age           | History       | Philosophy     | Science        | Generosity   | Freedom      |
| Athletics     | Honor         | Politics       | Self           | Genius       | Friendship   |
| Business      | Humor         | Power Quotes   | Self Help      | Gratitude    | Future       |
| Change        | Humorous      | Proverb        | Social Justice | Happiness    | Perseverance |
| Character     | Imagination   | Religion       | Society        | Health       | Philosophy   |
| Competition   | Inspirational | Sadness        | Spirituality   | Power Quotes | Truth        |
| Conservative  | Knowledge     | Science        | Sports         | Religion     | Politics     |
| Courage       | Leadership    | Self           | Stupidity      | Sadness      | Tolerance    |
| Creativity    | Life          | Social Justice | Success        | Science      | Wellness     |
| Education     | Literature    | Society        | Technology     | War          | Work         |
| Ethics        | Love          | Spirituality   | Time           | Proverb      |
| Failure       | Mathematics   | Sports         | Tolerance      | Wellness     |
| Faith         | Motivational  | Stupidity      | Truth          | Wisdom       |
| Family        | Nature        | Success        | Virtue         | Weakness     |
| Famous Quotes | Opportunity   | Technology     | War            | Virtue       |
| Film          | Pain          | Time           | Weakness       | Wisdom       |
