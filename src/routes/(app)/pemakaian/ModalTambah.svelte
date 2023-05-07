<script>
  import Modalx from "$lib/elements/Modalx.svelte";
  import FormPemakaian from "./tambah/FormPemakaian.svelte";
  import { modal, list, form } from "$lib/stores";

  export let title;

  $: if ($form[title]?.success) {
    list.add("pemakaian", $form[title].data);
    modal.close(title);
  }
</script>

{#if $modal[title]}
  <Modalx name={title}>
    <h2>Tambah Pemakaian</h2>
    <FormPemakaian {title} action="/pemakaian?/add" value />
  </Modalx>
{/if}

<style>
  h2 {
    margin: 1rem;
    text-align: center;
  }
</style>
