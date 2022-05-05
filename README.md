# CommandHop

command palette for all web applications

![CommandHop, shortcut utility for your website/webapp](/public/ss.png)

```js

Example service configuration file

export default [
  {
    title: 'Show stacks...', // title for command pallete item
    hotkey: 'shift+h', // shortcut key
    clickAt: 'svg[name=Logo]|>parent' // css query selector for element to click when item/command is clicked
  },
  {
    matchURL: '*://app.contentstack.com/#!/stacks', // optional matchURL to enable this command for this specific url only
    title: 'Open stack[n]...',
    hotkey: 'shift+o',
    groupBy: 'div.StackCard', // to enable sublist on click/select of an item
    list: { // formating sublist
      header: 'Choose stack', // title for sublist
      title: '.StackCard__title span' // css query selector to pick title for each item/command in sublist
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
    clickAt: 'button|>text=New Stack' // |> is pipe operator to add extra match criteria to pick element (html for innerHTML, text for innerText)
  },
  {
    matchURL: '*://app.contentstack.com/#!/stack/*',
    title: 'Show entries...',
    hotkey: 'shift+e',
    clickAt: 'svg.Entries__icon[name=Entries]|>parent' // s pipe operator to add extra match criteria to pick element (parent to pick parent of selected element)
  },
  {
    matchURL: '*://app.contentstack.com/#!/stack/*',
    title: 'Show assets...',
    hotkey: 'shift+a',
    clickAt: 'svg.Asset__icon[name=Assets]|>parent'
  },
  {
    matchURL: '*://app.contentstack.com/#!/stack/*',
    title: 'Show content models...',
    hotkey: 'shift+c',
    clickAt: 'svg.ConModel__icon[name=ContentModels]|>parent'
  },
  {
    matchURL: '*://app.contentstack.com/#!/stack/*',
    title: 'Show publish queue...',
    hotkey: 'shift+q',
    clickAt: 'svg.PublishQueue__icon[name=PublishQueue]|>parent'
  },
  {
    matchURL: '*://app.contentstack.com/#!/stack/*',
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

```
