import * as exercises from "../model/exercise_model.mjs"

const create = (req, res) => {
    //console.log({body: req.body});
    exercises.createExercise( req.body )
        .then(exercise => {
            res.status(201).json(exercise);
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ ERROR: 'Request failed!' });
        });
}

const retrieveAll = (req, res) => {
    //console.log({query: req.query});
    exercises.retrieveExercises({}, '', 0)
        .then(exercises => {
            if (exercises !== null) {
                res.status(200).json(exercises);
            } else {
                res.status(404).json({ ERROR: 'Resource(s) not found!' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ ERROR: 'Request failed!' });
        });
}

const update = (req, res) => {
    //console.log({query: req.query});
    // now we have the data so we can use the model to query database
    exercises.updateExercise(req.params.id, req.body)
        .then(count => {
            if (count.updateCount === 0) {
                res.status(200).json({ WARNING: "Nothing was updated." });
            } else {
                res.status(200).json(req.body);
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ ERROR : 'Request failed!' });
        });
}

const remove = (req, res) => {
    //console.log({query: req.query});
    exercises.deleteExercises({_id: req.params.id})
    .then(result => {
        if (result.numDeleted === 0) {
            res.status(200).json({ WARNING: 'Nothing was deleted.'});
        } else {
            res.status(204).send();
        }
    })
    .catch(error => {
        console.error(error);
        res.status(400).json({ ERROR : 'Request failed!' });
    });
}

export {create, retrieveAll, update, remove};