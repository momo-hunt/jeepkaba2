export const actions = {
  add: async ({ request }) => {
    let data = Object.fromEntries(await request.formData());
    await new Promise((res) => setTimeout(() => res(), 3000));

    data["id"] = 1;
    return data;
  },

  update: async () => {},

  delete: async () => {},
};
