<script lang="ts">
  import { general } from '$lib/stores/general';

  import Modal from './ui/Modal.svelte';

  const onClose = () => {
    general.setSearchModal(false);
  };
</script>

<Modal show={$general.searchModalOpen} on:close={onClose}>awfwfwafwafwaf</Modal>

<style>
</style>
