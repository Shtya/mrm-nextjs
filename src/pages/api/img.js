import {connnectDb} from "@/server/connection"
import M_images from '@/server/model/M_images';
// import multer from 'multer';
// import sharp from 'sharp';



// const multerStorage = multer.memoryStorage();
// const upload = multer({ storage: multerStorage });

// const Resize = async (req, res, next) => {
//   req.body.images = [];
//   if (req.files.images) {
//     await Promise.all(
//       req.files.images.map(async (img, index) => {
//         const ext = img.mimetype.split('/')[1];
//         const filename = `products-${Date.now()}-${index + 1}.${ext}`;
//         await sharp(img.buffer)
//           .toFile(`uploads/image/${filename}`);

//         // Save images into req.body for further processing
//         req.body.images.push(filename);
//       })
//     );
//   }
//   next();
// };

// const Create = async (req, res) => {
//   try {
//     const data = await M_images.create(req.body);
//     res.status(201).json({ data });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// const handlerImg = upload.fields([{ name: 'images', maxCount: 20 }]);

// export const config = {
//   api: {
//     bodyParser: false, // Disables body parsing, as we handle it manually
//   },
// };


export default async function handler(req, res) {
  await connnectDb();
    if (req.method === 'GET') {
    const data = await M_images.find({})
    res.status(200).json(data);
  } 
}
