<script>
  import { list } from "$lib/stores";
</script>

<ul>
  {#each $list.pemakaian.data as p}
    <li>
      <h3>{p.coba}</h3>
      <div class="action">
        <button>Lihat</button>
        <button>Ubah</button>
        <button>Hapus</button>
      </div>
    </li>
  {/each}
</ul>

<style>
  ul {
    margin: 0.5rem 0;
    background: var(--bg-black-1);
  }

  ul li {
    border-bottom: 1px solid black;
    padding: 0.5rem 1rem;
  }
</style>
