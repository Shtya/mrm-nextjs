import {connnectDb} from "@/server/connection"
import Posts from  "@/server/model/M_posts"

export default async function handler(req, res) {
  await connnectDb();

  if (req.method === 'POST') {
    const newpost = new Posts(req.body);
    await newpost.save();
    res.status(201).json(newpost);

  }
  
  else if (req.method === 'GET') {
    if(req.query.category){
      let posts = await Posts.find({category : req.query.category}).sort({ createdAt: -1 });
      res.status(200).json(posts);
    }else {
      let posts = await Posts.find().sort({ createdAt: -1 });
      res.status(200).json(posts);
    }
  }


}