# Starte Nodejs-Express-Mongoose with Typescript

This project is a starter for Nodejs-Express-Mongoose with Typescript.

Dependencies are limited to strict minimum.

## Getting started

Gulp takes care of recompiling and restarting the server on file change:

`yarn serve` || `npm run serve`

Start in prod:

`yarn build-prod` || `npm run build-prod`

`yarn serve-prod` || `npm run serve-prod`

## Usage

We use a custom router and controllers to respond to http methods.

First we create a router (in `src/index.ts`):

`const router = new RestRouter();`

Second, we tell a controller to listen to an url.

`router.listen('/projects', new ControllerProjects());`

Controllers are the core of the system. A controller can listen to http methods (get, post, put and delete).

Define controllers in the `controllers` directory by creating a `.ts` file.
Controllers should inherit (`extends`) from the `Controller` class.
Within your controller, declare lowercase http methods functions in order to listen to specific http methods.

In the `index.ts` file, use the custom router to listen to desired endpoints.

Mongoose models and their respective schemas should be put in the `src/models` directory (each pair in a single file).