<script>
  import FormTambah from "./FormTambah.svelte";
  // import { list, form } from "$lib/stores";
</script>

<h2>Tambah Pemakaian</h2>

<FormTambah title="tambah-pemakaian" action="/pemakaian?/add" />

<style>
  h2 {
    margin: 1rem;
  }
</style>
