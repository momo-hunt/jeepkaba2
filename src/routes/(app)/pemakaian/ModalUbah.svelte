<script>
  import Modalx from "$lib/elements/Modalx.svelte";
  import { modal, list, form, toast } from "$lib/stores";
  import FormPemakaian from "./tambah/FormPemakaian.svelte";

  $: valueUbah = $list?.pemakaian?.data.filter((d) => d.id == $modal.id)[0];

  export let title;

  $: if ($form[title]?.error) {
    toast.set("error", "Gagal ubah !");
    modal.close(title);
  }

  $: if ($form[title]?.success) {
    toast.set("success", "Berhasil ubah !");
    list.update("pemakaian", $form[title].data?.id, $form[title].data);
    modal.close(title);
  }
</script>

{#if $modal[title]}
  <Modalx name={title}>
    <h2>Ubah Pemakaian</h2>
    <FormPemakaian
      {title}
      action={`/pemakaian?/update&id=${$modal.id}`}
      value={valueUbah}
    />
  </Modalx>
{/if}

<style>
  h2 {
    margin: 1rem;
    text-align: center;
  }
</style>
