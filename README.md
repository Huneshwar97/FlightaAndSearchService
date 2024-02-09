/
//role based architecture other option in feature based
    -src/
        index.js //server
        models/
        controllers/
        middlewares/
        services/
        utils/
        configs/

    -tests/[later]
    -static/
    -temp/

#Welcome to Flights Service

## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following environmen variable
    -`PORT=3000`
- Inside the `src/config` folder create a new file `config.json` ans then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}

```


```
- Once you've added your db config as listed above, got to the src folder from your terminal and execute `npx sequelize db:create`

```

