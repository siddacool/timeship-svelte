<script lang="ts">
  import { general } from '$lib/stores/general';
  import { onMount } from 'svelte';
  import Card from '../ui/Card.svelte';
  import Dropdown from '../ui/Dropdown.svelte';
  import SearchSection from './SearchSection.svelte';

  const onClose = () => {
    general.setSearchModal(false);
  };

  let focus = false;

  onMount(() => {
    const { matches } = window.matchMedia('(min-width: 1024px)');

    if (matches) {
      focus = true;
    }
  });
</script>

<div class="search-dropdown">
  <Dropdown on:close={onClose} show={$general.searchModalOpen}>
    <Card elevation>
      <SearchSection {focus} />
    </Card>
  </Dropdown>
</div>

<style lang="scss">
  .search-dropdown {
    display: none;
    @media (min-width: 1024px) {
      display: block;
    }

    :global(.card) {
      top: 82px;
      right: 200px;
    }
  }
</style>
