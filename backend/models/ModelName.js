// BLUEPRINT: for the documents stored in this model's collection
// HOW TO USE IT: rename the file, rename ModelName/ModelNameSchema, then add your own fields

const { model, Schema } = require('mongoose');

const ModelNameSchema = new Schema({
    field1: String,
    field2: Number,
    // to tie a document to a user: userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

// mongoose turns 'ModelName' into a collection called 'modelnames'
module.exports = model('ModelName', ModelNameSchema);