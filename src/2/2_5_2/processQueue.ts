import { Que } from "./App";

export function getFinalState(baseState: number, queue: Que[]) {
  let finalState = baseState;

  for (const update of queue) {
    if (typeof update === 'function') {
      finalState = update(finalState);
    } else {
      finalState = update;
    }
  }

  return finalState;
}