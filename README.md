<h1 align="center">Coffee shop Management [deprecated]</h1>

This is an app where a coffee shop or restaurant owner can manage customer's orders and view how much each ingredients in stock in real time.

## How I worked on this project

- I use Prisma 1 (now deprecated)
- I use Typescript
- I use GraphQL
- I use [Material UI](https://material-ui.com)
- For the client side, I use [Next.js](https://nextjs.org) with [Apollo](https://www.apollographql.com)
- For the server side, I use Prisma 1 with GraphQL Yoga.

## Why I built the project this way

- I used GraphQL Generator for Typescript to work nicely with GraphQL and React.
- I used Prisma 1 with GraphQL Yoga because it's a simple setup to get a GraphQL API server up and running. Ok, I just want to give it a try.
- I used Material UI to give it a try.
- I used Next.js to give it a try.

## If I had more time

- I would update to Prisma 2.
- I would refactor the entire frontend application to use the Grid system and global spacing provided by [Material UI](https://material-ui.com).
- I would try to dockerize an entire application.

## Available scripts

The client side:
```bash
cd client
npm run dev
```

The server side:
```bash
cd server
npm run dev
```