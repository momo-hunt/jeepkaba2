<script>
  import { toast } from "$lib/stores";
  import { fly } from "svelte/transition";

  $: if ($toast.length > 0) {
    setTimeout(() => {
      toast.delete();
    }, 3000);
  }
</script>

{#if $toast.length > 0}
  <section>
    {#each $toast as { text, type }}
      <article class={type} in:fly={{ x: 100 }} out:fly={{ x: -100 }}>
        {text}
      </article>
    {/each}
  </section>
{/if}

<style>
  /* * {
    border: var(--border);
  } */

  section {
    /*  */
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
    padding: 1rem;
    gap: 0.5rem;
  }

  section article {
    width: fit-content;
    background: var(--bg-dark);
    padding: 0.5rem 1rem;
    border-radius: 0.2rem;
  }

  section article.error {
    background: red;
  }

  section article.success {
    background: green;
  }

  section article.cancel {
    background: rgb(255, 145, 0);
  }
</style>
