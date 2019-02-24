import { config, uploader } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();
const cloudinaryConfig = (req, res, next) => {
  config({
    cloud_name: 'khmer-make',
    api_key: '745767955329641',
    api_secret: '9VJyZS9cexI-IMVVRcmoForgMP8'
  });
  next();
}

export { cloudinaryConfig, uploader };
