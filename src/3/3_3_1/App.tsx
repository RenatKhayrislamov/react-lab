// 3_3_1 Synced inputs 
/*
  Эти два входа являются независимыми. Сделайте их синхронизированными: редактирование одного входа должно обновить другой вход с тем же текстом, и наоборот.
*/

import { useState } from 'react';

export default function SyncedInputs() {
  const [text, setText] = useState('');

  function handleChange(e: any) {
    setText(e.target.value);
  }

  return (
    <>
      <Input
        label="First input"
        text={text}
        onChange={handleChange}
      />
      <Input
        label="Second input"
        text={text}
        onChange={handleChange}
      />
    </>
  );
}

function Input({
  label,
  text,
  onChange
}: {
  label: string,
  text: string,
  onChange: (e: any) => void
}) {
  return (
    <label>
      {label}
      {' '}
      <input
        value={text}
        onChange={onChange}
      />
    </label>
  );
}

