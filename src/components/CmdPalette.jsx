import React, { useState, useEffect } from 'react';
import { Dialog, Combobox } from '@headlessui/react';
import { addRecentSearch } from '../lib/storage';
import {
  hotkeyRegister,
  callHotkey,
  callAction,
  windowURL,
  filterActionForThisPage
} from '../lib/hotkey';
import RecentSearches from './RecentSearches';
import SearchInput from './SearchInput';
import CmdList from './CmdList';

let serviceActions = [];
let hotkeyHandler = null;
let setIsOpenRef = null;
let lastRegisteredURL = windowURL();
let registerHotkey = hotkeyRegister();

/**************  Window URL/Location watcher **************************/

window.addEventListener('hashchange', (e) => {
  if (lastRegisteredURL !== windowURL()) {
    lastRegisteredURL = windowURL();
    console.log('re register all hot keys');
    registerHotkey(
      serviceActions,
      (reciver, event) => {
        callHotkey(
          reciver,
          serviceActions,
          setIsOpenRef,
          hotkeyHandler,
          event
        );
      },
      true
    );
  }
});

window.history.pushState = (function (pushstate) {
  return function (state, title, url) {
    pushstate.apply(window.history, arguments);
    setTimeout(() => {
      if (lastRegisteredURL !== windowURL()) {
        lastRegisteredURL = windowURL();
        console.log('re register all hot keys');
        registerHotkey(
          serviceActions,
          (reciver, event) => {
            callHotkey(
              reciver,
              serviceActions,
              setIsOpenRef,
              hotkeyHandler,
              event
            );
          },
          true
        );
      }
    }, 0);
  };
})(window.history.pushState);

/**********************************************************************/

export default function CmdPalette({
  service,
  handlerFunc,
  showOverlay,
  showRecent
}) {
  serviceActions = service.actions;
  const [isOpen, setIsOpen] = useState(false);
  const [actions, setActions] = useState(service.actions);
  const [recent, setRecent] = useState(showRecent || false);
  let serviceActionArray =
    filterActionForThisPage(serviceActions);

  hotkeyHandler = handlerFunc;
  setIsOpenRef = setIsOpen;

  useEffect(() => {
    registerHotkey(actions, (reciver, event) => {
      callHotkey(
        reciver,
        actions,
        setIsOpen,
        handlerFunc,
        event
      );
    });
  }, [isOpen]);

  return (
    <Dialog
      open={isOpen}
      onClose={setIsOpen}
      className='fixed inset-0 z-10 overflow-y-auto p-4 sm:p-10 md:pt-[25vh]'>
      {showOverlay && (
        <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-80' />
      )}
      <Combobox
        onChange={(e) => {
          addRecentSearch(e);
          setIsOpen(false);
          setActions(service.actions);
          setRecent(true);
          callAction(e, handlerFunc);
        }}
        as='div'
        className='mx-auto max-w-2xl transform divide-y
        divide-gray-500 divide-opacity-10 overflow-hidden
        rounded-xl bg-white bg-opacity-80 shadow-2xl ring-1
        ring-black ring-opacity-5 backdrop-blur
        backdrop-filter'>
        <SearchInput
          actions={serviceActionArray}
          setActions={setActions}
          setRecent={setRecent}
        />
        {actions.length ? (
          <Combobox.Options
            static
            className='cmdhop-box py-4 text-base max-h-64 overflow-y-auto'>
            <RecentSearches recent={recent} />
            <CmdList actions={serviceActionArray} />
          </Combobox.Options>
        ) : (
          <></>
        )}
      </Combobox>
    </Dialog>
  );
}
