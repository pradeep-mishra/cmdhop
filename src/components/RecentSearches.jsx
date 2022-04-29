import React from 'react';
import CmdOption from './CmdOption';
import { getRecentSearch } from '../lib/storage';
import { filterActionForThisPage } from '../lib/hotkey';

const RecentSearches = ({ recent }) => {
  let recentSearch = filterActionForThisPage(
    getRecentSearch()
  );

  console.log('recents is', recentSearch);

  return (
    recent &&
    recentSearch.length && (
      <>
        <span className='px-4 my-4 text-sm font-semibold text-gray-700'>
          Recent searches
        </span>
        {recentSearch.map((cmd) => (
          <CmdOption cmd={cmd} key={cmd.id} />
        ))}
        <div className='my-2 bg-gray-300 h-[1px]' />
      </>
    )
  );
};

export default RecentSearches;
