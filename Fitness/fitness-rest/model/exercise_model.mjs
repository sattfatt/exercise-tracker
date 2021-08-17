import mongoose from 'mongoose'

// start up the db

mongoose.connect(
    'mongodb://localhost:27017/exercises',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to mongodb database!')
});

// faster querying
mongoose.set('useCreateIndex', true);

const excerciseSchema = mongoose.Schema({
    name   :   {type: String, required: true},
    reps   :   {type: Number, required: true},
    weight :   {type: Number, required: true},
    unit   :   {type: String, required: true},
    date   :   {type: String, required: true}
});

// create model class
const Exercise = mongoose.model('Exercise', excerciseSchema);

/**
 * Create a exercise
 * @param {Object} params parameters name, reps, weight, unit, date all in a json object
 * @returns promise that resolves to the JSON object for the document saved in the db
 */
 const createExercise = async(params) => {
    const exercise = new Exercise(params);
    return exercise.save();
}

/**
 * Find a exercise
 * @param {Object} filter used to match documents
 * @param {String} projection space seperated list of properties that we want included
 * @param {Number} limit how many matching objects to display
 * @returns promise that resolves to the JSON object for how many entries found
 */
 const retrieveExercises = async (filter, projection, limit) => {
    const query = Exercise.find(filter).select(projection).limit(limit);
    const result = await query.exec();
    return result;
}

/**
 * @param {number} id id of the document to be updated
 * @param {object} query_data queryData that is used to update
 * @returns {number} number of documents that were modified or error.
 */
 const updateExercise = async (id, query_data) => {
    // get the document associated with id
    const result = await Exercise.updateOne({_id: id}, query_data);
    return {updateCount: result.nModified};
}

/**
 * Deletes all exercises that match the query
 * @param {object} query query of the document to be deleted
 * @returns {number} number of documents that were deleted
 */
 const deleteExercises = async (query) => {
    // get the document associated with id
    const result = await Exercise.deleteMany(query);

    return {numDeleted: result.deletedCount};
}

export {createExercise, retrieveExercises, updateExercise, deleteExercises};