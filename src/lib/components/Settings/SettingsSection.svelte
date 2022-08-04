<script lang="ts">
  import { general } from '$lib/stores/general';

  import IconButton from '../ui/IconButton.svelte';
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
      <IconButton on:click={onClose}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_20_267"
            style="mask-type:alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect x="0.30188" width="22.8356" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_20_267)">
            <path
              d="M6.3914 19L5.05933 17.6L10.3876 12L5.05933 6.4L6.3914 5L11.7197 10.6L17.048 5L18.3801 6.4L13.0518 12L18.3801 17.6L17.048 19L11.7197 13.4L6.3914 19Z"
              fill="#7D7D7D"
            />
          </g>
        </svg>
      </IconButton>
    </span>
  </header>

  <ul>
    <OptionTheme />
    <OptionTimeFormat />
  </ul>
</div>

<style lang="scss">
  .settings-section {
    padding: 12px;
    position: relative;
  }

  header {
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
    max-height: 400px;
    overflow-y: auto;
    margin: 0;
    padding: 0;
    padding: 20px 0;
  }
</style>
