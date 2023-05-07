<script>
  import Formx from "$lib/forms/Formx.svelte";
  import { form, list } from "$lib/stores";
  import HorisontalLoader from "$lib/loader/HorisontalLoader.svelte";
  export let title;
  export let action;

  $: if ($form?.[title]?.success) {
    list.add("pemakaian", $form[title]?.data);
  }
</script>

<Formx {title} {action}>
  <label for="asd">asd</label>
  <input type="text" name="coba" value="coba title" />
  <label for="asd">asd</label>
  <input type="text" name="coba1" value="coba title" />
  <button type="submit" class="submit" disabled={$form[title]?.submit}>
    {#if $form[title]?.submit}
      <HorisontalLoader />
    {:else}
      Tambah
    {/if}
  </button>
</Formx>

<style>
  button[type="submit"]:disabled {
    background: var(--bg-black);
  }
</style>
