<script lang="ts">
  import '$lib/styles/index.scss';
  import Clocks from '$lib/components/Clocks.svelte';
  import ReorderPopBelow from '$lib/components/ReorderPopBelow.svelte';
  import Controls from '$lib/components/Controls.svelte';
  import SearchModal from '$lib/components/Search/SearchModal.svelte';
  import SearchDropdown from '$lib/components/Search/SearchDropdown.svelte';
  import Placeholder from '$lib/components/Placeholder.svelte';
  import SettingsModal from '$lib/components/Settings/SettingsModal.svelte';
  import SettingsDropdown from '$lib/components/Settings/SettingsDropdown.svelte';
  import ThemeSetter from '$lib/components/ThemeSetter.svelte';
</script>

<main>
  <Clocks />
  <Placeholder />
</main>
<Controls />
<ReorderPopBelow />
<SearchModal />
<SearchDropdown />
<SettingsModal />
<SettingsDropdown />
<ThemeSetter />

<style lang="scss">
  main {
    @media (min-width: 1024px) {
      max-width: 650px;
      margin: 0 auto;
    }
  }
</style>
