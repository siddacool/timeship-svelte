<script lang="ts">
  import { general } from '$lib/stores/general';
  import Card from '../ui/Card.svelte';
  import Modal from '../ui/Modal.svelte';
  import SearchSection from './SearchSection.svelte';

  const onClose = () => {
    general.setSearchModal(false);
  };
</script>

<Modal show={$general.searchModalOpen} on:close={onClose}>
  <div class="search-modal-body">
    <Card elevation>
      <SearchSection />
    </Card>
  </div>
</Modal>

<style>
  .search-modal-body {
    
  }
</style>
