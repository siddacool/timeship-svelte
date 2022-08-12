<script lang="ts">
  import { general } from '$lib/stores/general';

  import IconButton from '../ui/IconButton.svelte';
  import OptionCountryName from './OptionCountryName.svelte';
  import OptionTheme from './OptionTheme.svelte';
  import OptionTimeFormat from './OptionTimeFormat.svelte';

  const onClose = () => {
    general.setSettingsModal(false);
  };
</script>

<div class="settings-section">
  <header>
    <h2>Settings</h2>

    <span class="icon icon--close">
      <IconButton on:click={onClose} name="Close settings">
        <span class="material-symbols-rounded"> close </span>
      </IconButton>
    </span>
  </header>

  <ul>
    <OptionTheme />
    <OptionTimeFormat />
    <OptionCountryName />
  </ul>
</div>

<style lang="scss">
  .settings-section {
    position: relative;
  }

  header {
    padding: 12px;
    display: flex;
    justify-content: space-between;

    .icon {
      position: absolute;
      top: 5px;
      right: 5px;
    }
  }

  h2 {
    color: inherit;
    font-size: var(--font-size-medium);
    font-weight: var(--font-weight-semi-bold);
    margin-bottom: 0;
    margin-top: 8px;
  }

  ul {
    max-height: 500px;
    overflow-y: auto;
    margin: 0;
    padding: 0;
    padding-bottom: 10px;
  }
</style>
