// 组件市场所有组件状态的仓库
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { defaultStatusMap } from '../configs/defaultStatus/defaultStatusMap'

import { setTextStatus, addOption, removeOption } from './actions'

interface State {
  currentMaterialCom: string
  coms: {
    [key: string]: any
  }
}

export const useMaterial = defineStore('materialStore', {
  state: (): State => ({
    currentMaterialCom: 'single-select',
    // 记录所有的业务组件
    coms: {
      'single-select': defaultStatusMap['single-select'](),
      'multi-select': {}
    }
  }),

  actions: {
    setTextStatus,
    addOption,
    removeOption
  }
})
