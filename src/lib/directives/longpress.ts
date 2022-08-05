/* eslint-disable @typescript-eslint/no-explicit-any */
export function longpress(node: {
  dispatchEvent: (arg0: CustomEvent<unknown>) => void;
  addEventListener: (arg0: string, arg1: { (e: any): void; (e: any): void }) => void;
  removeEventListener: (arg0: string, arg1: { (e: any): void; (e: any): void }) => void;
}) {
  const TIME_MS = 500;
  let timeoutPtr: number | undefined;
  function handleMouseDown(e: CustomEvent<unknown>) {
    window.addEventListener('mousemove', handleMoveBeforeLong);
    timeoutPtr = window.setTimeout(() => {
      console.log('looooong press!');
      window.removeEventListener('mousemove', handleMoveBeforeLong);
      node.dispatchEvent(new CustomEvent('long'));
      // TODO - ideally make this not trigger long press again
      window.setTimeout(() => node.dispatchEvent(e), 0);
    }, TIME_MS);
  }
  function handleMoveBeforeLong() {
    window.clearTimeout(timeoutPtr);
    window.removeEventListener('mousemove', handleMoveBeforeLong);
  }
  function handleMouseUp() {
    window.clearTimeout(timeoutPtr);
    window.removeEventListener('mousemove', handleMoveBeforeLong);
  }
  node.addEventListener('mousedown', handleMouseDown);
  node.addEventListener('mouseup', handleMouseUp);
  return {
    destroy: () => {
      node.removeEventListener('mousedown', handleMouseDown);
      node.removeEventListener('mouseup', handleMouseUp);
    },
  };
}
