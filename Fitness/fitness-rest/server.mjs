import express from 'express'
import * as controller from './controller/exercise_controller.mjs'

const app = express();
const PORT = 3000;

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

// map the controllers to the REST endpoints

app.post('/exercises', controller.create);

app.get('/exercises', controller.retrieveAll);

app.put('/exercises/:id', controller.update);

app.delete('/exercises/:id', controller.remove);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});