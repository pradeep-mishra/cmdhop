import gmail from './services/gmail.js';
import local from './services/test.js';

export const CONVERT_CMD_TO_CTRL_IN_NON_MAC = true;
export const CONVERT_OPTION_TO_ALT_IN_NON_MAC = true;

export default [
  {
    name: 'local',
    url: 'http://localhost:3000',
    service: local
  },
  {
    name: 'gmail',
    url: 'https://mail.google.com',
    service: gmail
  }
];
