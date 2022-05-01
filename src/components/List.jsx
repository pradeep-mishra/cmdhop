import React from 'react';
import ListOption from './ListOption';

const List = ({ actions }) => {
  return actions && actions.length ? (
    <>
      {actions
        .filter((item) => item.showInSearch !== false)
        .map((item) => (
          <ListOption item={item} key={item.id} />
        ))}
    </>
  ) : (
    <></>
  );
};

export default List;
