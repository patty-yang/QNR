type NavItem = {
  icon: string
  text: string
  to: string
}

export const navList: NavItem[] = [
  {
    icon: 'CircleCheck',
    text: '选择',
    to: 'select-group'
  },
  {
    icon: 'CircleCheck',
    text: '文本输入',
    to: 'input-group'
  },
  {
    icon: 'CircleCheck',
    text: '高级题形',
    to: 'advanced-group'
  },
  {
    icon: 'CircleCheck',
    text: '备注说明',
    to: 'note-group'
  },
  {
    icon: 'CircleCheck',
    text: '个人信息',
    to: 'personal-info-group'
  },
  {
    icon: 'CircleCheck',
    text: '联系方式',
    to: 'contact-group'
  }
]
