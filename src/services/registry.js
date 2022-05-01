import gmail from './gmail.js';
import test from './test.js';
import contentstack from './contentstack.js';

export const CONVERT_CMD_TO_CTRL_IN_NON_MAC = true;
export const CONVERT_OPTION_TO_ALT_IN_NON_MAC = true;

export default [
  {
    name: 'test',
    url: 'http://localhost:3000',
    actions: test
  },
  {
    name: 'gmail',
    url: 'https://mail.google.com',
    actions: gmail
  },
  {
    name: 'contentstack',
    url: 'https://app.contentstack.com',
    actions: contentstack
  }
];
