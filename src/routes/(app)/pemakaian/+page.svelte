<script>
  import { onMount } from "svelte";
  import { list, modal } from "$lib/stores";
  import ListPemakaian from "./ListPemakaian.svelte";
  import ModalTambah from "./ModalTambah.svelte";

  let modalTambah = "tambah-pemakaian";

  onMount(() => {
    list.loadData("pemakaian", $list);
  });

  // $: console.log($list);
</script>

<h2>Pemakaian</h2>

<button on:click={() => modal.open(modalTambah)}>Baru</button>

{#if $list.pemakaian.loading}
  <p>Memuat...</p>
{:else}
  <ListPemakaian />
{/if}

<ModalTambah name={modalTambah} />
