import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    author:{type:String,required:true},
    author_img:{type:String},
    image:{type:String,required:true},
    category:{type:String,required:true},
    date:{type:Date,default:Date.now()},
})

const Blogmodel = mongoose.models.blog || mongoose.model('blog',Schema)

export default Blogmodel;