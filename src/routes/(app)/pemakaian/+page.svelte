<script>
  import { onMount } from "svelte";
  import { list, modal, form } from "$lib/stores";
  import ListPemakaian from "./ListPemakaian.svelte";
  import ModalTambah from "./ModalTambah.svelte";
  import HorisontalLoader from "$lib/loader/HorisontalLoader.svelte";

  let modalTambah = "tambah-pemakaian";
  $: if ($form[modalTambah]?.success) {
    modal.close(modalTambah);
  }

  onMount(() => {
    list.loadData("pemakaian", $list);
  });

  // $: console.log($list);
</script>

<h2>Pemakaian</h2>

<button on:click={() => modal.open(modalTambah)}>Baru</button>

{#if $list.pemakaian.loading}
  <HorisontalLoader text="memuat data" />
{:else}
  <ListPemakaian />
{/if}

<ModalTambah title={modalTambah} />
