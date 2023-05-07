<script>
  import { fade } from "svelte/transition";
  export let text = "";
</script>

<section>
  <div class="text">{text}</div>
  <div id="circleG" transition:fade>
    <div id="circleG_1" class="circleG" />
    <div id="circleG_2" class="circleG" />
    <div id="circleG_3" class="circleG" />
  </div>
</section>

<style>
  /* * {
    border: var(--border);
  } */

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  section > div.text {
    /* width: 8rem; */
    text-align: center;
    padding: 0.2rem;
  }

  #circleG {
    /* width: 8rem; */
    margin: auto;
  }

  .circleG {
    background-color: rgb(224, 251, 252);
    float: left;
    height: 1rem;
    margin-left: 1rem;
    width: 1rem;
    animation-name: bounce_circleG;
    -o-animation-name: bounce_circleG;
    -ms-animation-name: bounce_circleG;
    -webkit-animation-name: bounce_circleG;
    -moz-animation-name: bounce_circleG;
    animation-duration: 2.24s;
    -o-animation-duration: 2.24s;
    -ms-animation-duration: 2.24s;
    -webkit-animation-duration: 2.24s;
    -moz-animation-duration: 2.24s;
    animation-iteration-count: infinite;
    -o-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    animation-direction: normal;
    -o-animation-direction: normal;
    -ms-animation-direction: normal;
    -webkit-animation-direction: normal;
    -moz-animation-direction: normal;
    border-radius: 20px;
    -o-border-radius: 20px;
    -ms-border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
  }

  .circleG:first-child {
    margin: 0;
  }

  #circleG_1 {
    animation-delay: 0.45s;
    -o-animation-delay: 0.45s;
    -ms-animation-delay: 0.45s;
    -webkit-animation-delay: 0.45s;
    -moz-animation-delay: 0.45s;
  }

  #circleG_2 {
    animation-delay: 1.05s;
    -o-animation-delay: 1.05s;
    -ms-animation-delay: 1.05s;
    -webkit-animation-delay: 1.05s;
    -moz-animation-delay: 1.05s;
  }

  #circleG_3 {
    animation-delay: 1.35s;
    -o-animation-delay: 1.35s;
    -ms-animation-delay: 1.35s;
    -webkit-animation-delay: 1.35s;
    -moz-animation-delay: 1.35s;
  }

  @keyframes bounce_circleG {
    0% {
    }

    50% {
      background-color: rgb(61, 90, 128);
    }

    100% {
    }
  }

  @-o-keyframes bounce_circleG {
    0% {
    }

    50% {
      background-color: rgb(61, 90, 128);
    }

    100% {
    }
  }

  @-ms-keyframes bounce_circleG {
    0% {
    }

    50% {
      background-color: rgb(61, 90, 128);
    }

    100% {
    }
  }

  @-webkit-keyframes bounce_circleG {
    0% {
    }

    50% {
      background-color: rgb(61, 90, 128);
    }

    100% {
    }
  }

  @-moz-keyframes bounce_circleG {
    0% {
    }

    50% {
      background-color: rgb(61, 90, 128);
    }

    100% {
    }
  }
</style>
