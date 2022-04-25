import React from 'react'
const keysMap = {
  cmd: '⌘',
  ctrl: '⌃',
  shift: '⇧',
  alt: '⌥',
  caps: '⇪',
  enter: '↵',
  option: '⌥',
  '+': ''
}

const CmdOption = ({ cmd, active }) => {
  return (
    <div
      className={`mx-2 px-4 py-2 space-x-1 rounded ${
        active ? 'bg-gray-400/30' : 'bg-transparent'
      }`}>
      <span
        className={`font-normal text-sm ${
          active ? 'text-gray-900' : 'text-gray-700'
        }`}>
        {cmd.title}
      </span>
      <span
        className={
          (active ? 'text-gray-900' : 'text-gray-700') +
          ' float-right text-xs'
        }>
        {cmd.hotkey
          .replace(
            /ctrl|cmd|\+/g,
            (match) => keysMap[match]
          )
          .toUpperCase()}
      </span>
    </div>
  )
}

export default CmdOption
