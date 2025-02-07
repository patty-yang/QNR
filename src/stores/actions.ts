import type { TextProps } from '@/types'

// 还有编辑区 减少重复定义
export const setTextStatus = (textProps: TextProps, text: string) => {
  textProps.status = text
}
