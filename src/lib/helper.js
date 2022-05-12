export const getWindowURL = () => {
  return window.location.href.split('?')[0];
};

export const windowURL = () => {
  return window.location.href.split('?')[0];
};

export const matchAllURL = (url, matchUrl, action) => {
  return (
    matchURL(url, matchUrl, action) &&
    !excludeURL(url, action.excludeURL, action)
  );
};

export const matchURL = (url, matchUrl, action) => {
  if (action.exactMatch !== false) {
    if (matchUrl.includes('*')) {
      return url.match(new RegExp('^' + matchUrl.replace(/\*+/g, '.*') + '$'))
        ? true
        : false;
    }
    return url === matchUrl;
  } else {
    if (matchUrl.includes('*')) {
      return url.match(new RegExp(matchUrl.replace(/\*+/g, '.*')))
        ? true
        : false;
    }
    return url.includes(matchUrl);
  }
};

export const excludeURL = (url, excludeUrl, action) => {
  if (!excludeUrl) {
    return false;
  }
  if (action.exactExclude !== false) {
    if (excludeUrl.includes('*')) {
      return url.match(new RegExp('^' + excludeUrl.replace(/\*+/g, '.*') + '$'))
        ? true
        : false;
    }
    return url === excludeUrl;
  } else {
    if (excludeUrl.includes('*')) {
      return url.match(new RegExp(excludeUrl.replace(/\*+/g, '.*')))
        ? true
        : false;
    }
    return url.includes(excludeUrl);
  }
};

export const filterActionForThisPage = (actions) => {
  //console.log('filtering action for', getWindowURL());
  return actions.filter((action) => {
    if (action.matchURL) {
      return matchAllURL(getWindowURL(), action.matchURL, action);
    }
    return true;
  });
};

export const getPressedCommand = (actions, hotkey) => {
  return actions.find((action) => {
    if (action.matchURL) {
      return matchAllURL(getWindowURL(), action.matchURL, action)
        ? action.hotkey === hotkey
        : false;
    }
    return action.hotkey === hotkey;
  });
};
