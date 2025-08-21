import { v2 as cloudinary } from 'cloudinary';
import { type HandleUpload, type HandleDelete } from '@payloadcms/plugin-cloud-storage/types';
import type { UploadApiResponse } from 'cloudinary';
import type { cloudStoragePlugin } from '@payloadcms/plugin-cloud-storage';

cloudinary.config({
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  cloud_name: process.env.CLOUDINARY_NAME,
});

const cloudinaryAdapter = () => ({
  /**
   * When a media entry is deleted from Payload, this also removes the file from Cloudinary.
   */
  async handleDelete({ filename }: Parameters<HandleDelete>[0]) {
    // if filename is present then we will look for that file
    try {
      // We remove the file extension from the filename and then target the file
      // inside the "media/" folder on Cloudinary (which we used as the upload path)
      await cloudinary.uploader.destroy(`media/${filename.replace(/\.[^/.]+$/, '')}`);
    } catch (error) {
      // if something error occured we will catch the error and respond the error in console
      console.error('Cloudinary Delete Error:', error);
    }
  },
  /**
   * Uploads the file to Cloudinary, wraps Cloudinary’s callback API in a Promise, and attaches metadata (name, size, type).
   */
  async handleUpload({ file }: Parameters<HandleUpload>[0]) {
    try {
      // create a function that will upload your file in cloudinary
      // Uploading the file to Cloudinary using upload_stream.
      // Since Cloudinary's upload_stream is callback-based, we wrap it in a Promise
      // so we can use async/await syntax for cleaner, easier handling.
      // It uploads the file with a specific public_id under "media/", without overwriting existing files.
      const uploadResult = await new Promise<UploadApiResponse>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            overwrite: false, // Do not overwrite if a file with the same name exists
            public_id: `media/${file.filename.replace(/\.[^/.]+$/, '')}`, // Set custom file name without extension, and it also previxed the cleaned filename with media/
            resource_type: 'auto', // auto-detect file type (image, video, etc.)
            use_filename: true, // Use original filename
          },
          (error, result) => {
            if (error) {
              return reject(error);
            }
            if (!result) {
              return reject(new Error('No result returned from Cloudinary'));
            }
            return resolve(result); // hanlde result
          },
        );
        uploadStream.end(file.buffer); // this line send the file to cloudinary it means entire file is already in memory and will be send whole thing at once not in chunk
      });
      file.filename = uploadResult.public_id; // Use Cloudinary's public_id as the file's unique name
      file.mimeType = `${uploadResult.format}`; // Set MIME type based on Cloudinary's format (e.g., image/png)
      file.filesize = uploadResult.bytes; // Set the actual file size in bytes, for admin display and validations
    } catch (err) {
      console.error('Upload Error', err);
    }
  },

  name: 'cloudinary-adapter',
  /**
   * Not used here because Cloudinary serves public URLs by default.
   */
  staticHandler() {
    return new Response('Not implemented', { status: 501 });
  },
});

export default function cloudStorageConfig(): Parameters<typeof cloudStoragePlugin>[0] {
  return {
    collections: {
      media: {
        adapter: cloudinaryAdapter,
        disableLocalStorage: true,
        generateFileURL: ({ filename }) => {
          return cloudinary.url(`media/${filename}`, { secure: true });
        },
      },
    },
  };
}
