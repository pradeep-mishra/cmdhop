import hotkeys from 'hotkeys-js';

export const windowURL = () => {
  return window.location.href.split('?')[0];
};

export const matchURL = (url, matchURL) => {
  if (matchURL.includes('*')) {
    return url.match(
      new RegExp('^' + matchURL.replace(/\*+/g, '.*') + '$')
    )
      ? true
      : false;
  }
  return url === matchURL;
};

export const filterActionForThisPage = (actions) => {
  return actions.filter((action) => {
    if (action.matchURL) {
      return matchURL(windowURL(), action.matchURL);
    }
    return true;
  });
};

export const hotkeyRegister = () => {
  let registered = false;
  let handler = () => {};
  return function (actions, callback, reset) {
    if (typeof callback === 'function') {
      handler = callback;
    }
    if (registered && !reset) {
      return;
    }
    registered = true;
    if (reset) {
      hotkeys.unbind();
    }
    const url = windowURL();
    const allKeys =
      'cmd+k,' +
      actions
        .map((action) => {
          if (action.matchURL) {
            return matchURL(url, action.matchURL)
              ? action.hotkey
              : '';
          }
          return action.hotkey;
        })
        .filter((key) => key)
        .join(',');
    console.log(
      'registering hotkeys',
      allKeys,
      windowURL()
    );
    hotkeys(allKeys, function (event, reciver) {
      handler(reciver, event);
    });
  };
};

export const callHotkey = (
  reciver,
  actions,
  setIsOpen,
  handler,
  event
) => {
  event.preventDefault();
  const hotkey = reciver.key;
  console.log('key pressed', hotkey);
  if (hotkey === 'cmd+k') {
    setIsOpen((open) => !open);
    return;
  }
  const action = actions.find((action) => {
    if (action.matchURL) {
      return matchURL(windowURL(), action.matchURL)
        ? action.hotkey === hotkey
        : false;
    }
    return action.hotkey === hotkey;
  });
  if (action) {
    callAction(action, handler);
  }
};

export const callAction = (action, handler) => {
  console.log('calling action', action.hotkey, action);
  if (action.clickAt) {
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
      const element = document.querySelector(
        action.clickAt
      );
      if (element) {
        element.focus();
        element.click();
      }
    }
  } else if (action.gotoURL) {
    window.location = action.gotoURL;
  } else if (typeof handler === 'function') {
    handler(action);
  }
};
