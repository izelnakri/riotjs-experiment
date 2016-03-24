Status: isomorphic RiotJS example is done, testing Redux with RiotJS(still in progress)

I did this in RiotJS on purpose to inspire others. JS code is high quality.

I didn't use a bundler like webpack, because I like good DSLs, I know node + GulpJs and I'm not a hipster.

iz namespace is used. For example: ``` <iz-rating-list /> ```

All the css is component specific, bootstrap has been used to its full power.

- ``` npm install gulp riot sequelize-cli babel-cli browserify -g ```

- ``` npm install ```

Create the models:

- ``` createdb riotjs_example ```

- ``` sequelize db:migrate  ```

``` gulp watch ```

``` npm run server ```

FOR UNIT TESTS:
- ``` createdb riotjs_example_test ```
- ``` sequelize db:migrate --env=test ```

TODO:
- remove redundant package.json dependencies, check them for README
- find the redux-form and redux-localstorage solution without react
- nodemon to restart process on every change
- make sourcemaps work for js + css
- make Object.assign + optional parameters work with Babel
- optimize the gulp build process
- maybe add 'selectors' for Redux


jspm install npm:lodash, npm:jquery, npm:chart.js, bootstrap.js, moment.js

some other things I might do in future:
- form validations
- store changes
- tests (unit test on the store, API test)
- multiple data set req integration from a server
- form generation from js
- front-end copy + expression read
- copy sharing = backend / frontend / multi-lang
- async load order, ES6 imports, babel transpiling(maybe)
- real-time comm. (socket.io)
- error reporting
- debugging
- Object observer (if needed)
- multi-auth (fb/twitter etc)
- styleguide
- rake routes and schema.rb functionality to the backend
- deployment(probably capistrano)
- api-serializer (maybe) + json+hal
- backend caching with redis smt like fresh_when
- multiple login - OAuth
- maybe nodemon with babel in future

maybe turn /pages into /apps
