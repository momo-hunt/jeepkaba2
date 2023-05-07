<script>
  import Modalx from "$lib/elements/Modalx.svelte";
  import FormTambah from "./tambah/FormTambah.svelte";
  import { modal, list } from "$lib/stores";

  export let title;
</script>

{#if $modal[title]}
  <Modalx name={title}>
    <h2>Tambah Pemakaian</h2>
    <FormTambah {title} action="/pemakaian?/add" />
  </Modalx>
{/if}

<style>
  h2 {
    margin: 1rem;
    text-align: center;
  }
</style>
