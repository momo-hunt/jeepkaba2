<script>
  import { onMount } from "svelte";
  import { list, modal, form } from "$lib/stores";
  import ListPemakaian from "./ListPemakaian.svelte";
  import ModalTambah from "./ModalTambah.svelte";
  import HorisontalLoader from "$lib/loader/HorisontalLoader.svelte";
  import ModalUbah from "./ModalUbah.svelte";
  import PopupHapus from "./PopupHapus.svelte";

  let modalTambah = "tambah-pemakaian";
  let modalUbah = "ubah-pemakaian";
  let popupHapus = "hapus-pemakaian";

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
  <ListPemakaian {modalUbah} {popupHapus} />
{/if}

<ModalTambah title={modalTambah} />
<ModalUbah title={modalUbah} />
<PopupHapus title={popupHapus} />
