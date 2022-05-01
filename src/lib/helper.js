export const getWindowURL = () => {
  return window.location.href.split('?')[0];
};

export const windowURL = () => {
  return window.location.href.split('?')[0];
};

export const matchURL = (url, matchURL) => {
  if (matchURL.includes('*')) {
    return url.match(new RegExp('^' + matchURL.replace(/\*+/g, '.*') + '$'))
      ? true
      : false;
  }
  return url === matchURL;
};

export const filterActionForThisPage = (actions) => {
  //console.log('filtering action for', getWindowURL());
  return actions.filter((action) => {
    if (action.matchURL) {
      return matchURL(getWindowURL(), action.matchURL, action.title);
    }
    return true;
  });
};

export const getPressedCommand = (actions, hotkey) => {
  return actions.find((action) => {
    if (action.matchURL) {
      return matchURL(getWindowURL(), action.matchURL)
        ? action.hotkey === hotkey
        : false;
    }
    return action.hotkey === hotkey;
  });
};
