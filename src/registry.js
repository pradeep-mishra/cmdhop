import gmail from './services/gmail.js';
import test from './services/test.js';
import contentstack from './services/contentstack.js';

export const CONVERT_CMD_TO_CTRL_IN_NON_MAC = true;
export const CONVERT_OPTION_TO_ALT_IN_NON_MAC = true;

export default [
  {
    name: 'test',
    url: 'http://localhost:3000',
    service: test
  },
  {
    name: 'gmail',
    url: 'https://mail.google.com',
    service: gmail
  },
  {
    name: 'contentstack',
    url: 'https://app.contentstack.com',
    service: contentstack
  }
];
