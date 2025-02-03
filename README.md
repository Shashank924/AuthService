- Clone the project on you local
- Execute `npm install` on your root directory
- Create a `.env` file in your root directory
- Add a `PORT` variable in the `.env` file and provide a port number
- Inside the `src/config` create a new file `config.json` and add this code

    ```
        {
            "development": {
                "username": "your_DB_loginName",
                "password": "Your_DB_Password",
                "database": "DATABASES_NAME",
                "host": "127.0.0.1",
                "dialect": "mysql"
            },
        }
    ```
- once you added your db config as listed above go to src folder from 
    your terminal and execute `npx sequelize db:create`