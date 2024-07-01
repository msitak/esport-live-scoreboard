import { useEffect, useState } from "react";

interface useWebSocketReturnTypes<T> {
  data: T | null;
  error: Event | null;
}

const useWebSocket = <T,>(url: string): useWebSocketReturnTypes<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Event | null>(null);

  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onmessage = (event) => setData(JSON.parse(event.data));
    socket.onerror = (event) => setError(event);

    return () => {
      socket.close();
    };
  }, [url]);

  return { data, error };
};

export default useWebSocket;
