# Creepy

Just NodeJS Express web app screamer for pranking a friend

### demo.gif:
![demo.gif](https://github.com/michael-bill/creepy/blob/main/demo.gif)

### Install dependencies:
```
npm install
```

### Run:
```
npm run start
```

### Example detected json data after the user visits the page:
```
{
  time: '16.11.2023 22:49:47',
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Mobile/15E148 Safari/604.1',
  ip: '188.170.75.162',
  geo: {
    range: [ 3165277056, 3165277183 ],
    country: 'RU',
    region: 'SPE',
    eu: '0',
    timezone: 'Europe/Moscow',
    city: 'St Petersburg',
    ll: [ 59.8981, 30.2619 ],
    metro: 0,
    area: 50
  }
}
```