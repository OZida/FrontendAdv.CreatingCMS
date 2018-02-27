# FrontendAdv.CreatingCMSandContent

![dive into frontend](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTir2FP_TvsEbNkLjbdxoX9o3oiPkeHxAAZcivT7LEWH1VVoHrkImh0pDg)

### Начало работы.

  - Скопируйте [ссылку репозитория проекта](https://github.com/OZida/FrontendAdv.CreatingCMSandContent)
  - Запустите консоль git Bush в директории, где будет размещен проект. В консоли введите следующую команду
```sh
$ git clone "скопированная ссылка"
```
содержимое репозитория скопировано на Ваш ПК. Скопируйте путь    
  - Убедитесь, что на пашем ПК установлен [Node.js](https://nodejs.org/uk/)
  - Откройте консоль, где введите следующую команду
```sh
$ cd "полный путь к папке скопированого проекта вместе с названием"
```
после выполнения команды, в консоли будет указываться путь к проекту
  - В консоли, находясь в папке проекта, для загрузки необходимых для работы плагинов и связей, введите команду
```sh
$ npm i
```
  - Для открытия проекта в браузере введите команду
```sh
$ npm run dev
```

### Технологии

Для работы проекта используется ряд следующих технологий

* [Vue.js](https://ru.vuejs.org/index.html) - прогрессивный фреймворк для создания пользовательских интерфейсов
* [webpack](https://webpack.js.org/) - модульный упаковщик
* [Node.js](https://nodejs.org/uk/) - программная платформа
* [SCSS](https://sass-scss.ru/guide/) - препроцессор, который упрощает написание и обслуживание таблицы CSS-стилей
* [Flexbox Layout](http://html5.by/blog/flexbox/) - Модуль, который направлен на предоставление более эффективного способа управления HTML элементами
* [Pug](https://codeburst.io/getting-started-with-pug-template-engine-e49cfa291e33) - функциональный графический движок, который упрощает и упорядочивает написание HTML разметки

### Плагины и загрузчики

В настоящий момент в проекте используются такие плагины:

| Плагин | Назначение |
| ------ | ------ |
| webpack.HotModuleReplacementPlugin | заменяет, добавляет или удаляет модули во время работы приложения без его перезагрузки |
| HtmlWebpackPlugin | генерирует HTML - файл, который использует в себе webpack-связи, используя теги скриптов |
| CopyWebpackPlugin | копирует отдельные файлы или папки целиком в указанную дерикторию |

И загрузчики:

| Загрузчик | Назначение |
| ------ | ------ |
| style-loader| нужен для ввалидной работы webpack с css |
| css-loader | загружает файл CSS с разрешенным импортом и возвращает код CSS |
| sass-loader | загружает и компилирует файл SASS / SCSS |
| vue-loader | загрузчик, который преобразует Vue компоненты в обычные JavaScript модули |
| url-loader | загрузчик файлов, который возвращает URL-адрес, если файл меньше указанного в его свойстве |
| file-loader | копирует файл в указанную дерикторию, возвращает URL-адрес |