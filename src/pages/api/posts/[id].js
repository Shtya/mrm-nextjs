import Posts from "@/server/model/M_posts";
import {connnectDb} from "@/server/connection"


export default async function handler(req, res) {
  await connnectDb();
  
  if (req.method === 'GET') {
    const { id } = req.query;
    const post = await Posts.findById(id);
    res.status(200).json(post);
  } 

  
  else if (req.method === 'PUT') {
    const { id } = req.query;
    const data = await Posts.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(data);
  } 
  
  else if (req.method === 'DELETE') {

    const { id } = req.query;
    await Posts.findByIdAndDelete(id);
    res.status(200).json({ message: 'Post deleted successfully' });
  } 

}