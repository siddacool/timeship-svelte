import { writable } from 'svelte/store';
import { getTimeObjectUTC } from '$lib/utils';

function createTime() {
  const { update, subscribe } = writable(getTimeObjectUTC());

  return {
    subscribe,
    setTime: () => {
      return update(() => getTimeObjectUTC());
    },
  };
}

export const time = createTime();
