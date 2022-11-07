import mongoose from 'mongoose'

const url = `mongodb+srv://aw3863:olvk8UI0IFKwWckS@cluster0.3ooi1um.mongodb.net/jobApp?retryWrites=true&w=majority`

mongoose.connect(url)

const applicationSchema = new mongoose.Schema({       
    name: {type: String, required: true},              
    description: {type: String, required: true},       
    date: {type: String, required: true},
    note: {type: String, required: true}, 
    status: {type: String, required: true}
});  

export const Application = mongoose.model('Application', applicationSchema)
