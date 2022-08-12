<script lang="ts">
  import { cities } from '$lib/stores/cities';
  import { clocks } from '$lib/stores/clocks';
  import { general } from '$lib/stores/general';
  import ButtonTextToggle from './ui/ButtonTextToggle.svelte';

  const onSearchClick = () => {
    if (!$cities?.cities.length) {
      cities.fetchData();
    }

    general.setSearchModal(true);
  };

  const onSettingsClick = () => {
    general.setSettingsModal(true);
  };
</script>

<div class="contol" class:noClocks={!$clocks.length ? true : false}>
  <ButtonTextToggle
    name="add city"
    elevation
    color="white"
    on:click={onSearchClick}
    responsive
    showText={!$clocks.length ? true : false}
    class="add-city"
  >
    <span class="material-symbols-rounded add-city-icon" slot="icon"> manage_search </span>

    Add City
  </ButtonTextToggle>

  <ButtonTextToggle
    elevation
    name="Settings"
    color="white"
    responsive
    showText={!$clocks.length ? true : false}
    on:click={onSettingsClick}
    class="settings"
  >
    <span class="material-symbols-rounded settings-icon" slot="icon"> settings </span>

    Settings
  </ButtonTextToggle>
</div>

<style lang="scss">
  .contol {
    position: fixed;
    bottom: 14px;
    right: 16px;
    transition: transform 200ms;

    &.noClocks {
      @media (max-width: 1023px) {
        display: flex;
        position: static;
        transform: translate(0, 0);
        align-items: center;
        justify-content: center;
        margin-top: 30px;
      }

      :global(.button-text-toogle) {
        @media (max-width: 1023px) {
          margin-right: 16px;
        }
      }
    }

    @media (min-width: 1024px) {
      top: 16px;
      bottom: initial;
      right: 16px;
    }

    @media (min-width: 1400px) {
      display: flex;
      right: 40px;
    }

    :global(.button-text-toogle) {
      width: 55px;
      height: 55px;
      margin-bottom: 16px;

      @media (min-width: 1400px) {
        margin-right: 16px;
        margin-bottom: 0;
      }
    }

    :global(.button-text-toogle-showText) {
      width: initial;
    }

    :global(.add-city) {
      background-color: var(--color-bg-button-main);

      &:hover {
        background-color: var(--color-bg-button-main-hover);
      }

      &:active {
        background-color: var(--color-bg-button-main-active);
      }
    }

    :global(.add-city-icon) {
      font-size: 33px;
    }

    :global(.settings-icon) {
      font-size: 26px;
    }

    :global(.settings) {
      background-color: var(--color-bg-button-secondary);

      &:hover {
        background-color: var(--color-bg-button-secondary-hover);
      }

      &:active {
        background-color: var(--color-bg-button-secondary-active);
      }
    }
  }
</style>
