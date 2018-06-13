
# Quick Start
```bash
yarn start
```
# Test
```bash
yarn test
```

# Migration
- install
```bash
npm i typeorm -g
```
- run
```bash
yarn run typeorm migration:run
```

# DB setup
```bash
$ docker run --rm --name mysql -e MYSQL_DATABASE=node-restapi -p 3306:3306 -d mysql:5.7
```
