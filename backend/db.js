const mongoose = require('mongoose');

/**
    HOW TO CONFIGURE THE MONGODB DATABASE CONNECTION:

    1. create an async function called connectDB.

    2. within the function, wrap the connection attempt inside a try/catch block.

    3. in the try block & call this:
        await mongoose.connect(process.env.MONGO_URI)

    4. in the catch block, log the error & call this:
        process.exit(1)
        ^ this prevents the server from running when the database does NOT work!
    
    5. outside of the function we just made, 
    you must export connectDB (the function we created) to use it in the index.file
    put the following line at the end of this file:
        module.exports = connectDB;
*/