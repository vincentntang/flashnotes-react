Reference doc

https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/

Best NodeJS MySQL tutorial here

https://www.youtube.com/watch?v=1qH-3SIFmXw&list=PL0dzCUj1L5JE4w_OctDGyZOhML6OtJSqR&index=3

## Work done from here

1. Serve a basic route locally
2. Add express to extend that route for different endpoints
3. Make MongooseDB
4. Connect the database
5. Add Model Schema

## How things work

User authentication

1. Bcrypt generates password using hashing / salts 
2. This gets stored on MongoDB
3. When the hashed password is sent back, bcrypt decrypts and compares to user input
4. (I think it's because, the user password can generate any number of unique hashed passwords, so long as it knows number of salts)
5. User is given by a token CSRF generated through a secretkey for JWT
6. Passport is middleware that makes this all happen (for generating JWT specifically)