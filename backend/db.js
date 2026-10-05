const mongoose = require('mongoose');

/**
    HOW TO CONFIGURE THE MONGODB DATABASE CONNECTION:

    1. create an async function called connectDB.

    2. within the function, wrap the connection attempt inside a try/catch block.

    3. in the try block, call this:
        await mongoose.connect(process.env.MONGO_URI)
        ^ MONGO_URI comes from your .env file, which index.js loads for you.

    4. still in the try block, log a success message such as 'MongoDB connected'

    5. in the catch block, log the error with console.error(err), then call this:
        process.exit(1)
        ^ this prevents the server from running when the database does NOT work!

    6. outside of the function we just made,
    you must export connectDB (the function we created) so index.js can use it.
    put the following line at the end of this file:
        module.exports = connectDB;

    7. check that it works: run npm start.
    if you see 'MongoDB connected' in the terminal, you're done! 
    
    8. great job getting started :3
*/