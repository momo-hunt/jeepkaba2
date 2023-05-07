<script>
  import FormPemakaian from "./FormPemakaian.svelte";
  import { list, form } from "$lib/stores";

  $: if ($form?.[title]?.success) {
    list.add("pemakaian", $form[title]?.data);
  }
</script>

<h2>Tambah Pemakaian</h2>

<FormPemakaian title="tambah-pemakaian" action="/pemakaian?/add" value />

<style>
  h2 {
    margin: 1rem;
  }
</style>
