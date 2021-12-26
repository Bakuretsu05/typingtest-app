import { useCallback, useState } from "react";

const useQueue = (
  initialQueue: string[]
): {
  enqueue: (value: string) => void;
  dequeue: () => void;
  queue: string[];
  setQueue: React.Dispatch<React.SetStateAction<string[]>>;
} => {
  const [queue, setQueue] = useState<string[]>(initialQueue);

  const enqueue = useCallback((value: string): void => {
    setQueue((currQueue) => [...currQueue, value]);
  }, []);

  const dequeue = useCallback((): void => {
    setQueue((currQueue) => {
      const q = [...currQueue];
      q.shift();
      return q;
    });
  }, []);

  return { enqueue, dequeue, queue, setQueue };
};

export default useQueue;
