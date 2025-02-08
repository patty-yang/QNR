import { isStringArray } from '@/types'
import type { TextProps, OptionsProps } from '@/types'

export const setTextStatus = (textProps: TextProps, text: string) => {
  textProps.status = text
}

export const addOption = (optionProps: OptionsProps) => {
  if (isStringArray(optionProps.status)) {
    optionProps.status.push('新增选项')
  }
}

export const removeOption = (optionProps: OptionsProps, index: number) => {
  if (optionProps.status.length === 2) {
    return false
  }
  optionProps.status.splice(index, 1)
  return true
}
