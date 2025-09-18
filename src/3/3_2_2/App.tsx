// 3_2_2 Fix a broken packing list
/*
    Этот упаковочный лист имеет нижний колонтитул, который показывает, сколько предметов упаковано, и сколько предметов в целом. Поначалу кажется, что это работает, но на самом деле это ошибка. Например, если вы пометите предмет как упакованный, а затем удалите его, счетчик не будет обновлен правильно. Исправьте счетчик так, чтобы он всегда был корректным.
*/


import { useState } from 'react';
import AddItem from './AddItem.js';
import PackingList from './PackingList.js';

export type Item = {
  id: number,
  title: string,
  packed: boolean
}

let nextId = 3;
const initialItems = [
  { id: 0, title: 'Warm socks', packed: true },
  { id: 1, title: 'Travel journal', packed: false },
  { id: 2, title: 'Watercolors', packed: false },
];

export default function TravelPlan() {
  const [items, setItems] = useState(initialItems);
  const packed = items.filter(item => item.packed).length;
  const total = items.length;

  function handleAddItem(title: string) {
    setItems([
      ...items,
      {
        id: nextId++,
        title: title,
        packed: false
      }
    ]);
  }

  function handleChangeItem(nextItem: Item) {
    setItems(items.map(item => {
      if (item.id === nextItem.id) {
        return nextItem;
      } else {
        return item;
      }
    }));
  }

  function handleDeleteItem(itemId: number) {
    setItems(
      items.filter(item => item.id !== itemId)
    );
  }

  return (
    <>  
      <AddItem
        onAddItem={handleAddItem}
      />
      <PackingList
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
      <hr />
      <b>{packed} out of {total} packed!</b>
    </>
  );
}
