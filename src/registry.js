import gmail from './services/gmail.js';
import local from './services/local.js';

export const CONVERT_CMD_TO_CTRL_IN_NON_MAC = true;
export const CONVERT_OPTION_TO_ALT_IN_NON_MAC = true;

export default [
  {
    name: 'local',
    url: ['http://localhost', 'https://cmdhop.netlify.app'],
    service: local
  },
  {
    name: 'gmail',
    url: 'https://mail.google.com',
    service: gmail
  }
];
