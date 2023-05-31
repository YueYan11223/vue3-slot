
import { Module } from 'vuex' 

// #region ts接口

export interface IColumn {
  value: string
  label: string
}

interface IState {
  allColumn: IColumn[]
  showColumn: string[]
}

// #endregion ts接口

const table: Module<IState, any> = {
  state() {
    return {
      allColumn: [], // 表格全部的列 格式 IColumn
      showColumn: [] // 当前展示的列 
    }
  },
  getters: {
    allColumn(state) {
      return state.allColumn
    },
    showColumn(state) {
      return state.showColumn
    }
  },
  mutations: {
    SET_ALL_COLUMN(state, data) {
      state.allColumn = data
    },
    SET_SHOW_COLUMN(state, data) {
      state.showColumn = data
    }
  },
  // 使用时 用actions进行数据更改, 尽量不要使用mutations, 没原因, 建议而已
  actions: {
    setAllColumn({ commit }, data: IColumn[]) {
      commit('SET_ALL_COLUMN', data)
      // 设置全部列时 默认展示所有的列
      const showColumn = data.map(item => item.value)
      commit('SET_SHOW_COLUMN', showColumn)
    },
    setShowColumn({ commit }, data: string[]) {
      commit('SET_SHOW_COLUMN', data)
    }
  }
}

export default table