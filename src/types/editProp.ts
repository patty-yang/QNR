import type { VueComType } from './common'

export interface BaseProps {
  id: string
  isShow: boolean
  name: string
  editCom: VueComType
}

export type StringStatusArr = string[]
export type ValueStatusArr = { value: string; status: string }[]
export type PicTitleDescStatusArr = {
  picTitle: string
  picDesc: string
  value: string
}[]

export type OptionStatusArray =
  | StringStatusArr
  | ValueStatusArr
  | PicTitleDescStatusArr

export interface TextProps extends BaseProps {
  status: string
}

export interface OptionsProps extends BaseProps {
  status: OptionStatusArray
  currentStatus: number
}

// 公共的设置项，每个组件都有的设置项
export interface BaseStatus {
  title: TextProps
  desc: TextProps
  position: OptionsProps
  titleSize: OptionsProps
  descSize: OptionsProps
  titleWeight: OptionsProps
  descWeight: OptionsProps
  titleItalic: OptionsProps
  descItalic: OptionsProps
  titleColor: TextProps
  descColor: TextProps
}

// 并不是所有业务组件都有 options 这个设置项，所以分开定义
export interface OptionsStatus extends BaseStatus {
  options: OptionsProps
}

// 确定 status 是字符串数组
export const isStringArray = (
  status: OptionStatusArray
): status is string[] => {
  return Array.isArray(status) && typeof status[0] === 'string'
}

// // 确定 status 是 { value: string; status: string } 数组
// export const isValueStatusArr = (
//   status: OptionStatusArray
// ): status is { value: string; status: string }[] => {
//   return (
//     Array.isArray(status) &&
//     typeof status[0] === 'object' &&
//     'value' in status[0] &&
//     'status' in status[0]
//   )
// }

// // 确定 status 是 { picTitle: string; picDesc: string; value: string } 数组
// export const isPicTitleDescStatusArr = (
//   status: OptionStatusArray
// ): status is { picTitle: string; picDesc: string; value: string }[] => {
//   return (
//     Array.isArray(status) &&
//     typeof status[0] === 'object' &&
//     'picTitle' in status[0] &&
//     'picDesc' in status[0] &&
//     'value' in status[0]
//   )
// }
