## Backend Repo for Varivas Angular App
This repo contains the code of the Backend app that is being used by the Varivas App.

### How to Run the App in Local?
1. Clone/Download the repo and then head over to the root directory.
    ```bash
    git clone https://github.com/RaunakMandal/varivas-api.git

    cd varivas-api
    ```
2. You will now have to download the dependencies. Simply run 
   ```bash
   npm install
   ```
3. After the dependencies are installed, create a `.env` file and add the following Keys.
   ```
   PORT=8080
   MONGODB_URL=
   CLIENT_URL=http://localhost:4200
   ```
   Reach out to me for `MONGODB_URL` or you can set your own.
4. Now run the app and it should be accessible at `http://localhost:${PORT}/api`
    ```bash
    npm start
    ```

### Dependencies
1. CORS
2. Dotenv
3. Express Validator
4. Nodemon
5. Mongoose

## Assumptions
I have not added several things such as users/role based actions, endpoints for bulk GET, pagination, etc. However all these features can be added later on.