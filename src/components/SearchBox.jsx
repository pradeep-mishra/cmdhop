//import React, { useEffect } from 'react';
//import { useEffect } from 'preact';

import { Combobox } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/outline';

const SearchBox = ({ actions, setActions, setRecent, recent }) => {
  return (
    <div className='relative flex items-center px-4'>
      <SearchIcon className='pointer-events-none absolute top-4.5 left-4 h-5 w-5 text-gray-900 text-opacity-40' />
      <Combobox.Input
        className='h-14 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-lg'
        placeholder='Search...'
        onChange={(e) => {
          const value = e.target.value;
          if (value) {
            setRecent(false);
          } else {
            setRecent(recent);
          }
          setActions(
            actions.filter((item) =>
              item.title.toLowerCase().includes(value.toLowerCase())
            )
          );
        }}
      />
    </div>
  );
};

export default SearchBox;
