// 单选题的 JSON-Schema 配置
// 单选题(业务组件) ---> 编辑组件有什么可以修改就有什么配置

import { markRaw } from 'vue'
import { v4 as uuid } from 'uuid'
// 业务组件
import SingleSelect from '@/components/SurveyComs/Materials/SelectComs/SingleSelect.vue'
// 编辑组件
import TitleEditor from '@/components/SurveyComs/EditItems/TitleEditor.vue'
import DescEditor from '@/components/SurveyComs/EditItems/DescEditor.vue'
import OptionsEditor from '@/components/SurveyComs/EditItems/OptionsEditor.vue'
import PositionEditor from '@/components/SurveyComs/EditItems/PositionEditor.vue'
import SizeEditor from '@/components/SurveyComs/EditItems/SizeEditor.vue'
import WeightEditor from '@/components/SurveyComs/EditItems/WeightEditor.vue'
import ItalicEditor from '@/components/SurveyComs/EditItems/ItalicEditor.vue'
import ColorEditor from '@/components/SurveyComs/EditItems/ColorEditor.vue'

export default function () {
  return {
    type: markRaw(SingleSelect),
    name: 'single-select',
    id: uuid(),
    // 组件状态: 组件的每一个能够修改的状态都应该对应一个编辑组件
    status: {
      title: {
        id: uuid(),
        status: '单选题默认标题',
        isShow: true,
        name: 'title-editor',
        editCom: markRaw(TitleEditor)
      },
      desc: {
        id: uuid(),
        status: '单选题默认描述',
        isShow: true,
        name: 'desc-editor',
        editCom: markRaw(DescEditor)
      },
      options: {
        id: uuid(),
        status: ['默认选项1', '默认选项2'],
        currentStatus: 0,
        isShow: true,
        name: 'options-editor',
        editCom: markRaw(OptionsEditor)
      },
      position: {
        id: uuid(),
        currentStatus: 0,
        status: ['左对齐', '居中对齐'],
        isShow: true,
        name: 'position-editor',
        editCom: markRaw(PositionEditor)
      },
      titleSize: {
        id: uuid(),
        currentStatus: 0,
        status: ['18', '20', '22'],
        isShow: true,
        name: 'size-editor',
        editCom: markRaw(SizeEditor)
      },
      descSize: {
        id: uuid(),
        currentStatus: 0,
        status: ['16', '14', '12'],
        isShow: true,
        name: 'size-editor',
        editCom: markRaw(SizeEditor)
      },
      titleWeight: {
        id: uuid(),
        currentStatus: 1,
        status: ['加粗', '正常'],
        isShow: true,
        name: 'weight-editor',
        editCom: markRaw(WeightEditor)
      },
      descWeight: {
        id: uuid(),
        currentStatus: 1,
        status: ['加粗', '正常'],
        isShow: true,
        name: 'weight-editor',
        editCom: markRaw(WeightEditor)
      },
      titleItalic: {
        id: uuid(),
        currentStatus: 1,
        status: ['斜体', '正常'],
        isShow: true,
        name: 'italic-editor',
        editCom: markRaw(ItalicEditor)
      },
      descItalic: {
        id: uuid(),
        currentStatus: 1,
        status: ['斜体', '正常'],
        isShow: true,
        name: 'italic-editor',
        editCom: markRaw(ItalicEditor)
      },
      titleColor: {
        id: uuid(),
        status: '#000',
        isShow: true,
        name: 'color-editor',
        editCom: markRaw(ColorEditor)
      },
      descColor: {
        id: uuid(),
        status: '#000',
        isShow: true,
        name: 'color-editor',
        editCom: markRaw(ColorEditor)
      }
    }
  }
}
