
import mongoose ,{Schema}  from "mongoose";

const SchemaIMG = new Schema({
  images  : [String],
})


const Images = mongoose.models.images || mongoose.model("images", SchemaIMG);

export default Images
