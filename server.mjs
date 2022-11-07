import express from 'express';
import cors from 'cors';
import {Application} from "./db.mjs";

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());

app.get('/api/applications', (req, res) => {
  Application.find({}).then(applications => {
    res.json(applications)
  });
});


app.post('/api/applications', (request, response) => {
  const application = new Application({
    name: request.body["name"], 
    description: request.body["description"], 
    date: request.body["date"],       
    note: request.body["note"],       
    status: request.body["status"]
  });

  application.save((err, savedApplication) => {
    response.json(savedApplication.toJSON());
  });
});


app.listen(PORT);