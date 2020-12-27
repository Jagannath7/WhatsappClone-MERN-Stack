import mongoose from 'mongoose'

const whatsapppSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
});

export default mongoose.model('messagecontents', whatsapppSchema)