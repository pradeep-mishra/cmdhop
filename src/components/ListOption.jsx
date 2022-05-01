import React from 'react';
import { Combobox } from '@headlessui/react';

const keysMap = {
  cmd: '⌘',
  ctrl: '⌃',
  shift: '⇧',
  alt: '⌥',
  caps: '⇪',
  enter: '↵',
  option: '⌥',
  '+': ''
};

const ListOption = ({ item }) => {
  return (
    item && (
      <Combobox.Option value={item}>
        {({ active }) => (
          <div
            className={`mx-2 px-4 py-2 space-x-1 rounded ${
              active ? 'bg-gray-400/20' : 'bg-transparent'
            }`}>
            <span
              className={`font-normal text-base 
              ${active ? 'text-gray-900' : 'text-gray-700'}
              `}>
              {item.title}
            </span>
            <span
              className={`
            ${active ? 'text-gray-900' : 'text-gray-700'} 
            float-right text-sm`}>
              <kbd className='font-sans'>
                {item.hotkey
                  ? item.hotkey
                      .replace(
                        /ctrl|cmd|shift|alt|option|enter|\+/g,
                        (match) => keysMap[match]
                      )
                      .toUpperCase()
                  : item.dudkey || ''}
              </kbd>
            </span>
          </div>
        )}
      </Combobox.Option>
    )
  );
};

export default ListOption;
