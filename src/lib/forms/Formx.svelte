<script>
  import { createEventDispatcher } from "svelte";
  import { enhance } from "$app/forms";

  const dispatch = createEventDispatcher();
  export let title;
  export let action;
</script>

<form
  {title}
  {action}
  method="post"
  use:enhance={() => {
    return async ({ result }) => {
      console.log("result form -> ", result);
      // if(result.status != 200)
      dispatch("success", result.data);
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
