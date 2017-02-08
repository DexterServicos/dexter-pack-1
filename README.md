#Dexter pack

Clone o projeto e rode um npm install.

- git clone;
- npm install.

## Rode os camandos

```
npm uninstall -g angular-cli
npm cache clean
npm install -g angular-cli@latest
```

## Deletando as pastas necessárias para update

``` code
rm -rf node_modules dist tmp typings 
```

npm install --save-dev angular-cli@latest

## Defina o sass para o projeto

ng set defaults.styleExt scss

## Ligue o servidor;

- ng serve

## Testando a plicação

- ng e2e
- ng test
- ng lint
