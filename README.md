# nestjs-cpf

## Description

A set of tools to help handle Brazilian's document CPF. It provides:
- A Cpf type (with digit verification); 
- A Cpf validator based on the [class-validator](https://github.com/typestack/class-validator);
- A custom [NodeJS Pipe](https://docs.nestjs.com/pipes) to build a Cpf object;


## Installation

```bash
$ npm install
```

## Build
```bash
$ npm run build
```

## Requirements
- NodeJS

## Sample

I've created a sample NodeJS app in order to provide a function example. This sample is in the "sample" folder.


### Running the sample

1. In the root of this repo, perform the steps of Installation and Build (described above);
0. "Publish" the package using `npm link`
    ```bash
    $ npm link
    ```
0. Enter de folder "sample"
    ```bash
    $ cd sample
    ```
0. Perform a npm install (inside "sample" folder)
    ```bash
    $ npm install
    ```
0. Link with nodejs-cpf package
    ```bash
    $ npm link nodejs-cpf
    ```
0. Start the sample application in "watch" mode:
    ```bash
    # watch mode
    $ npm run start:dev
    ```

## How to use it in your own application

1. Install the following packages: `class-transformer` and `class-validator`;
0. Add to your `main.ts` file:
    ```TypeSript
    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
      }),
    );
    ```
0. Link your app to the current package:
    ```bash
    $ npm link nodejs-cpf
    ```


## TODO
- Add tests;
- Publish this package to Npm Registry;
