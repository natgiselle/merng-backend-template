# merng-backend-template

A simple MERN+G backend starter (MongoDB, Express, React, Node, GraphQL) with auth :p

Use it as a reference for the structure & then build your own data model on top of it!

## Sample Backend Template Details
- Express + Apollo Server running at `/graphql`
- Register & login with bcrypt-hashed passwords + JWT
- Logged-in user's have their ID is available to every resolver as `context.userId`
- User model & a sample model to copy

## Your Work
- `db.js`: MongoDB connection (follow the steps in its comment block)
- Your own model, your own types & your own protected queries and mutations

## Project Options

**A. Use the repository you already created, write the contents and create the file structure yourself from this (HIGHLY RECOMMEND!)**

Build the same structure inside your own repo & use this one as a reference
Type the files yourself or copy (MAKE SURE YOU UNDERSTAND THE CONTENT!)

1. Create the folders & install everything:
```bash
mkdir backend && cd backend
npm init -y
npm install express mongoose @apollo/server @as-integrations/express5 graphql bcrypt jsonwebtoken cors dotenv
mkdir auth graphql models
```

2. Add a start script in `backend/package.json`:
```json
"scripts": {
    "start": "node index.js"
},
```

3. Make `backend/.env.example` with this inside:
```
MONGO_URI=your_mongodb_connection_string_here
JWT_SECRET=any_long_random_string_here
PORT=4000
```

**B. Start fresh from this template**
click **Use this template**, then **Create a new repository**, & clone YOUR new repo. do NOT fork or clone this one directly!

Put the following in your terminal:
```bash
cd backend
npm install
```

## File Tree (Structure)
```
backend/
├── .env.example
├── index.js
├── db.js
├── auth/auth.js
├── graphql/typeDefs.js
├── graphql/resolvers.js
└── models/
    ├── User.js
    └── ModelName.js
```

## Backend Setup

1. Add `node_modules/` & `.env` to your `.gitignore` BEFORE you create your `.env` ^ this keeps your secrets off github!

2. Create your env file:
```bash
cp .env.example .env
```
Then fill it in:
- `MONGO_URI`: your atlas connection string (replace `<password>` with your real database password)
- `JWT_SECRET`: any long random string
- `PORT`: leave it as 4000
- Look at `.env.example` and follow the instructions for your JWT secret 

## IMPORTANT!!!!
TRIPLE CHECK THAT YOUR YOUR REAL `.env` file is in .gitignore or in a .gitignore global DO NOT COMMIT THAT! (huge security risks and other reasons)
3. Finish `db.js` by following the steps in its comment block.

4. Start the server from inside the `backend` folder:
```bash
npm start
```
Seeing `"MongoDB connected"` in your terminal means it's working!

5. open `http://localhost:4000/graphql` & run `{ hello }`

If it does NOT connect please check the `db.js` file comment block instructions!

## Backend Completion
Once you've built your own model & resolvers make sure your auth works:
- Register two different users
- Create one item (whatever your project stores) as each user
- Each user should only see their OWN data, NEVER ANYONE ELSE'S

You got this SWEenies! :3