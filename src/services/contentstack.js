export default {
  actions: [
    {
      matchURL: '*://app.contentstack.com/#!/stack/*',
      title: 'Show stacks...',
      hotkey: 'shift+h',
      clickAt: 'svg[name=Logo]|>parent'
    },
    {
      matchURL: '*://app.contentstack.com/#!/stacks',
      title: 'Open stack[n]...',
      hotkey: 'shift+o',
      groupBy: 'div.StackCard',
      list: {
        header: 'Choose stack',
        title: '.StackCard__title span'
      }
    },
    {
      matchURL: '*://app.contentstack.com/#!/stack/*/entries',
      title: 'Open entry[n]...',
      hotkey: 'shift+o',
      groupBy: 'div.Table__body__row[role=row]',
      list: {
        title: 'div.curr-entry-title',
        header: 'Choose entry'
      }
    },
    {
      matchURL: '*://app.contentstack.com/#!/stacks',
      title: 'New stack...',
      hotkey: 'cmd+shift+n',
      clickAt: 'button|>text=New Stack'
    },
    {
      matchURL: '*://app.contentstack.com/#!/stack/*',
      excludeURL: '*://app.contentstack.com/#!/stack/*/entries',
      title: 'Show entries...',
      hotkey: 'shift+e',
      clickAt: 'svg.Entries__icon[name=Entries]|>parent'
    },
    {
      matchURL: '*://app.contentstack.com/#!/stack/*',
      excludeURL: '*://app.contentstack.com/#!/stack/*/assets',
      title: 'Show assets...',
      hotkey: 'shift+a',
      clickAt: 'svg.Asset__icon[name=Assets]|>parent'
    },
    {
      matchURL: '*://app.contentstack.com/#!/stack/*',
      excludeURL: '*://app.contentstack.com/#!/stack/*/content-types',
      title: 'Show content models...',
      hotkey: 'shift+c',
      clickAt: 'svg.ConModel__icon[name=ContentModels]|>parent'
    },
    {
      matchURL: '*://app.contentstack.com/#!/stack/*',
      excludeURL: '*://app.contentstack.com/#!/stack/*/publish-queue',
      title: 'Show publish queue...',
      hotkey: 'shift+q',
      clickAt: 'svg.PublishQueue__icon[name=PublishQueue]|>parent'
    },
    {
      matchURL: '*://app.contentstack.com/#!/stack/*',
      excludeURL: '*://app.contentstack.com/#!/stack/*/settings/*',
      title: 'Show settings...',
      hotkey: 'shift+s',
      clickAt: 'svg.Settings__icon[name=Setting]|>parent'
    },
    {
      matchURL: '*://app.contentstack.com/#!/stack/*/entries',
      title: 'New entry...',
      hotkey: 'cmd+shift+n',
      clickAt: 'button|>text=New Entry'
    }
  ]
};
