
## Description

Application that creates and show how to use a Cpf type.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## How to reproduce

1. This is a Nest application samples create by the command `nest new cpf-test`;
2. Add to packages: class-transformer and class-validator;
3. Add in the  `main.ts` file:
  ```TypeSript
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  ```

