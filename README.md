# Next Notes

Notes app using **React**, **Next.js**, **TailwindCSS**, **PostgreSQL**

## Getting started

1. Clone this repo
2. Run `pnpm i` to install dependencies
3. Run `pnpm db:generate`, `pnpm db:migrate` and `pnpm db:push` to set up DB
4. Start the server and database:
   - `docker compose up` to build and run frontend and database
   - `docker compose up dev` to build and run dev environment
   - `docker compose up db` to run just the db, then `pnpm dev` for dev client
5. Run `docker compose down` when you're done

## Design

UI inspiration from [Frontend Mentor](https://www.frontendmentor.io/challenges/note-taking-web-app-773r7bUfOG)

![Desktop design](https://res.cloudinary.com/dz209s6jk/image/upload/v1731069573/Challenges/abew5ajhqcspt5sgro7h.jpg)

![Mobile design](https://res.cloudinary.com/dz209s6jk/image/upload/v1731070002/Challenges/rkk08sfhhycmycubnfo8.jpg)

## Useful links

- [Deploying - Docker (Next.js docs)](https://nextjs.org/docs/app/building-your-application/deploying#docker-image)
