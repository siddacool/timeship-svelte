import { writable } from 'svelte/store';
import type { Clock } from '$lib/types';
import { generateClockId, getStoredValue, setStoredValue } from '$lib/utils';

const clockLocalStorage = getStoredValue('clocks', []);

const clocksWritableDefaultValue: Clock[] = clockLocalStorage;

function createClocks() {
  const { update, subscribe } = writable(clocksWritableDefaultValue);

  return {
    subscribe,
    add: (clock: Clock) => {
      clock.id = generateClockId(clock);

      return update((d) => {
        d.push(clock);

        setStoredValue('clocks', d);

        return d;
      });
    },
    remove: (id: string) => {
      return update((d) => {
        const clocks = d.filter((clock) => clock.id !== id);

        setStoredValue('clocks', d);

        return clocks;
      });
    },
  };
}

export const clocks = createClocks();
