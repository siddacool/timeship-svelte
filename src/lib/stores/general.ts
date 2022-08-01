import { writable } from 'svelte/store';

interface GeneralWritable {
  searchModalOpen: boolean;
  settingsModalOpen: boolean;
  reorderPopBelowOpen: boolean;
  dragDisabled: boolean;
}

const generalWritableDefaultValue: GeneralWritable = {
  searchModalOpen: false,
  settingsModalOpen: false,
  reorderPopBelowOpen: false,
  dragDisabled: true,
};

function createGeneral() {
  const { update, subscribe } = writable(generalWritableDefaultValue);

  return {
    subscribe,
    setSearchModal: (open = false) =>
      update((d) => {
        d.searchModalOpen = open;

        return d;
      }),
    enableDrag: () =>
      update((d) => {
        d.dragDisabled = false;

        d.reorderPopBelowOpen = true;

        return d;
      }),
    disableDrag: () =>
      update((d) => {
        d.dragDisabled = true;

        d.reorderPopBelowOpen = false;

        return d;
      }),
    setSettingsModal: (open = false) =>
      update((d) => {
        d.settingsModalOpen = open;

        return d;
      }),
    setReorderPopBelow: (open = false) =>
      update((d) => {
        d.reorderPopBelowOpen = open;

        return d;
      }),
  };
}

export const general = createGeneral();
