<script>
  import { createEventDispatcher } from "svelte";
  import Formx from "$lib/forms/Formx.svelte";
  import { list } from "$lib/stores";
  const dispatch = createEventDispatcher();
</script>

<Formx
  title="Form_Tambah_Pemakaian"
  action="/pemakaian?/add"
  on:success={(e) => {
    dispatch("success");
    list.add("pemakaian", e.detail);
  }}
>
  <label for="asd">asd</label>
  <input type="text" name="coba" value="coba title" />
  <label for="asd">asd</label>
  <input type="text" name="coba1" value="coba title" />
  <button type="submit" class="submit">Tambah</button>
</Formx>
