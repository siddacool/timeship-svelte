<script lang="ts">
  import { general } from '$lib/stores/general';
  import Card from '../ui/Card.svelte';
  import Dropdown from '../ui/Dropdown.svelte';
  import SettingsSection from './SettingsSection.svelte';

  const onClose = () => {
    general.setSettingsModal(false);
  };
</script>

<div class="settings-dropdown">
  <Dropdown on:close={onClose} show={$general.settingsModalOpen}>
    <Card elevation>
      <SettingsSection />
    </Card>
  </Dropdown>
</div>

<style lang="scss">
  .settings-dropdown {
    display: none;
    @media (min-width: 1024px) {
      display: block;
    }

    :global(.card) {
      top: 156px;
      right: 16px;

      @media (min-width: 1400px) {
        top: 82px;
        right: 47px;
      }
    }
  }
</style>
