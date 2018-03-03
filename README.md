# A Tracker App
A tracking app

Simply run `npm install`

* Once installed run `npm start`
* Navigate to `localhost:8080`
* See the project.

# Contributing
We are using Commitizen for our commits.

`npm install -g commitizen`

Init commitizen configuration

`commitizen init hutber-conventional-changelog --save-dev --save-exact`

## Useage

When making changes, we use `pre-commit` and `husky` to use a `lint-staged` process. So we use the `npm run commit` hook added into package.json.

I've added `alias nc="npm run commit"` to my `.bashrc` file so i can just do `nc` when committing

``

## Phonegap Plugins Used
phonegap plugin add cordova-plugin-crosswalk-webview
