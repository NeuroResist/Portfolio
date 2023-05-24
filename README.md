# Установка и запуск
1) Клонируйте проект с гитхаба
2) npm install
3) Запустите локальный сервер, http://localhost:3000/


#  Сайт Резюме
Сайт был создан для иллюстрации навыков и написанного кода. 

## Структура проекта

- `./src/assets/icons` – содержит все svg и jpg файлы.
- `./src/components` – содержит переиспользуемые компоненты.
    -  📂 папка с названием компонента - `NameComponent`
        -  Родительский файл компонента – `index.tsx`
        -  Интерфейс с типами данных – `interface.ts`
        -  Типы данных – `types.ts`
        -  Константы – `constants.ts`
        - Подкомпонент по необходимости – `NameSubComponent.tsx`

## Список используемых технологий:

- Фреймворк - [React](https://ru.reactjs.org/docs/getting-started.html)
- CSS-in-JS – [Emotion](https://emotion.sh/docs/introduction)
- Макрос для Emotion – [Twin.macro](https://github.com/ben-rogerson/twin.macro)
- Готовые классы – [tailwindcss](https://tailwindcss.com/)
- Работа с датами – [dayjs](https://day.js.org/docs/ru/installation/installation)
- Условные стили – [clsx](https://www.npmjs.com/package/clsx)


## Работа со стилями
В проекте используются стили Tailwind.  
В файле [tailwind.config.js](./tailwind.config.js) находится конфигурация с кастомными стилями

Есть Emotion 💅 (css-in-js) компонент [NeonButton](./src/components/Header/NeonButton.tsx), в котором используется Twin.macro, позволяющий делать styled component с Tailwind стилями.

## Импорты
Все импорты имеют в пути не более 2х уровней вложенности
```javascript 
import { ReactComponent as TwinMacroLogo } from " ̶.̶.̶/̶.̶.̶/̶t̶w̶i̶n̶M̶a̶c̶r̶o̶L̶o̶g̶o̶.̶s̶v̶g̶";

import { ReactComponent as TwinMacroLogo } from "assets/icons/twinMacroLogo.svg";
```

Каждый вид импортируемого файла разделен с другими переносом строки:  
```javascript
import tw from "twin.macro";

import Navigation from "./Navigation";
import NeonButton from "./NeonButton";

import { ACTUAL_STACK } from "./constants";
```