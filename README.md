# micro-supaa

```mermaid
    graph TD;
        fa:fa-user-->fa:fa-database;
        fa:fa-database-->B;
        fa:fa-database-->C;
        fa:fa-database-->J;
        J-->D;
        B-->D;
        C-->D;
        D-->fa:fa-stop
```
## Project setup
```
npm install
```



### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
