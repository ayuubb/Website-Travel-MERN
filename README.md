# Voyago — Travel Booking Web App

Voyago is a travel booking front-end built with React. Users can browse curated
stays, view property details, and walk through a multi-step checkout flow.

## Tech Stack

- React 18
- React Router (v5)
- SCSS (node-sass)
- react-date-range, react-reveal

## Getting Started

Install dependencies:

```bash
npm install
```

### Available Scripts

- `npm start` — run the app in development mode at [http://localhost:3000](http://localhost:3000)
- `npm test` — launch the test runner in watch mode
- `npm run build` — build the app for production into the `build` folder

## Project Structure

```
src/
  assets/      images, icons, and SCSS styles
  elements/    reusable UI primitives (Button, Form, Star, Stepper, ...)
  parts/       composed page sections (Hero, Header, Footer, Checkout, ...)
  pages/       route-level pages (LandingPage, DetailsPage, Checkout)
  json/        mock data used during development
  utils/       small formatting helpers
```

## Docker

A `Dockerfile` is included to run the test suite in a reproducible environment:

```bash
docker build -t voyago .
docker run --rm voyago
```
