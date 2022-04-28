import React from 'react';
import CmdPalette from './components/CmdPalette';
import loadPlugin from './lib/loadPlugin';
const plugin = loadPlugin();

function App() {
  return <CmdPalette service={plugin} overlay={true} />;
}

export default App;
