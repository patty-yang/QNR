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

export interface TextProps extends BaseProps {
  status: string
}

export interface OptionsProps extends BaseProps {
  status: StringStatusArr | ValueStatusArr | PicTitleDescStatusArr
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
