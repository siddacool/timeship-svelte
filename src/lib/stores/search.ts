import { writable } from 'svelte/store';

function createSearch() {
  const { update, subscribe } = writable('istan');

  return {
    subscribe,
    setSearch: (term = '') => update(() => term),
    clearSearch: () => update(() => ''),
  };
}

export const search = createSearch();
