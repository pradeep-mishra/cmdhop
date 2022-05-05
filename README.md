# CommandHop

command palette for all web applications

![CommandHop, shortcut utility for your website/webapp](/public/ss.png)

```js

Example service configuration file

export default [
  {
    title: 'Show collections...', // title for command pallete item
    hotkey: 'shift+h', // shortcut key
    clickAt: 'svg[name=Logo]|>parent' // css query selector for element to click when item/command is clicked
  },
  {
    matchURL: '*://www.somesite.com/collections', // optional matchURL to enable this command for this specific url only
    title: 'Open collection[n]...',
    hotkey: 'shift+o',
    groupBy: 'div.CollectionCard', // to enable sublist on click/select of a command. sublist items will be based on css query selector
    list: { // formating sublist
      header: 'Choose collection', // title for sublist
      title: '.CollectionCard__title span' // css query selector to pick title for each item/command in sublist
    }
  },
  {
    matchURL: '*://www.somesite.com/collections/*/entries',
    title: 'Open entry[n]...',
    hotkey: 'shift+o',
    groupBy: 'div.Table__body__row[role=row]',
    list: {
      title: 'div.curr-entry-title',
      header: 'Choose entry'
    }
  },
  {
    matchURL: '*://app.contentstack.com/collections',
    title: 'New collection...',
    hotkey: 'cmd+shift+n',
    clickAt: 'button|>text=New Collection' // |> is pipe operator to add extra match criteria to pick element (html for innerHTML, text for innerText)
  },
  {
    matchURL: '*://www.somesite.com/collection/*',
    title: 'Show entries...',
    hotkey: 'shift+e',
    clickAt: 'svg.Entries__icon[name=Entries]|>parent' // s pipe operator to add extra match criteria to pick element (parent to pick parent of selected element)
  },
  {
    matchURL: '*://www.somesite.com/collection/*',
    title: 'Show assets...',
    hotkey: 'shift+a',
    clickAt: 'svg.Asset__icon[name=Assets]|>parent'
  },
  {
    matchURL: '*://www.somesite.com/collection/*',
    title: 'Show content models...',
    hotkey: 'shift+c',
    clickAt: 'svg.ConModel__icon[name=ContentModels]|>parent'
  },
  {
    matchURL: '*://www.somesite.com/collection/*',
    title: 'Show publish items...',
    hotkey: 'shift+q',
    clickAt: 'svg.PublishItems__icon[name=PublishQueue]|>parent'
  },
  {
    matchURL: '*://www.somesite.com/collection/*',
    title: 'Show settings...',
    hotkey: 'shift+s',
    clickAt: 'svg.Settings__icon[name=Setting]|>parent'
  },
  {
    matchURL: '*://www.somesite.com/collection/*/entries',
    title: 'New entry...',
    hotkey: 'cmd+shift+n',
    clickAt: 'button|>text=New Entry'
  }
]

```
