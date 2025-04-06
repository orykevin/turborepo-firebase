# Turborepo Firebase Monorepo

This repository is a monorepo managed with [Turborepo](https://turbo.build/repo), integrating a [Next.js](https://nextjs.org/) application, an [Express](https://expressjs.com/) API, and [Firebase](https://firebase.google.com/) services.

## Project Structure

- `apps/`
  - `web/`: Next.js application.
  - `api/`: Express application.
- `packages/`
  - `shared/`: Shared utilities and configurations.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)
- [Firebase CLI](https://firebase.google.com/docs/cli)

## Setup

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Configure Firebase**:

   Copy your Firebase configuration file to `apps/api/config/config.json`.

3. **Set Environment Variables**:

   Copy a `.env.example` and rename it to `.env` file in both `apps/web` and `apps/api` directories, and define all necessary environment variables as per the `.env.example` files provided.

## Development

To start the development servers for both applications:


```bash
npm run dev
```


## Build

To build all applications and packages:


```bash
npm run build
```
