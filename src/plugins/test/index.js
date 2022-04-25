export default {
  actions: [
    {
      id: 1,
      name: 'copy',
      title: 'Copy',
      hotkey: 'ctrl+c',
      icon: 'copy',
      search: false
    },
    {
      id: 2,
      name: 'paste',
      title: 'Paste',
      hotkey: 'ctrl+v',
      icon: 'paste',
      search: false
    },
    {
      id: 3,
      name: 'compose',
      title: 'Compose an Email',
      hotkey: 'cmd+e',
      icon: 'compose',
      clickat: '.my-button'
    },
    { id: 4, name: 'refresh', title: 'Refresh Page', hotkey: 'ctrl+r' },
    {
      id: 5,
      name: 'draft',
      title: 'Open Drafts',
      hotkey: 'cmd+d',
      icon: 'draft',
      clickat: '#mybutton'
    },
    { id: 6, name: 'sent', title: 'Open Sent', hotkey: 'ctrl+m', icon: 'sent' },
    {
      id: 7,
      name: 'inbox',
      title: 'Open Inbox',
      hotkey: 'ctrl+i',
      icon: 'inbox'
    },
    {
      id: 8,
      name: 'archive',
      title: 'Archive this mail',
      hotkey: 'ctrl+q',
      icon: 'archive'
    },
    {
      id: 9,
      name: 'markread',
      title: 'Mark all read',
      hotkey: 'ctrl+o',
      icon: 'markread'
    },
    {
      id: 10,
      name: 'selectall',
      title: 'Select all mails',
      hotkey: 'ctrl+a',
      icon: 'selectall'
    }
  ]
}
