/**
 * These rules enforce the Hack Reactor Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

module.exports = {
  "plugins": ["react-hooks"],
  "extends": ["airbnb"],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "jest": true,
  },
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};