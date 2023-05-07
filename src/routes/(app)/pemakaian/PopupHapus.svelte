<script>
  import PopUpx from "$lib/elements/PopUpx.svelte";
  import Formx from "$lib/forms/Formx.svelte";
  import { list, modal, form, toast } from "$lib/stores";

  export let title;

  $: console.log("$form", $form);

  $: if ($form?.[title]?.cancel) {
    toast.set("cancel", "Batal hapus !");
    modal.close(title);
  }

  $: if ($form?.[title]?.success) {
    list.delete("pemakaian", $form?.[title]?.data.id);
    toast.set("success", "Berhasil hapus !");
    modal.close(title);
  }
</script>

{#if $modal?.[title]}
  <PopUpx {title}>
    <h2>Apakah anda yakin hapus ?</h2>
    <Formx action="/pemakaian?/delete" {title}>
      <input type="hidden" name="id" value={$modal?.id} />
      <div class="action">
        <button type="submit" class="submit yes">Ya</button>
        <button class="submit no" name="cancel" value="true">Tidak</button>
      </div>
    </Formx>
  </PopUpx>
{/if}

<style>
  .action {
    display: flex;
    gap: 1rem;
  }
</style>
