<script lang="ts">
  import { clocks } from '$lib/stores/clocks';
  import { time } from '$lib/stores/time';
  import { general } from '$lib/stores/general';
  import { getTime } from '$lib/utils';
</script>

{#if !$clocks.length && !$general.reorder}
  <div class="placeholder">
    <div class="clock">
      {getTime($time, Intl.DateTimeFormat().resolvedOptions().timeZone, 'HH:mm:ss')}
    </div>

    <div class="brand">
      <h1>Timeship</h1>
    </div>

    A world clock at your fingertips.<br />
    Timeship displays time from cities all around the globe.
  </div>
{/if}

<style lang="scss">
  .placeholder {
    font-size: clamp(1.5rem, 2.5vw, 2.2rem);
    font-weight: var(--font-weight-semi-bold);
    font-family: inherit;
    padding: 12px;
    text-align: center;
    padding-top: 30px;

    .brand {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      flex-direction: column;
      position: relative;
    }

    .clock {
      position: relative;
      top: -9px;
    }

    h1 {
      font-size: clamp(2rem, 20vw, 18rem);
      font-weight: var(--font-weight-normal);
      font-family: inherit;
      z-index: 2;
      opacity: 0.6;
      position: relative;

      @media (min-width: 1024px) {
        margin-bottom: 20px;
      }
    }
  }
</style>
