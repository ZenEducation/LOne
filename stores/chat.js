import { defineStore } from "pinia";

export const useChatStore = defineStore('chat', {
    state: () => ({
        sidebar: true,
        rightSidebar: false
    }),
    getters: {
        getSidebarStatus: (state) => state.sidebar,
        getRightSidebarStatus: (state) => state.rightSidebar
    },
    actions: {
        toggleSidebar(value) {
            this.sidebar = value
        },
        toggleRightSidebar(value) {
            this.rightSidebar = value
        }
    },
})
