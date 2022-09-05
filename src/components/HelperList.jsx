import { Combobox, Dialog } from '@headlessui/react';
import { onHelperItemClick } from '../lib/hotkey';
import { useHelperListStore } from '../store';
import List from './List';
import SearchBox from './SearchBox';

const HelperList = ({ overlay, handler }) => {
  const show = useHelperListStore((state) => state.show);
  const setShow = useHelperListStore((state) => state.setShow);
  const actions = useHelperListStore((state) => state.actions);
  const allActions = useHelperListStore((state) => state.allActions);
  const setActions = useHelperListStore((state) => state.setActions);

  return (
    <Dialog
      open={show}
      onClose={setShow}
      className='fixed inset-0 z-10 overflow-y-auto p-4 sm:p-10 md:pt-[25vh]'>
      {overlay && (
        <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-80' />
      )}
      <Combobox
        onChange={(e) => {
          setShow(false);
          onHelperItemClick(e, handler);
        }}
        as='div'
        className='mx-auto max-w-2xl transform divide-y
        divide-gray-500 divide-opacity-10 overflow-hidden
        rounded-xl bg-white bg-opacity-80 shadow-2xl ring-1
        ring-black ring-opacity-5 backdrop-blur
        backdrop-filter'>
        <SearchBox actions={allActions} setActions={setActions} />

        {actions.length ? (
          <Combobox.Options
            static
            className='cmdhop-box py-4 text-base max-h-64 overflow-y-auto'>
            <span className='px-4 my-4 text-xs font-semibold text-gray-700 border-t-0'>
              {actions?.[0]?.header}
            </span>
            <Combobox.Option value='' />
            <List actions={actions} />
          </Combobox.Options>
        ) : (
          <></>
        )}
      </Combobox>
    </Dialog>
  );
};

export default HelperList;
