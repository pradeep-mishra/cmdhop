export const addToRecentSearch = (cmd) => {
  let recent = JSON.parse(localStorage.getItem('cmdhop_recent_search')) || [];
  const index = recent.findIndex((item) => item.title === cmd.title);
  if (index !== -1) {
    recent.splice(index, 1);
  }
  recent.unshift(cmd);
  recent = recent.map((item, index) => {
    item.id = 'rc' + Math.floor(Math.random(Date.now()) * 1234567890);
    return item;
  });
  if (recent.length > 4) {
    recent.pop();
  }
  localStorage.setItem('cmdhop_recent_search', JSON.stringify(recent));
};

export const getRecentSearch = () => {
  let recent = JSON.parse(localStorage.getItem('cmdhop_recent_search') || '[]');
  recent = recent.map((item, index) => {
    item.id = 'rc' + Math.floor(Math.random(Date.now()) * 1234567890);
    return item;
  });
  return recent;
};
