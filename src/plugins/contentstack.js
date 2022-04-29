export default [
  {
    title: 'Show stacks...',
    hotkey: 'shift+h',
    icon: 'new',
    clickAt: 'svg[name=Logo]|>parent'
  },
  {
    matchURL: '*://app.contentstack.com/#!/stacks',
    title: 'New stack...',
    hotkey: 'cmd+shift+n',
    icon: 'new',
    clickAt: 'button|>text=New Stack'
  },
  {
    matchURL: '*://app.contentstack.com/#!/stack/*',
    title: 'Show entries...',
    hotkey: 'shift+e',
    icon: 'entry',
    clickAt: 'svg.Entries__icon[name=Entries]|>parent'
  },
  {
    matchURL: '*://app.contentstack.com/#!/stack/*',
    title: 'Show assets...',
    hotkey: 'shift+a',
    icon: 'entry',
    clickAt: 'svg.Asset__icon[name=Assets]|>parent'
  },
  {
    matchURL: '*://app.contentstack.com/#!/stack/*',
    title: 'Show content models...',
    hotkey: 'shift+c',
    icon: 'entry',
    clickAt:
      'svg.ConModel__icon[name=ContentModels]|>parent'
  },
  {
    matchURL: '*://app.contentstack.com/#!/stack/*',
    title: 'Show publish queue...',
    hotkey: 'shift+q',
    icon: 'entry',
    clickAt:
      'svg.PublishQueue__icon[name=PublishQueue]|>parent'
  },
  {
    matchURL: '*://app.contentstack.com/#!/stack/*',
    title: 'Show settings...',
    hotkey: 'shift+s',
    icon: 'entry',
    clickAt: 'svg.Settings__icon[name=Setting]|>parent'
  },
  {
    matchURL: '*://app.contentstack.com/#!/stack/*/entries',
    title: 'New entry...',
    hotkey: 'cmd+shift+n',
    icon: 'new',
    clickAt: 'button|>text=New Entry'
  }
];
