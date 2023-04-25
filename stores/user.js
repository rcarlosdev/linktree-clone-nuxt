import { defineStore } from "pinia";
import axios from "~/plugins/axios";

const $axios = axios().provide.axios;

export const useUserStore = defineStore("user", {
  state: () => ({
    id: "",
    theme_id: "",
    name: "",
    email: "",
    Image: "",
    bio: "",
    theme: null,
    colors: null,
    allLinks: null,
    isMobile: false,
    updatedLinkIs: 0,
    addLinkOverlay: false,
    isPreviewOverlay: false,
  }),
  actions: {},
  persist: true,
});
