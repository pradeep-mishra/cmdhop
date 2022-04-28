import hotkeys from 'hotkeys-js';

export const hotkey = hotkeys;

export const hotkeyRegister = () => {
  let registered = false;
  let handler = () => {};
  return function (actions, callback) {
    if (typeof callback === 'function') {
      handler = callback;
    }
    if (registered) {
      return;
    }
    registered = true;
    const allKeys =
      'cmd+k,' +
      actions.map((action) => action.hotkey).join(',');
    console.log('registering all keys');
    hotkeys(allKeys, function (event, reciver) {
      event.preventDefault();
      handler(reciver, event);
    });
  };
};

export const processHotkey = (
  reciver,
  actions,
  setIsOpen,
  handler
) => {
  const hotkey = reciver.key;
  console.log('hotkey pressed', hotkey);
  const action = actions.find(
    (action) => action.hotkey === hotkey
  );
  if (hotkey === 'cmd+k') {
    setIsOpen((open) => !open);
  } else if (action) {
    //console.log('short cut pressed for this', action);
    if (action.clickAt) {
      if (action.clickAt.indexOf('|>') !== -1) {
        const [selector, query] =
          action.clickAt.split('|>');
        const elements =
          document.querySelectorAll(selector);
        const [prop, value] = query.split('=');
        const element = Array.from(elements).find((elm) => {
          switch (prop) {
            case 'text':
              return elm.textContent === value;
            case 'html':
              return elm.innerHTML === value;
            default:
              return false;
          }
        });
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
    } else if (action.url) {
      window.location = action.url;
    } else if (typeof handler === 'function') {
      handler(action);
    }
  }
};

export const callAction = (action, handler) => {
  console.log('select pressed', action.hotkey);
  if (action.clickAt) {
    if (action.clickAt.indexOf('|>') !== -1) {
      const [selector, query] = action.clickAt.split('|>');
      const elements = document.querySelectorAll(selector);
      const [prop, value] = query.split('=');
      const element = Array.from(elements).find((elm) => {
        switch (prop) {
          case 'text':
            return elm.textContent === value;
          case 'html':
            return elm.innerHTML === value;
          default:
            return false;
        }
      });
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
  } else if (action.url) {
    window.location = action.url;
  } else if (typeof handler === 'function') {
    handler(action);
  }
};
