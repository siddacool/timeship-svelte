<script lang="ts">
  import { general } from '$lib/stores/general';
  import { onMount } from 'svelte';
  import Card from '../ui/Card.svelte';
  import Modal from '../ui/Modal.svelte';
  import SearchSection from './SearchSection.svelte';

  const onClose = () => {
    general.setSearchModal(false);
  };

  let focus = false;

  onMount(() => {
    const { matches } = window.matchMedia('(max-width: 1023px)');

    if (matches) {
      focus = true;
    }
  });
</script>

<div class="search-modal">
  <Modal show={$general.searchModalOpen} on:close={onClose}>
    <div class="search-modal-body">
      <Card elevation>
        <SearchSection {focus} />
      </Card>
    </div>
  </Modal>
</div>

<style lang="scss">
  .search-modal {
    @media (min-width: 1024px) {
      display: none;
    }
  }

  .search-modal-body {
    height: calc(100vh - 36px);

    :global(.card) {
      height: 100%;
    }
  }
</style>
