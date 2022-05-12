import { useCmdListStore } from '../store';
import { filterActionForThisPage } from '../lib/helper';
import { hotkeyRegister } from '../lib/hotkey';
import loadService from '../lib/loadService';
import CmdList from './CmdList';
import HelperList from './HelperList';

const service = loadService();
let filteredActions = filterActionForThisPage(service.actions);
let registerHotkeys = hotkeyRegister();

function App() {
  //console.log('App component called');
  const setActions = useCmdListStore((state) => state.setActions);
  const setAllActions = useCmdListStore((state) => state.setAllActions);
  setActions(filteredActions);
  setAllActions(service.actions);

  return (
    <>
      <CmdList overlay={true} registerHotkeys={registerHotkeys} recent={true} />
      <HelperList overlay={true} />
    </>
  );
}

export default App;
