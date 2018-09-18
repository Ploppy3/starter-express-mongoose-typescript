import fs = require('fs');

export const logger = {

  isProd: false,

  init: function () {
    if (process.argv.indexOf('--prod') > -1) {
      this.isProd = true;
      console.log('prod detected');
    } else {
      this.isProd = false;
    }
  },

  log: function (value: string, ...args) {
    console.log(value, ...args);
    this.logInFile(value, ...args);
  },

  warn: function (value: string, ...args) {
    console.log('\x1b[33m%s', value, ...args, '\x1b[0m');
    this.logInFile(value, ...args);
  },

  error: function (value: string, ...args) {
    console.log('\x1b[31m%s', value, ...args, '\x1b[0m');
    this.logInFile(value, ...args);
  },

  logInFile: function (value: string, ...args) {
    if (this.isProd == false) {
      return;
    }
    fs.appendFile('dist/log.txt', [value, ...args].join(' | ') + '\n', function (err) {
      if (err) {
        throw err;
      };
    });
  }

}