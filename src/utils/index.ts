import type { OptionsProps, TextProps } from '../types'

export const getTextStatus = (props: TextProps) => {
  return props.status
}

export const getStringStatus = (props: OptionsProps) => {
  return props.status
}

export const getCurrentStatus = (props: OptionsProps) => {
  return props.currentStatus
}

// 根据 currentStatus 获取对应的值
export const getStringStatusByCurrentStatus = (props: OptionsProps) => {
  return props.status[props.currentStatus]
}
