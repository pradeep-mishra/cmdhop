import React from 'react';
import CmdOption from './CmdOption';
import { getRecentSearch } from '../lib/storage';

const RecentSearches = ({ showRecent }) => {
  return (
    showRecent && (
      <>
        <span className='px-4 my-4 text-sm font-semibold text-gray-700'>
          Recent searches
        </span>
        {getRecentSearch().map((cmd) => (
          <CmdOption cmd={cmd} key={cmd.id} />
        ))}
        <div className='my-2 bg-gray-300 h-[1px]' />
      </>
    )
  );
};

export default RecentSearches;
