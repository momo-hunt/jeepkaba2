<script>
  import { form } from "$lib/stores";
  import { enhance } from "$app/forms";

  export let title;
  export let action;

  // $: console.log($form);
</script>

<form
  {title}
  {action}
  method="post"
  use:enhance={() => {
    form.onSubmit(title);
    return async ({ result }) => {
      console.log("result form -> ", result);
      if (result.status != 200) return form.onError(title);
      form.onSuccess(title, result.data);
    };
  }}
>
  <slot />
</form>

<style>
  form {
    padding: 1rem;
  }
</style>
