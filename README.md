# CommandHop

command palette for all web applications

#### Demo site

[https://cmdhop.netlify.app](https://cmdhop.netlify.app)

#### Screenshot

![CommandHop, shortcut utility for your website/webapp](/public/ss.png)

#### Example service configuration file

```js
export default {
  actions: [
    {
      title: 'Compose an email...', // title for command pallate item
      hotkey: 'cmd+e', // shortcut key to call item
      clickAt: 'div|>html=Compose' // css query selector with some custom functionality to select and click element when item is slected
    },
    {
      title: 'Refresh',
      hotkey: 'ctrl+n',
      clickAt: 'div[data-tooltip=Refresh]'
    },
    {
      title: 'Open drafts...',
      hotkey: 'option+d',
      clickAt: 'a|>html=Drafts'
    },
    {
      title: 'Open sent...',
      hotkey: 'option+s',
      clickAt: 'a|>html=Sent'
    },
    {
      title: 'Open inbox...',
      hotkey: 'option+i',
      clickAt: 'a|>html=Inbox'
    },
    {
      title: 'Search for mails...',
      hotkey: 'option+f',
      clickAt: 'input[name=q]'
    }
  ]
};
```

#### Properties in service config json

- title : to declatre the title of an item
- hotkey : to set hotkey for an item
- clickAt : to select a DOM element to click when i tem is selected
- log : to console a string when item is selected (can be used as an alternative of clickAt)
- showInSearch : true|false to list item in command palatte (if you want to list any action as hotkey only then this option can be used)
- matchURL : to set the url for an action (if this option is provided then action will load when the url of site match with the matchURL)
- excludeURL : to exclude and specific route for this action
- exactMatch : true|false to exact macth the url (default: false)
- groupBy : specify the css query to collect all elements to show as an sub list
- list : object to set the properties of sub list (should be used with groupBy option)

###### list options

- title : can be either static string or css select for element (for static string use : as a prefix e.g :Item)
- header : static string for header of sublist

#### Example of groupBy and list option to create sub pallate

```json
{
  "matchURL": "*://app.somesite.com/orgs/*",
  "excludeURL": "*://app.somesite.com/orgs/*/users",
  "title": "Open orgs[n]...",
  "hotkey": "shift+o",
  "groupBy": "div.Table__body__row[role=row]",
  "list": {
    "title": "div.curr-entry-title" | ":Item",
    "header": "Choose Organisation"
  }
}
```
