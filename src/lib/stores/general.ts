import { writable } from 'svelte/store';

interface GeneralWritable {
  searchModalOpen: boolean;
  settingsModalOpen: boolean;
  reorder: boolean;
}

const generalWritableDefaultValue: GeneralWritable = {
  searchModalOpen: false,
  settingsModalOpen: false,
  reorder: false,
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
    enableReorder: () =>
      update((d) => {
        d.reorder = true;

        return d;
      }),
    disableReorder: () =>
      update((d) => {
        d.reorder = false;

        return d;
      }),
    setSettingsModal: (open = false) =>
      update((d) => {
        d.settingsModalOpen = open;

        return d;
      }),
  };
}

export const general = createGeneral();
