<script lang="ts">
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import ExtendedInfoItem from './ExtendedInfoItem.svelte';
  import { time } from '$lib/stores/time';
  import type { Timezone } from '$lib/types';
  import { getTime } from '$lib/utils';

  export let timezone: Timezone;
  export let isActive: boolean;
</script>

{#if isActive}
  <div class="extended-info" transition:slide={{ delay: 50, duration: 200, easing: quintOut }}>
    <ExtendedInfoItem title="Military time">{getTime($time, timezone, 'HH:mm')}</ExtendedInfoItem>
    <ExtendedInfoItem title="Date">{getTime($time, timezone, 'ddd, MMM D, YYYY')}</ExtendedInfoItem>
  </div>
{/if}

<style lang="scss">
  .extended-info {
    padding-top: 8px;
    padding-bottom: 8px;
  }
</style>
