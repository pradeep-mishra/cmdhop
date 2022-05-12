import ListOption from './ListOption';
import { getRecentSearch } from '../lib/recentSearch';
import { filterActionForThisPage } from '../lib/helper';

const RecentSearch = ({ showRecent }) => {
  let recentSearch = filterActionForThisPage(getRecentSearch(true));
  return showRecent && recentSearch.length ? (
    <>
      <span className='px-4 my-4 text-xs font-semibold text-gray-700'>
        Recent searches
      </span>
      {recentSearch.map((cmd) => (
        <ListOption item={cmd} key={cmd.id} />
      ))}
      <div className='my-2 bg-gray-300 h-[1px]' />
    </>
  ) : (
    <></>
  );
};

export default RecentSearch;
