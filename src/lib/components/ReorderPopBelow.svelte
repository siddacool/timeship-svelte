<script lang="ts">
  import { clocks } from '$lib/stores/clocks';

  import { general } from '$lib/stores/general';
  import Button from './ui/Button.svelte';

  import PopBelow from './ui/PopBelow.svelte';

  const handleAccept = () => {
    general.disableReorder();
    clocks.acceptOrganize();
  };

  const handleCancel = () => {
    general.disableReorder();
    clocks.cancelOrganize();
  };
</script>

<PopBelow show={$general.reorder}>
  <Button outline color="primary" on:click={() => handleCancel()}>
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
      <path
        d="m6.4 19.2-1.6-1.6 5.6-5.6-5.6-5.6 1.6-1.6 5.6 5.6 5.6-5.6 1.6 1.6-5.6 5.6 5.6 5.6-1.6 1.6-5.6-5.6Z"
      />
    </svg>
    Cancel
  </Button>
  <Button outline color="primary" on:click={() => handleAccept()}>
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
      <path d="m9.55 18.2-5.9-5.9 1.625-1.625L9.55 14.95l9.175-9.175L20.35 7.4Z" />
    </svg>
    Accept
  </Button>
</PopBelow>

<style lang="scss">
</style>
