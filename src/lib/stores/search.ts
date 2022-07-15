import { writable } from 'svelte/store';

function createSearch() {
  const { update, subscribe } = writable('');

  return {
    subscribe,
    setSearch: (term = '') => update(() => term),
    clearSearch: () => update(() => ''),
  };
}

export const search = createSearch();
