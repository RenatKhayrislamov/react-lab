import { useEffect } from 'react';
import { createConnection, Options } from './chat';

export default function ChatRoom({ serverUrl, roomId }: { serverUrl: string, roomId: string }) {
  useEffect(() => {
    const connection = createConnection({ serverUrl, roomId });
    connection.connect();
    return () => connection.disconnect();
  }, [serverUrl, roomId]);

  return <h1>Welcome to the {roomId} room!</h1>;
}
