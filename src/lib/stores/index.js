import { writable } from "svelte/store";

const listStore = () => {
  const { subscribe, set, update } = writable({
    pemakaian: { loading: false, data: [] },
    user: { loading: false, data: [] },
  });
  return {
    subscribe,
    loadData: async (name, oldData) => {
      set({
        ...oldData,
        [name]: { ...oldData[name], loading: true },
      });
      await new Promise((res) => setTimeout(() => res(), 2000));
      let newData = [
        { id: 323, coba: "asd" },
        { id: 353, coba: "lpk" },
      ];
      set({
        ...oldData,
        [name]: { data: newData, loading: false },
      });
    },

    add: (name, objData) =>
      update((n) => {
        n[name].data = [objData, ...n[name].data];
        return n;
      }),

    delete: (name, id) =>
      update((n) => {
        n[name].data.filter((d) => d.id != id);
        return n;
      }),

    update: (name, id, objData) => {
      n[name].data.filter((d) => {
        if (d.id == id) d = [...d, ...objData];
      });
    },
  };
};
export const list = listStore();

const modalStore = () => {
  const { subscribe, set, update } = writable({});
  return {
    subscribe,
    open: (name) =>
      update((n) => {
        n[name] = true;
        return n;
      }),

    close: (name) =>
      update((n) => {
        n[name] = false;
        return n;
      }),
  };
};

export const modal = modalStore();