import React, { useState, useEffect, useRef } from 'react'
import { Dialog, Combobox } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/outline'
import CmdOption from './CmdOption'
import hotkeys from 'hotkeys-js'

function addRecentSeach(title) {
  const recent =
    JSON.parse(
      localStorage.getItem('cmdhop_recent_search')
    ) || []
  const index = recent.findIndex((item) => item === title)
  if (index !== -1) {
    recent.splice(index, 1)
  }
  recent.unshift(title)
  if (recent.length > 4) {
    recent.pop()
  }
  localStorage.setItem(
    'cmdhop_recent_search',
    JSON.stringify(recent)
  )
}

function getRecentSearch(service) {
  const recent =
    JSON.parse(
      localStorage.getItem('cmdhop_recent_search')
    ) || []
  const searched = recent
    .map((title) => {
      return (
        service.actions.find(
          (action) => action.title === title
        ) || false
      )
    })
    .filter((item) => item)
  console.log('serched is', searched)
  return searched
}

export default function CmdPalette({
  service,
  handler,
  overlay
}) {
  const [isOpen, setIsOpen] = useState(true)
  const [actions, setActions] = useState(service.actions)
  const [showRecent, setShowRecent] = useState(true)

  useEffect(() => {
    const allKeys =
      'cmd+k,' +
      actions.map((action) => action.hotkey).join(',')
    hotkeys(allKeys, function (event, reciver) {
      event.preventDefault()
      const hotkey = reciver.key
      const action = actions.find(
        (action) => action.hotkey === hotkey
      )
      if (hotkey === 'cmd+k') {
        setIsOpen(!isOpen)
      } else if (action) {
        console.log('short cut pressed for this', action)
        if (action.clickat) {
          if (action.clickat.indexOf('|>') !== -1) {
            const [selector, query] =
              action.clickat.split('|>')
            const elements =
              document.querySelectorAll(selector)
            const [prop, value] = query.split('=')
            const element = Array.from(elements).find(
              (elm) => {
                switch (prop) {
                  case 'text':
                    return elm.textContent === value
                  case 'html':
                    return elm.innerHTML === value
                  default:
                    return false
                }
              }
            )
            if (element) {
              element.click()
            }
          } else {
            const element = document.querySelector(
              action.clickat
            )
            if (element) {
              element.click()
            }
          }
        } else if (
          handler &&
          typeof handler === 'function'
        ) {
          handler(action)
        }
      }
    })

    return () => {
      hotkeys.unbind()
      console.log('unregistering all hotkeys')
    }
  }, [isOpen])

  return (
    <Dialog
      open={isOpen}
      onClose={setIsOpen}
      className='fixed inset-0 p-4 pt-[25vh] overflow-y-auto'>
      {overlay && (
        <Dialog.Overlay className='fixed inset-0 bg-gray-500/60' />
      )}
      <Combobox
        onChange={(e) => {
          addRecentSeach(e.title)
          setIsOpen(false)
        }}
        as='div'
        className={`relative mx-auto max-w-xl rounded-xl bg-white/70 shadow-2xl ring-1 ring-black/5 divide-y divide-gray-100 overflow-hidden ${
          actions.length ? 'pb-2' : ''
        }`}>
        <div className='flex items-center px-4'>
          <SearchIcon
            onChange={(e) => console.log(e.target.value)}
            className='text-gray-500 h-6 w-6'
          />
          <Combobox.Input
            className='h-14 mx-2 w-full bg-transparent text-sm border-0 focus:outline-none text-gray-800 placeholder-gray-400'
            placeholder='Search...'
            onChange={(e) => {
              const value = e.target.value
              if (value) {
                setShowRecent(false)
              } else {
                setShowRecent(true)
              }
              setActions(
                service.actions.filter((item) =>
                  item.title
                    .toLowerCase()
                    .includes(value.toLowerCase())
                )
              )
            }}
          />
        </div>
        {actions.length ? (
          <Combobox.Options
            static
            className='cmdhop-box py-4 text-sm max-h-60 overflow-y-auto'>
            {showRecent && (
              <>
                <span className='px-4 my-4 text-xs font-semibold text-gray-700'>
                  Recent searches
                </span>
                {getRecentSearch(service).map((cmd) => (
                  <Combobox.Option
                    key={cmd.name}
                    value={cmd}>
                    {({ active }) => (
                      <CmdOption
                        cmd={cmd}
                        active={active}
                      />
                    )}
                  </Combobox.Option>
                ))}
                <hr className='my-2' />
              </>
            )}

            {actions
              .filter((cmd) => cmd.search !== false)
              .map((cmd) => (
                <Combobox.Option key={cmd.name} value={cmd}>
                  {({ active }) => (
                    <CmdOption cmd={cmd} active={active} />
                  )}
                </Combobox.Option>
              ))}
          </Combobox.Options>
        ) : (
          <></>
        )}
      </Combobox>
    </Dialog>
  )
}
