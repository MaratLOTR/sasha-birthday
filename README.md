# Саша, с днём рождения ♡

Статическая открытка в бордово-коричневых тонах: шесть фотографий, поздравление и письмо с приглашением на фотосессию под шуточным названием «котосессия». Работает без сборки, библиотек и внешних сервисов.

Откройте `index.html` в браузере. Для просмотра через локальный сервер, если Python уже установлен:

```sh
python3 -m http.server 8000
```

После запуска откройте `http://localhost:8000`.

## GitHub Pages

1. Загрузите файлы в GitHub-репозиторий.
2. В **Settings → Pages → Build and deployment** выберите **Deploy from a branch**.
3. Укажите ветку с сайтом и папку **/ (root)**, затем нажмите **Save**.

Все пути относительные: сайт поддерживает адрес вида `https://username.github.io/repository/`.

Подробнее: [настройка публикации в документации GitHub](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

Текст поздравления и письма находится в `index.html`, цвета и оформление — в `styles.css`, открытие конверта — в `script.js`. Фотографии хранятся в `assets/photos/`.
