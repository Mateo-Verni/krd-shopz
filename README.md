# krd-shopz

This project was bootstrapped with Create React App by Mateo Verni, pupil of CoderHouse Academy.

Create this application in order to achieve an e-commerce of Urban Shoes. Trying to achieve a simple but convincing aesthetic, as well as a smooth and simple User experience.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

### `npm run build`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

### `npm run eject`

Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `Bootstrap & Webpack dependencies`

Install Webpack. Next we need to install our Webpack development dependencies: webpack for the core of Webpack, webpack-cli so we can run Webpack commands from the terminal, and webpack-dev-server so we can run a local development server. We use --save-dev to signal that these dependencies are only for development use and not for production.

`npm i --save-dev webpack webpack-cli webpack-dev-server`

Install Bootstrap. Now we can install Bootstrap. We’ll also install Popper since our dropdowns, popovers, and tooltips depend on it for their positioning. If you don’t plan on using those components, you can omit Popper here.

`npm i --save bootstrap @popperjs/core`
