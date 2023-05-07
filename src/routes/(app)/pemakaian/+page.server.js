import { fail } from "@sveltejs/kit";

export const actions = {
  add: async ({ request }) => {
    let data = Object.fromEntries(await request.formData());
    await new Promise((res) => setTimeout(() => res(), 3000));

    data["id"] = "cs213";
    return data;
  },

  update: async ({ request, url }) => {
    let data = Object.fromEntries(await request.formData());
    await new Promise((res) => setTimeout(() => res(), 3000));

    console.log("id", url.searchParams.get("id"));
    data["id"] = url.searchParams.get("id");

    return data;
    // return fail(400, "Ada kesalahan !");
  },

  delete: async ({ request }) => {
    let data = Object.fromEntries(await request.formData());
    if (data.cancel) return fail(400, { cancel: true });

    await new Promise((res) => setTimeout(() => res(), 3000));

    return data;
  },
};
