import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'main',
  state: () => {
    return {
      loading: false
    }
  },
  getters: {},
  actions: {
    useSetLoading(loading: boolean) {
      this.loading = loading
    }
  }
})
