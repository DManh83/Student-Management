# Student-Management

## Overview

Backend for Student Management

## Install dependencies

- Run command `npm install` to install all package

## Migration

- To create new migration file

```bash
   npm run db:migration:generate {file-name}
```

- New migration file will be created with format name `{timestamp}-{file-name}.js` in src/migrations folder
- To run migration run command:

```bash
   npm run db:migrate
```

## Seeder

- To create new seed file

```bash
   npm run db:seed:generate {file-name}
```

- New seed file will be created with format name `{timestamp}-{file-name}.js` in src/seeders folder

- To seed data run command:

```bash
   npm run db:seed:all
```

Create .env file and prepare all env variables

```
   cp .env.example .env
```

Start Service

```
   npm start
```

## License

UNLICENSED.
