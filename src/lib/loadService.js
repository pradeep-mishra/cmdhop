import services, {
  CONVERT_CMD_TO_CTRL_IN_NON_MAC,
  CONVERT_OPTION_TO_ALT_IN_NON_MAC
} from '../registry';

function isMac() {
  const name = navigator.appVersion || navigator.userAgent;
  return name.toLowerCase().indexOf('macintosh') >= 0;
}

function addIds(actions) {
  const isThisMac = isMac();
  return actions.map((item, index) => {
    item.id = item.id || index + 1;
    if (CONVERT_CMD_TO_CTRL_IN_NON_MAC && !isThisMac) {
      item.hotkey = item.hotkey.replace(/cmd|command/gi, 'ctrl');
    }
    if (CONVERT_OPTION_TO_ALT_IN_NON_MAC && !isThisMac) {
      item.hotkey = item.hotkey.replace(/option|opt/gi, 'alt');
    }
    return item;
  });
}

export default function loadService() {
  let service = services.find((service) => {
    return document.URL.includes(service.url);
  });
  if (!service) {
    throw new Error('service not found');
  }
  service.actions = addIds(service.service.actions);
  console.log(`service ${service.name} loaded`);
  return service;
}
