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
        // console.log(n[name]);
        n[name].data = [objData, ...n[name].data];
        return n;
      }),

    delete: (name, id) =>
      update((n) => {
        n[name].data = n[name].data.filter((d) => d.id != id);
        return n;
      }),

    update: (name, id, objData) =>
      update((n) => {
        console.log("1", n[name].data[0]);
        n[name].data = n[name].data.map((d) => {
          if (d.id == id) {
            d = { ...d, ...objData };
          }
          return d;
        });
        console.log("1", n[name].data[0]);
        return n;
      }),
  };
};
export const list = listStore();

const modalStore = () => {
  const { subscribe, set, update } = writable({});
  return {
    subscribe,
    open: (name, id) =>
      update((n) => {
        n[name] = true;
        n.id = id;
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

const formStore = () => {
  const { subscribe, set, update } = writable({});
  return {
    subscribe,
    onSubmit: (name) =>
      update((n) => {
        n[name] = { submit: true };
        return n;
      }),

    onSuccess: (name, data) =>
      update((n) => {
        setTimeout(() => set({}), 3000);
        n[name] = { submit: false, success: true, data };
        return n;
      }),

    onError: (name, data) =>
      update((n) => {
        setTimeout(() => set({}), 3000);
        n[name] = { submit: false, error: true, data };
        return n;
      }),

    onCancel: (name, data) =>
      update((n) => {
        setTimeout(() => set({}), 3000);
        n[name] = { submit: false, cancel: true, data };
        return n;
      }),
  };
};
export const form = formStore();

const toastStore = () => {
  const { subscribe, set, update } = writable([]);
  return {
    subscribe,
    set: (type, text) =>
      update((n) => {
        let id = n.length + 1;
        n = [{ type, text, id }, ...n];
        return n;
      }),

    delete: () =>
      update((n) => {
        n.pop();
        return n;
      }),
  };
};
export const toast = toastStore();
