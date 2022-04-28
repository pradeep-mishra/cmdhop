import React, { useState, useEffect } from 'react';
import { Dialog, Combobox } from '@headlessui/react';
import { addRecentSearch } from '../lib/storage';
import {
  hotkeyRegister,
  processHotkey,
  callAction
} from '../lib/hotkey';
import RecentSearches from './RecentSearches';
import SearchInput from './SearchInput';
import CmdList from './CmdList';

const registerHostkey = hotkeyRegister();

export default function CmdPalette({
  service,
  handler,
  overlay
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [actions, setActions] = useState(service.actions);
  const [showRecent, setShowRecent] = useState(true);

  useEffect(() => {
    const allKeys =
      'cmd+k,' +
      actions.map((action) => action.hotkey).join(',');
    registerHostkey(actions, (reciver, event) => {
      processHotkey(reciver, actions, setIsOpen, handler);
    });
  }, [isOpen]);

  return (
    <Dialog
      open={isOpen}
      onClose={setIsOpen}
      className='fixed inset-0 z-10 overflow-y-auto p-4 sm:p-10 md:pt-[25vh]'>
      {overlay && (
        <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-80' />
      )}
      <Combobox
        onChange={(e) => {
          addRecentSearch(e);
          setIsOpen(false);
          setActions(service.actions);
          setShowRecent(true);
          callAction(e, handler);
        }}
        as='div'
        className='mx-auto max-w-2xl transform divide-y
        divide-gray-500 divide-opacity-10 overflow-hidden
        rounded-xl bg-white bg-opacity-80 shadow-2xl ring-1
        ring-black ring-opacity-5 backdrop-blur
        backdrop-filter'>
        <SearchInput
          service={service}
          setActions={setActions}
          setShowRecent={setShowRecent}
        />
        {actions.length ? (
          <Combobox.Options
            static
            className='cmdhop-box py-4 text-base max-h-64 overflow-y-auto'>
            <RecentSearches showRecent={showRecent} />
            <CmdList actions={actions} />
          </Combobox.Options>
        ) : (
          <></>
        )}
      </Combobox>
    </Dialog>
  );
}
