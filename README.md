# Student-Management

## Overview

Backend for Student Management

## Install dependencies

- Run command `npm install` to install all package

## Migration

- To create new migration file

```bash
   npx sequelize-cli model:generate {file-name}
```

- New migration file will be created with format name `{timestamp}-{file-name}.js` in src/migrations folder
- To run migration run command:

```bash
   npx sequelize-cli db:migrate
```

## Seeder

- To create new seed file

```bash
   npx sequelize-cli seed:generate {file-name}
```

- New seed file will be created with format name `{timestamp}-{file-name}.js` in src/seeders folder

- To seed data run command:

```bash
   npx sequelize-cli db:seed:all
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
