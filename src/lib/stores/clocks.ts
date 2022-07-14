import { writable } from 'svelte/store';
import type { Clock } from '$lib/types';
import { generateClockId } from '$lib/utils';

const clocksWritableDefaultValue: Clock[] = [];

function createClocks() {
  const { update, subscribe } = writable(clocksWritableDefaultValue);

  return {
    subscribe,
    add: (clock: Clock) => {
      clock.id = generateClockId(clock);

      return update((d) => {
        d.push(clock);

        return d;
      });
    },
    remove: (id: string) => {
      return update((d) => {
        const clocks = d.filter((clock) => clock.id !== id);

        return clocks;
      });
    },
  };
}

export const clocks = createClocks();
