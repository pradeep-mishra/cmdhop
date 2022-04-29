import plugins from '../plugins/registry';
import {
  CONVERT_CMD_TO_CTRL_IN_NON_MAC,
  CONVERT_OPTION_TO_ALT_IN_NON_MAC
} from '../plugins/registry';

function isMac() {
  const name = navigator.appVersion || navigator.userAgent;
  return name.toLowerCase().indexOf('macintosh') >= 0;
}

function addIds(actions) {
  const isThisMac = isMac();
  return actions.map((item, index) => {
    item.id = index + 1;
    if (CONVERT_CMD_TO_CTRL_IN_NON_MAC && !isThisMac) {
      item.hotkey = item.hotkey.replace('cmd', 'ctrl');
    }
    if (CONVERT_OPTION_TO_ALT_IN_NON_MAC && !isThisMac) {
      item.hotkey = item.hotkey.replace('option', 'alt');
    }
    return item;
  });
}
export default function loadPlugin() {
  console.log('checking plugins');

  const plugin = plugins.find((plugin) => {
    return document.URL.includes(plugin.url);
  });
  if (!plugin) {
    console.log(
      'no plugin found. loading',
      plugins[0].name
    );
    plugins[0].actions = addIds(plugins[0].actions);
    return plugins[0];
    //throw new Error(`Plugin ${this.name} not found`);
  }
  console.log('plugin found', plugin.name);
  plugin.actions = addIds(plugin.actions);
  return plugin;
}
