// pages/api/comments/[postId].js

import M_Comment from "@/server/model/M_comment"
import {connnectDb} from "@/server/connection"

export default async function handler(req, res) {
  await connnectDb()
  const { postId } = req.query;

  
  
  if (req.method === 'GET') {
    try {
      const comments = await M_Comment.find({ postId });
      res.status(200).json(comments);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  } 

  else if (req.method === 'POST') {
    try {
      const { name, email, message, website, userId } = req.body;
      const newComment = await M_Comment.create({ website, name, email, message, postId, userId });
      res.status(201).json(newComment);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  } 

  else if (req.method === 'PUT') {
    try {
      const { name, email, message, website, userId } = req.body;
      const updatedComment = await M_Comment.findOneAndUpdate(
        { _id: postId },
        { website, name, email, message, userId },
        { new: true, upsert: true }
      );
      res.status(200).json(updatedComment);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  } 
  
  else  if (req.method === 'DELETE') {
    try {
      const deletedComment = await M_Comment.findByIdAndDelete(postId);
      res.status(200).json(deletedComment);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  } 
}
