import React, { useState } from 'react'
import { Dialog, Combobox } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/outline'
export default function CmdPalette({ plugin }) {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <Dialog
      open={isOpen}
      onClose={setIsOpen}
      className='fixed inset-0 p-4 pt-[25vh] overflow-y-auto'>
      <Dialog.Overlay className='fixed inset-0 bg-gray-500/60' />
      <Combobox
        onChange={(e) => console.log(e.target.value)}
        as='div'
        className='relative mx-auto max-w-xl rounded-xl bg-white shadow-2xl ring-1 ring-black/5 divide-y divide-gray-100 overflow-hidden'>
        <div className='flex items-center px-4'>
          <SearchIcon
            onChange={(e) => console.log(e.target.value)}
            className='text-gray-500 h-6 w-6'
          />
          <Combobox.Input
            className='h-12 w-full bg-transparent text-sm border-0 focus:outline-none text-gray-800 placeholder-gray-400'
            placeholder='Search...'
          />
        </div>
        <Combobox.Options
          static
          className='py-4 text-sm max-h-60 overflow-y-auto'>
          {plugin.list.map((cmd) => (
            <Combobox.Option key={cmd.name} value={cmd.name}>
              {({ active }) => (
                <div
                  className={`px-4 py-2 space-x-1 ${
                    active ? 'bg-indigo-600' : 'bg-white'
                  }`}>
                  <span
                    className={`font-medium ${
                      active ? 'text-white' : 'text-gray-900'
                    }`}>
                    {cmd.title}
                  </span>
                  <span
                    className={active ? 'text-indigo-200' : 'text-gray-400'}>
                    in {cmd.team}
                  </span>
                </div>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </Dialog>
  )
}
