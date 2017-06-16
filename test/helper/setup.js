import path from 'path';
import csshook from 'css-modules-require-hook/preset' // import hook before routes
import routes from '/shared/views/routes'
import requireHacker from 'require-hacker';
import sass from 'node-sass';
import {jsdom} from 'jsdom';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

hook({
  extensions: ['.css'],
  generateScopedName: '[local]',
  preprocessCss: (data, filename) =>
    sass.renderSync({
      data,
      file: filename,
      importer: (url) => {
        if (url.indexOf('~') === 0) {
          const node_modules_path = path.resolve(__dirname, '../..', 'node_modules');

          return {
            file: path.join(node_modules_path, url.replace('~', ''))
          };
        }

        return {file: url};
      }
    }).css
});

const fakeComponentString = `
  module.exports = require('react').createClass({
    render() {
      return null;
    }
  });
`;

requireHacker.hook('svg', () => fakeComponentString);

// jsdom
const exposedProperties = ['window', 'navigator', 'document'];


global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
