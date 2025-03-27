import cloudinary, { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';

/**
 * Uploads a file to Cloudinary.
 * @param {string} file - The file path or URL to be uploaded.
 * @param {string} [public_id] - Optional unique identifier for the file in Cloudinary.
 * @param {boolean} [overwrite] - Whether to overwrite an existing file with the same public_id.
 * @param {boolean} [invalidate] - Whether to invalidate the cached version of the file.
 * @returns {Promise<UploadApiResponse | UploadApiErrorResponse | undefined>} - Upload response or error.
 */


export function uploads(
  file: string,
  public_id?: string,
  overwrite?: boolean,
  invalidate?: boolean
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
  return new Promise((resolve) => {
    cloudinary.v2.uploader.upload(
      file,
      {
        public_id,
        overwrite,
        invalidate,
        resource_type: 'auto' // Automatically detects file type (image, video, etc.)
      },
      (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
        if (error) resolve(error);
        resolve(result);
      }
    );
  });
}


/**
 * Uploads a video file to Cloudinary with chunked uploading.
 * @param {string} file - The video file path or URL to be uploaded.
 * @param {string} [public_id] - Optional unique identifier for the video in Cloudinary.
 * @param {boolean} [overwrite] - Whether to overwrite an existing file with the same public_id.
 * @param {boolean} [invalidate] - Whether to invalidate the cached version of the file.
 * @returns {Promise<UploadApiResponse | UploadApiErrorResponse | undefined>} - Upload response or error.
 */
export function videoUpload(
  file: string,
  public_id?: string,
  overwrite?: boolean,
  invalidate?: boolean
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
  return new Promise((resolve) => {
    cloudinary.v2.uploader.upload(
      file,
      {
        public_id,
        overwrite,
        invalidate,
        chunk_size: 50000, // Uploads the video in 50KB chunks for large files
        resource_type: 'video' // Explicitly sets the resource type to 'video'
      },
      (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
        if (error) resolve(error);
        resolve(result);
      }
    );
  });
}
