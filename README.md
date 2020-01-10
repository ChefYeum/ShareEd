
# ShareEd
Course material sharing platform 

## Dependencies
- MongoDB must be setup as `localhost:27017` (the default port) and be running `mongod`
- `credentials.json` file for Google API must be located at the root directory of the repository

## How to serve locally
1. Make sure the dependencies above are satisfied 
2. `cd` to the root directory of the repository
3. Run `npm i` to install backend dependencies
4. Run `cd web && npm i && cd ../` to install frontend dependencies 
5. Run `npm run dev` to start both frontend and backend server along with the mongo database
6. Open `http://localhost:8080/` on your browser (it should in fact automatically open)

## Team
- Dee Yeum ([ChefYeum](https://github.com/chefyeum))
- Maksymilian Mozolewski ([Makspll](https://github.com/makspll))
