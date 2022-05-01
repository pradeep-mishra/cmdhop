import React, { useEffect, useState } from 'react';
import { Dialog, Combobox } from '@headlessui/react';
import { onHotKeyPress, execAction } from '../lib/hotkey';
import { filterActionForThisPage, getWindowURL } from '../lib/helper';
import { useCmdListStore, useHelperListStore } from '../store';
import { addToRecentSearch } from '../lib/recentSearch';
import SearchBox from './SearchBox';
import RecentSearch from './RecentSearch';
import List from './List';

let lastRegisteredURL = getWindowURL();

let setActionsRef = null;
//let setAllActionsRef = null;
let showRef = null;
let setShowRef = null;
let filteredActions = [];
let allActionsRef = [];
let registerHotkeysRef = null;
let setHelperActionsRef = null;
let setAllHelperActionsRef = null;
let setHelperShowRef = null;

const onActionSelect = (action, list, ctype) => {
  if (ctype === 'groupby') {
    setHelperActionsRef(list);
    setAllHelperActionsRef(list);
    setHelperShowRef(true);
  } else if (typeof handler === 'function') {
    handler(action);
  }
};

const CmdList = ({ overlay, registerHotkeys, recent, handler }) => {
  //console.log('CmdList component called');
  const actions = useCmdListStore((state) => state.actions);
  const show = useCmdListStore((state) => state.show);
  const setShow = useCmdListStore((state) => state.setShow);
  const allActions = useCmdListStore((state) => state.allActions);
  const setActions = useCmdListStore((state) => state.setActions);
  const setHelperActions = useHelperListStore((state) => state.setActions);
  const setHelperShow = useHelperListStore((state) => state.setShow);
  const setAllHelperActions = useHelperListStore(
    (state) => state.setAllActions
  );

  const [showRecentSearch, setShowRecentSearch] = useState(recent);
  filteredActions = filterActionForThisPage(allActions);
  showRef = show;
  setShowRef = setShow;
  setActionsRef = setActions;
  allActionsRef = allActions;
  registerHotkeysRef = registerHotkeys;
  setHelperActionsRef = setHelperActions;
  setAllHelperActionsRef = setAllHelperActions;
  setHelperShowRef = setHelperShow;

  useEffect(() => {
    registerHotkeys(actions, (reciver, event) => {
      event.preventDefault();
      if (reciver.key === 'cmd+k') {
        return setShow(!show);
      }
      onHotKeyPress(reciver, actions, onActionSelect);
    });

    return () => {
      //console.log('CmdList unmounted');
      setActions(filteredActions);
    };
  }, [show]);

  return (
    <Dialog
      open={show}
      onClose={setShow}
      className='fixed inset-0 z-10 overflow-y-auto p-4 sm:p-10 md:pt-[25vh]'>
      {overlay && (
        <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-80' />
      )}
      <Combobox
        onChange={(e) => {
          addToRecentSearch(e);
          setShow(false);
          execAction(e, onActionSelect);
        }}
        as='div'
        className='mx-auto max-w-2xl transform divide-y
        divide-gray-500 divide-opacity-10 overflow-hidden
        rounded-xl bg-white bg-opacity-80 shadow-2xl ring-1
        ring-black ring-opacity-5 backdrop-blur
        backdrop-filter'>
        <SearchBox
          actions={filteredActions}
          setActions={setActions}
          setRecent={setShowRecentSearch}
          recent={recent}
        />
        {actions.length ? (
          <Combobox.Options
            static
            className='cmdhop-box py-4 text-base max-h-64 overflow-y-auto'>
            <RecentSearch showRecent={showRecentSearch} />
            <List actions={actions} />
          </Combobox.Options>
        ) : (
          <></>
        )}
      </Combobox>
    </Dialog>
  );
};

export default CmdList;

/**************  Window URL/Location watcher **************************/
//console.log('added listerner for page change');
window.addEventListener('hashchange', (e) => {
  //console.log('hash change called', lastRegisteredURL, getWindowURL());
  if (lastRegisteredURL !== getWindowURL()) {
    lastRegisteredURL = getWindowURL();
    //console.log('re register all hot keys on page change for hashchange');
    filteredActions = filterActionForThisPage(allActionsRef);
    setActionsRef(filteredActions);
    //setAllActionsRef(filteredActions);
    //console.log('calling registerHotkeys', filteredActions);
    registerHotkeysRef(
      filteredActions,
      (reciver, event) => {
        //console.log('shortcut callback', reciver);
        event.preventDefault();
        if (reciver.key === 'cmd+k') {
          //console.log('cmd+k called hash change');
          return setShowRef(!showRef);
        }
        onHotKeyPress(reciver, filteredActions, onActionSelect);
      },
      true
    );
  }
});

window.history.pushState = (function (pushstate) {
  return function (state, title, url) {
    //console.log('history change called', lastRegisteredURL, getWindowURL());
    pushstate.apply(window.history, arguments);
    setTimeout(() => {
      if (lastRegisteredURL !== getWindowURL()) {
        lastRegisteredURL = getWindowURL();
        //console.log('re register all hot keys on page change history change');
        filteredActions = filterActionForThisPage(allActionsRef);
        setActionsRef(filteredActions);
        //setAllActionsRef(filteredActions);
        registerHotkeysRef(
          filteredActions,
          (reciver, event) => {
            event.preventDefault();
            if (reciver.key === 'cmd+k') {
              //console.log('cmd+k called history change');
              return setShowRef(!showRef);
            }
            onHotKeyPress(reciver, filteredActions, onActionSelect);
          },
          true
        );
      }
    }, 0);
  };
})(window.history.pushState);

/**********************************************************************/
