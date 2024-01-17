import mongoose from "mongoose"

export const connnectDb = ()=>{
  mongoose.connect("mongodb+srv://AhmedShtya:rfOVazyZ1puX7cHD@cluster0.xgw84zk.mongodb.net/MRM?retryWrites=true" , { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => console.log("connection")).catch(err => console.log(err))
}