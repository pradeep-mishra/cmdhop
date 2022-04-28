export default [
  {
    title: 'Copy',
    hotkey: 'ctrl+c',
    icon: 'copy',
    showInSearch: false
  },
  {
    title: 'Paste',
    hotkey: 'ctrl+v',
    icon: 'paste',
    showInSearch: false
  },
  {
    title: 'Compose an email...',
    hotkey: 'cmd+e',
    icon: 'compose',
    clickAt: 'div|>html=Compose'
  },
  {
    title: 'Refresh',
    hotkey: 'ctrl+n',
    icon: 'refresh',
    clickAt: 'div[data-tooltip=Refresh]'
  },
  {
    title: 'Open drafts...',
    hotkey: 'cmd+d',
    icon: 'draft',
    clickAt: 'a|>html=Drafts'
  },
  {
    title: 'Open sent...',
    hotkey: 'ctrl+m',
    icon: 'sent',
    clickAt: 'a|>html=Sent'
  },
  {
    title: 'Open inbox...',
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
