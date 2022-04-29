import React from 'react';
import CmdPalette from './components/CmdPalette';
import loadPlugin from './lib/loadPlugin';
const plugin = loadPlugin();

function App() {
  return (
    <CmdPalette
      service={plugin}
      showOverlay={true}
      showRecent={true}
    />
  );
}

export default App;
