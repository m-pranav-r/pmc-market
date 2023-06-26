# Backend Application for [pmc-frontend](https://github.com/m-pranav-r/pmc-frontend/)

Edit src/config/dbconfig to change db configs

Use `npm run dev` to start server

## Available endpoints

- GET, '/': Gets all listed bases
- GET, '/:baseid': Gets bases with given base size
- POST, '/': Adds base in req body
- GET, '/:baseid': Removes bases with given base size