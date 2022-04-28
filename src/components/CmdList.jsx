import React from 'react';
import CmdOption from './CmdOption';

const CmdList = ({ actions }) => {
  return actions && actions.length ? (
    <>
      {actions
        .filter((cmd) => cmd.showInSearch !== false)
        .map((cmd) => (
          <CmdOption cmd={cmd} key={cmd.id} />
        ))}
    </>
  ) : (
    <></>
  );
};

export default CmdList;
