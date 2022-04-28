export const addRecentSearch = (cmd) => {
  const recent =
    JSON.parse(
      localStorage.getItem('cmdhop_recent_search')
    ) || [];
  const index = recent.findIndex(
    (item) => item.title === cmd.title
  );
  if (index !== -1) {
    recent.splice(index, 1);
  }
  recent.unshift(cmd);
  //console.log('recent is', recent.length);
  if (recent.length > 4) {
    recent.pop();
  }
  localStorage.setItem(
    'cmdhop_recent_search',
    JSON.stringify(recent)
  );
};

export const getRecentSearch = () => {
  const recent = JSON.parse(
    localStorage.getItem('cmdhop_recent_search') || '[]'
  );
  return recent;
};
