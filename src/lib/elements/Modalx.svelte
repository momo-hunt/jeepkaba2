<script>
  // import { createEventDispatcher } from "svelte";
  // const dispatch = createEventDispatcher();

  import { modal } from "$lib/stores";

  export let name;
</script>

<section>
  <button class="backdrop" on:click={() => modal.close(name)} />
  <article>
    <slot />
  </article>
</section>

<style>
  section {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    padding: 6rem 2rem;
    background: rgba(0, 0, 0, 0.5);
  }

  section button.backdrop {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  section article {
    position: relative;
    overflow-y: auto;
    background: var(--bg-black-1);
  }
</style>
