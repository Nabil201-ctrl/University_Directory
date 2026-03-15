# University Directory

This is a Next.js application that provides a directory of universities using the [Hipo Universities API](http://universities.hipolabs.com/).

## Features

- **Dynamic Search**: Search for universities dynamically by either **Name** or **Country**.
- **Real-time API Fetching**: Results are fetched directly from the Hipo Universities API based on the user's input, preventing large initial data payloads during build or load times.
- **Responsive Design**: The application uses Tailwind CSS for a responsive, mobile-friendly user interface.
- **Search Type Selection**: Easily switch between searching by country or name using a dropdown selection.
- **Debounced Fetching**: Implements debounce on the search input to avoid spamming requests to the API while typing.

## Getting Started

First, install the dependencies if you haven't already:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application in action.

## Technologies Used

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## API Reference

This project fetches data from the public [Universities API](http://universities.hipolabs.com/) (`http://universities.hipolabs.com/search`).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

Will be done soon
