<script>
  import { modal } from "$lib/stores";

  export let title;
</script>

<section>
  <button class="backdrop" on:click={() => modal.close(title)} />
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
    align-items: center;
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
    width: 300px;
    transform: translateY(-4rem);
    background: var(--bg-black-1);
    text-align: center;
    padding: 1rem;
  }
</style>
