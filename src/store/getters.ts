
import { IColumn } from './modules/table'
import store from './index'

// vue3 组合api 没法使用mapGetters   弄了个这玩应凑合用

export const allColumn = computed<IColumn[]>(() => {
  return store.getters.allColumn
})

export const showColumn = computed<string[]>(() => {
  return store.getters.showColumn
})

