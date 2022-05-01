import create from 'zustand';
import { persist } from 'zustand/middleware';

const useCmdListStore = create((set) => ({
  service: '',
  url: '',
  allActions: [],
  actions: [],
  show: false,
  setAllActions: (allActions) => {
    set((state) => ({ allActions: allActions }));
  },
  setActions: (actions) => {
    set((state) => ({ actions: actions }));
  },
  setShow: (show) => {
    set((state) => ({ show: show }));
  }
}));

const useHelperListStore = create((set) => ({
  allActions: [],
  actions: [],
  show: false,
  setAllActions: (allActions) => {
    set((state) => ({ allActions: allActions }));
  },
  setActions: (actions) => {
    set((state) => ({ actions: actions }));
  },
  setShow: (show) => {
    set((state) => ({ show: show }));
  }
}));

let useSettingStore = create((set) => ({
  actions: [],
  setActions: (actions) => {
    set((state) => ({ actions: actions }));
  }
}));

useSettingStore = persist(useSettingStore, {
  cmd_hop_setting: {}
});

export { useCmdListStore, useHelperListStore, useSettingStore };
