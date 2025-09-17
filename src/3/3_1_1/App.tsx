// 3_1_1 Add and remove a CSS class
/*
    Сделайте так, чтобы щелчок на картинке удалял CSS-класс background--active из внешнего <div>, но добавлял класс picture--active к <img>. Повторный щелчок по фону восстановит исходные CSS-классы.

    Визуально вы должны увидеть, что щелчок на изображении удаляет фиолетовый фон и выделяет границу изображения. Щелчок за пределами изображения выделяет фон, но убирает выделение границы изображения.
*/

import { useState } from 'react';

export default function Picture() {
    const [isActive, setIsActive] = useState(false);

    let backgroundClassName = 'background';
    let pictureClassName = 'picture';
    if (isActive) {
        pictureClassName += ' picture--active';
    } else {
        backgroundClassName += ' background--active';
    }

    return (
        <div
            className={backgroundClassName}
            onClick={() => setIsActive(false)}
        >
            <img
                onClick={e => {
                    e.stopPropagation();
                    setIsActive(true);
                }}
                className={pictureClassName}
                alt="Rainbow houses in Kampung Pelangi, Indonesia"
                src="/5qwVYb1.jpg"
            />
        </div>
    );
}