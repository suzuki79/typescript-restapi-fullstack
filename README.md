
# Typescriot Fullstack Sample Application
- typescript(nodejs)
- express 
- typeorm for orm, migration
- jest
- winston for logger
- mysql
# Start Application
```bash
yarn start
```
# Test
```bash
yarn test
```

# Migration
see more detail.  
https://github.com/typeorm/typeorm/blob/master/docs/migrations.md

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
