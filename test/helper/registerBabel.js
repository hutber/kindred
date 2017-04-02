/* eslint-disable import/no-commonjs, import/unambiguous */
// babel-register by default does not transpile node_modules so we have to explicitly allow transpilation of @mol-fe projects
require('babel-register')({
  ignore: /node_modules\/.*/
});
