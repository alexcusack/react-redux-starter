# React-redux starter project

A starter template for react-redux project. Makes view assumptions - just sets up a sample action and root reducer, a pingable HTTP server (`restify`), and configures the redux store.

###Start
1. Run `npm install`
2. Run `npm compile && npm start`

###Development overview
* React/Redux components are compiled from the entry point of `src/main.jsx` to a single file (`public/app.js`) and attached to `index.html`.
* React components are modular and in `src/ReactComponents`
* Redux actions and reducers are in `src/redux`
* [React-redux documentation](http://redux.js.org/docs/basics/UsageWithReact.html)
