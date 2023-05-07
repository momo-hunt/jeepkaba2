<script>
  import { list, modal } from "$lib/stores";
  export let modalUbah;
  export let popupHapus;

  // $: console.log($list);
</script>

<ul>
  {#each $list.pemakaian.data as p}
    <li>
      <article class="left">
        <small>Des</small>
        <p>29</p>
      </article>
      <article class="right">
        <h3>{p.coba}</h3>
        <p>
          {p.coba}
        </p>
      </article>

      <div class="action">
        <button on:click={() => modal.open(modalUbah, p.id)}>Ubah</button>
        <button on:click={() => modal.open(popupHapus, p.id)}>Hapus</button>
      </div>
    </li>
  {/each}
</ul>

<style>
  ul {
    margin: 0.5rem 0;
  }

  ul li {
    background: var(--bg-black-1);
    border-bottom: 1px solid black;
    padding: 0.5rem 1rem;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
  }

  ul li > article.left {
    width: 20%;
    text-align: right;
    border-right: 1px solid var(--bg-dark);
    padding-right: 1rem;
  }

  ul li > article.left p {
    font-size: 1.5rem;
  }

  ul li > article.right {
    width: 80%;
    padding-left: 1rem;
  }

  ul li > article.right p {
    opacity: 0.6;
  }

  ul li > .action {
    margin-top: 1rem;
    width: 100%;
    display: flex;
    gap: 0.5rem;
  }

  ul li > .action > * {
    width: 100%;
    padding: 0.5rem;
  }
</style>
