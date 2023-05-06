<script>
  import Modalx from "$lib/elements/Modalx.svelte";
  import FormTambah from "./tambah/FormTambah.svelte";
  import { modal, list } from "$lib/stores";

  export let name;
</script>

{#if $modal[name]}
  <Modalx {name}>
    <h2>Tambah Pemakaian</h2>
    <FormTambah on:success={() => modal.close(name)} />
  </Modalx>
{/if}

<style>
  h2 {
    margin: 1rem;
    text-align: center;
  }
</style>
