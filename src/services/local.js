export default {
  actions: [
    {
      title: 'Copy Option',
      hotkey: 'ctrl+c',
      showInSearch: false,
      log: 'Copy Called'
    },
    {
      title: 'Paste Paste',
      hotkey: 'ctrl+v',
      showInSearch: false,
      log: 'Paste Called'
    },

    {
      title: 'Select Option 2',
      hotkey: 'option+2',
      log: 'Option 2 called'
    },
    {
      title: 'Select Option 1',
      hotkey: 'option+1',
      groupBy: 'div',
      list: {
        header: 'Choose Item',
        title: 'div',
        log: 'item clicked from option 1'
      }
    },
    {
      title: 'Select Option 3',
      hotkey: 'option+3',
      log: 'Option 3 caled'
    },
    {
      title: 'Select Option 4',
      hotkey: 'option+4',
      log: 'Option 4 called'
    },
    {
      matchURL: '*://localhost:3000/#!/hola',
      title: 'Goto Hola Page',
      hotkey: 'option+h',
      log: 'Hola page loaded'
    },
    {
      matchURL: '*://localhost:3000/#!/user',
      title: 'Goto User Page',
      hotkey: 'ctrl+p',
      log: 'User page loded'
    },
    {
      matchURL: '*://localhost:3000/#!/hola/user',
      title: 'Goto Hola User Page',
      hotkey: 'cmd+l',
      log: 'Hola user page loaded'
    },
    {
      matchURL: '*://localhost:3000/#!/hola/user/1',
      title: 'Goto Hola User 1 Page',
      hotkey: 'ctrl+d',
      log: 'Hola user 1 page loaded'
    }
  ]
};
