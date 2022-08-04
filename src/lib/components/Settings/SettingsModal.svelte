<script lang="ts">
  import { general } from '$lib/stores/general';
  import Card from '../ui/Card.svelte';
  import Modal from '../ui/Modal.svelte';
  import SettingsSection from './SettingsSection.svelte';

  const onClose = () => {
    general.setSettingsModal(false);
  };
</script>

<div class="settings-modal">
  <Modal show={$general.settingsModalOpen} on:close={onClose}>
    <div class="settings-modal-body">
      <Card elevation>
        <SettingsSection />
      </Card>
    </div>
  </Modal>
</div>

<style lang="scss">
  .settings-modal {
    @media (min-width: 1024px) {
      display: none;
    }
  }
</style>
