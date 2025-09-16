// 1_8_1 Fix a broken clock
/*
  Этот компонент пытается установить CSS-класс <h1> на night в период с полуночи до шести часов утра, и на day во все остальное время. Однако это не срабатывает. Можете ли вы исправить этот компонент?

  Вы можете проверить, работает ли ваше решение, временно изменив часовой пояс компьютера. Когда текущее время находится между полуночью и шестью часами утра, часы должны иметь инвертированные цвета!

  Рендеринг — это вычисление, он не должен пытаться "делать" вещи. Можете ли вы выразить ту же идею по-другому?
*/

export default function ClockWrapper() {
  return <Clock time={new Date()} />;
}

function Clock({ time }: { time: Date }) {
  const hours = time.getHours();
  let className;
  if (hours >= 0 && hours <= 6) {
    className = 'night';
  } else {
    className = 'day';
  }
  return (
    <h1 className={className}>
      {time.toLocaleTimeString()}
    </h1>
  );
}

