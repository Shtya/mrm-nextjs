
import mongoose ,{Schema}  from "mongoose";

const postSchema = new Schema ({
  title : {type : String, required : true}, 
  category : {type : String }, 
  description : {type : String, required : true}, 
  thumbnail : {type : String, required : true}, 
  titleData : {type : String}, 
  descData : {type : String}, 
}, {timestamps : true}) 


const Posts = mongoose.models.posts || mongoose.model("posts", postSchema);
export default Posts;