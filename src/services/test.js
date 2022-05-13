export default {
  actions: [
    {
      title: 'Copy',
      hotkey: 'ctrl+c',
      showInSearch: false,
      log: 'Copy Called'
    },
    {
      title: 'Paste',
      hotkey: 'ctrl+v',
      showInSearch: false,
      log: 'Paste Called'
    },

    {
      title: 'Son',
      hotkey: 'option+2',
      log: 'Son Called'
    },
    {
      title: 'Moon',
      hotkey: 'option+1',
      groupBy: 'div',
      list: {
        header: 'Choose Item',
        title: 'div',
        log: 'subitem clicked'
      }
    },
    {
      title: 'Ton',
      hotkey: 'option+3',
      log: 'Ton Called'
    },
    {
      title: 'Don',
      hotkey: 'option+4',
      log: 'Don Called'
    },
    {
      matchURL: '*://localhost:3000/#!/hola',
      title: 'Hola',
      hotkey: 'option+h',
      log: 'Hola Called'
    },
    {
      matchURL: '*://localhost:3000/#!/pola',
      title: 'Pola',
      hotkey: 'ctrl+p',
      log: 'Pola Called'
    },
    {
      matchURL: '*://localhost:3000/#!/hola/lola',
      title: 'Lola',
      hotkey: 'cmd+l',
      log: 'Lola Called'
    },
    {
      matchURL: '*://localhost:3000/#!/hola/lola/dola',
      title: 'Dola',
      hotkey: 'ctrl+d',
      log: 'Dola Called'
    }
  ]
};
