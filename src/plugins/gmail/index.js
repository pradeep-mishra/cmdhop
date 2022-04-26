export default {
  url: 'https://mail.google.com',
  actions: [
    {
      id: 1,
      title: 'Copy',
      hotkey: 'ctrl+c',
      icon: 'copy',
      search: false
    },
    {
      id: 2,
      title: 'Paste',
      hotkey: 'ctrl+v',
      icon: 'paste',
      search: false
    },
    {
      id: 3,
      title: 'Compose an Email',
      hotkey: 'cmd+e',
      icon: 'compose',
      clickat: 'div|>html=Compose'
    },
    {
      id: 4,
      title: 'Refresh Page',
      hotkey: 'ctrl+r'
    },
    {
      id: 5,
      title: 'Open Drafts',
      hotkey: 'cmd+d',
      icon: 'draft',
      clickat: '#mybutton'
    },
    {
      id: 6,
      title: 'Open Sent',
      hotkey: 'ctrl+m',
      icon: 'sent'
    },
    {
      id: 7,
      title: 'Open Inbox',
      hotkey: 'ctrl+i',
      icon: 'inbox'
    },
    {
      id: 8,
      title: 'Archive this mail',
      hotkey: 'ctrl+q',
      icon: 'archive'
    },
    {
      id: 9,
      title: 'Mark all read',
      hotkey: 'ctrl+o',
      icon: 'markread'
    },
    {
      id: 10,
      title: 'Select all mails',
      hotkey: 'ctrl+a',
      icon: 'selectall'
    }
  ]
}
