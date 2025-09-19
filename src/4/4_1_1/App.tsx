// 4_1_1  Fix a broken chat input
/*
  Если ввести сообщение и нажать "Отправить" то перед появлением сообщения "Отправлено!" произойдет трехсекундная задержка. Кнопка "Отменить" должна остановить появление сообщения "Отправлено!". Она делает это, вызывая clearTimeout для идентификатора таймаута, сохраненного во время handleSend. Однако даже после нажатия кнопки "Отменить" сообщение "Отправлено!" все равно появляется. Найдите причину неработоспособности и устраните ее.
*/

import { useState, useRef } from 'react';

export default function Chat() {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  function handleSend() {
    setIsSending(true);
    timeoutRef.current = setTimeout(() => {
      alert('Отправлено!');
      setIsSending(false);
    }, 3000);
  }

  function handleUndo() {
    setIsSending(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  return (
    <>
      <input
        disabled={isSending}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        disabled={isSending}
        onClick={handleSend}>
        {isSending ? 'Отправляем...' : 'Отправить'}
      </button>
      {isSending &&
        <button onClick={handleUndo}>
          Отменить
        </button>
      }
    </>
  );
}
