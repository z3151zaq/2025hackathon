This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Project Stack & Dependencies

This project uses the following main technologies:

- **Next.js 15**: React framework for server-side rendering and static site generation.
- **React 19**: UI library for building user interfaces.
- **Prisma ORM**: Type-safe database client for Node.js and TypeScript.
- **shadcn/ui**: Modern, accessible React component library for building beautiful UIs.
- **Tailwind CSS 4**: Utility-first CSS framework for rapid UI development.
- **Jest**: JavaScript testing framework for unit and integration tests.

## Directory Structure

- `app/` - Main application code (pages, components, layouts)
- `lib/` - Shared libraries (e.g., database, Prisma)
- `models/` - TypeScript interfaces and models
- `utils/` - Utility/helper functions
- `prisma/` - Prisma schema and migrations
- `tests/` - All test files and test helpers

## Testing

- All tests are placed in the `tests/` directory.
- Run tests with:
  ```bash
  npm test
  ```
- Jest is used for running and writing tests. Type definitions for Jest are included.

## shadcn/ui Integration

- UI components are provided by [shadcn/ui](https://ui.shadcn.com/).
- To add new components, use:
  ```bash
  npx shadcn-ui@latest add <component>
  ```
- See the [shadcn/ui documentation](https://ui.shadcn.com/docs) for usage and customization.

## Environment & Database

- Uses SQLite by default (see `prisma/schema.prisma`).
- For Postgres, see the `docker-compose.yml` and update `.env` accordingly.

## How to Start

1. Install dependencies:
   ```bash
   npm install
   ```
2. Generate Prisma client:
   ```bash
   npx prisma generate
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## License

MIT
