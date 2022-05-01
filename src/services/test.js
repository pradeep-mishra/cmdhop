export default [
  {
    title: 'Copy',
    hotkey: 'ctrl+c',
    showInSearch: false,
    alert: 'Copy Called'
  },
  {
    title: 'Paste',
    hotkey: 'ctrl+v',
    showInSearch: false,
    alert: 'Paste Called'
  },

  {
    title: 'Son',
    hotkey: 'option+2',
    alert: 'Son Called'
  },
  {
    title: 'Moon',
    hotkey: 'option+1',
    groupBy: 'div',
    list: {
      header: 'Choose Item',
      title: 'div'
    }
  },
  {
    title: 'Ton',
    hotkey: 'option+3',
    alert: 'Ton Called'
  },
  {
    title: 'Don',
    hotkey: 'option+4',
    alert: 'Don Called'
  },
  {
    matchURL: '*://localhost:3000/#!/hola',
    title: 'Hola',
    hotkey: 'option+h',
    alert: 'Hola Called'
  },
  {
    matchURL: '*://localhost:3000/#!/pola',
    title: 'Pola',
    hotkey: 'ctrl+p',
    alert: 'Pola Called'
  },
  {
    matchURL: '*://localhost:3000/#!/hola/lola',
    title: 'Lola',
    hotkey: 'cmd+l',
    alert: 'Lola Called'
  },
  {
    matchURL: '*://localhost:3000/#!/hola/lola/dola',
    title: 'Dola',
    hotkey: 'ctrl+d',
    alert: 'Dola Called'
  }
];
