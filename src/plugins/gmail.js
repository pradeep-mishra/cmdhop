export default [
  {
    title: 'Copy',
    hotkey: 'ctrl+c',
    icon: 'copy',
    search: false
  },
  {
    title: 'Paste',
    hotkey: 'ctrl+v',
    icon: 'paste',
    search: false
  },
  {
    title: 'Compose an Email',
    hotkey: 'cmd+e',
    icon: 'compose',
    clickAt: 'div|>html=Compose'
  },
  {
    title: 'Refresh Page',
    hotkey: 'ctrl+r',
    icon: 'refresh',
    clickAt: 'div[data-tooltip=Refresh]'
  },
  {
    title: 'Open Drafts',
    hotkey: 'cmd+d',
    icon: 'draft',
    clickAt: 'a|>html=Drafts'
  },
  {
    title: 'Open Sent',
    hotkey: 'ctrl+m',
    icon: 'sent',
    clickAt: 'a|>html=Sent'
  },
  {
    title: 'Open Inbox',
    hotkey: 'ctrl+i',
    icon: 'inbox',
    clickAt: 'a|>html=Inbox'
  },
  {
    title: 'Search for mails...',
    hotkey: 'ctrl+f',
    icon: 'markread',
    clickAt: 'input[name=q]'
  }
];
