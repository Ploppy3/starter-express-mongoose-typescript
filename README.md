# Starter Nodejs-Express-Mongoose with Typescript

This project is a starter for Nodejs-Express-Mongoose with Typescript.

Dependencies are limited to strict minimum.

## Getting started

`yarn install` || `npm install`

Gulp takes care of recompiling and restarting the server on file change:

In developement: `yarn serve` || `npm run serve`

Or using only the TypeScript Compiler: `yarn serve-tsc` || `npm run serve-tsc`

---

Start the production server (you must build for production before your serve for production)

`yarn build-prod` || `npm run build-prod`

`yarn serve-prod` || `npm run serve-prod`

## Usage

### Controller

Controllers are the core of the system. A controller can listen to HTTP methods (GET, POST, PUT, DELETE) on a given URL.

A controller extends the Controller class.

A simple controller which returns 'ok' when called with the HTTP GET method looks like this:

``` Typescript
export class ControllerOK extends Controller {

  constructor() {
    super();
  }

  get() {
    this.res.send('ok');
  }
}
```

### Router

A custom router is used to redirect HTTP requests to the controllers.

In `index.ts`

`const router = new RestRouter();`

In order to bind a Controller to an URL.

`router.bind('/tell-me-ok', new ControllerOK());`

### Logger

The `logger` object is used to log colorful text in the console as well as creating a log file when in production mode.

Initiate the logger once in `index.ts`

`logger.init()`

log() warn() error()

``` Typescript
logger.log('a','b','c')
logger.warn('a','b','c')
logger.error('a','b','c')
```

### Best practices

Mongoose models and their respective schemas should be put in the `src/models` directory (each pair in a single file).
