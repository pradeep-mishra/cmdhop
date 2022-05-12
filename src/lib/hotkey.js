import hotkeys from 'hotkeys-js';
import { getWindowURL, matchAllURL, getPressedCommand } from './helper';

const ENTER_KEY = '↵';

export const hotkeyRegister = () => {
  let registered = false;
  let handler = () => {};
  return function (actions, callback, reset) {
    //console.log('registring keys', actions);
    if (typeof callback === 'function') {
      handler = callback;
    }
    //console.log('registered', registered, 'reset', reset);
    if (registered && !reset) {
      return;
    }
    registered = true;
    if (reset) {
      //console.log('unbind old keys');
      hotkeys.unbind();
    }
    const url = getWindowURL();
    const allKeys =
      'cmd+k,' +
      actions
        .map((action) => {
          if (action.matchURL) {
            return matchAllURL(url, action.matchURL, action)
              ? action.hotkey
              : '';
          }
          return action.hotkey;
        })
        .filter((key) => key)
        .join(',');
    //console.log('hooking all keys', allKeys);
    hotkeys(allKeys, function (event, reciver) {
      //console.log('shortcut called', reciver.key);
      handler(reciver, event);
    });
  };
};

export const onHotKeyPress = (reciver, actions, handler) => {
  const hotkey = reciver.key;
  const action = getPressedCommand(actions, hotkey);
  if (action) {
    execAction(action, handler);
  }
};

export const execAction = (action, handler) => {
  if (action.clickAt) {
    clickAt(action, handler);
  } else if (action.gotoURL) {
    gotoURL(action, handler);
  } else if (action.groupBy) {
    groupBy(action, handler);
  } else if (action.alert) {
    alertIt(action, handler);
  } else if (typeof handler === 'function') {
    handleCallback(action, handler);
  }
};

export const onHelperItemClick = (selectedAction, handler) => {
  if (selectedAction && selectedAction.element) {
    selectedAction.element.focus();
    selectedAction.element.click();
  }
  if (typeof handler === 'function') {
    handler();
  }
};

function clickAt(action, handler) {
  if (action.clickAt.indexOf('|>') !== -1) {
    const [selector, query] = action.clickAt.split('|>');
    const elements = document.querySelectorAll(selector);
    const [prop, value] = query.split('=');
    let element = Array.from(elements).find((elm) => {
      switch (prop) {
        case 'text':
          return elm.textContent === value;
        case 'html':
          return elm.innerHTML === value;
        case 'parent':
          return true;
        default:
          return false;
      }
    });
    if (prop) {
      switch (prop) {
        case 'parent':
          element = element.parentElement;
          break;
      }
    }
    if (element) {
      element.focus();
      element.click();
    }
  } else {
    const element = document.querySelector(action.clickAt);
    if (element) {
      element.focus();
      element.click();
    }
  }
}

function gotoURL(action, handler) {
  window.location = action.gotoURL;
}

function groupBy(action, handler) {
  const elements = document.querySelectorAll(action.groupBy);
  const helperList = Array.from(elements).map((elm, index) => {
    const listItem =
      action.list && action.list.title
        ? elm.querySelector(action.list.title)
        : elm;
    return {
      id: index + 1,
      header: (action.list && action.list.header) || 'Choose an option',
      title: listItem ? listItem.textContent : 'Title not found',
      element: elm,
      dudkey: ENTER_KEY
    };
  });
  handler(action, helperList, 'groupby');
}

function alertIt(action, handler) {
  console.log(action.alert);
}

function handleCallback(action, handler) {
  handler(action, [], 'callback');
}
