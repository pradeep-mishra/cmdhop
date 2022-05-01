export default [
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
    hotkey: 'option+d',
    icon: 'draft',
    clickAt: 'a|>html=Drafts'
  },
  {
    title: 'Open sent...',
    hotkey: 'option+s',
    icon: 'sent',
    clickAt: 'a|>html=Sent'
  },
  {
    title: 'Open inbox...',
    hotkey: 'option+i',
    icon: 'inbox',
    clickAt: 'a|>html=Inbox'
  },
  {
    title: 'Search for mails...',
    hotkey: 'option+f',
    icon: 'markread',
    clickAt: 'input[name=q]'
  }
];
