/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileDto } from '../models/FileDto';
import type { FileUploadDto } from '../models/FileUploadDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class FileService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Upload file
   * <b>Slug Format for File</b>: files/{tenant id | HOST}/{user id}/{id}-f-c0-w0-h0-{file name}.{extension} <br />
 * Example: files/HOST/12165e34653f8bfe76fd39febbcbd6bb/cngxhiuqkkq-f-c0-w0-h0-sample-excel.xlsx <br /><br /><b>Slug Format for Image</b>:  files/{tenant id | HOST}/{user id}/{id}-i-c{hex color}-w{width in px}-h{height in px}-{file name}.{extension} <br />
 * Example: files/dd582bf47249d2236a9739febbcbcd0b/12165e34653f8bfe76fd39febbcbd6bb/files/cngxhiuqkkq-i-c2b181b-w288-h163-sample-image.png <br /><br /><b>Thumbnail automatic generate for an image</b><br />
 * "files/dd582bf47249d2236a9739febbcbcd0b/12165e34653f8bfe76fd39febbcbd6bb/{image slug}-t.{extension}" to access thumbnail (60x60) of the image
   * @returns FileDto Returns uploaded file information
   * @throws ApiError
   */
  public fileUpload({
requestBody,
}: {
requestBody?: FileUploadDto,
}): CancelablePromise<FileDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/files',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upload file by FORM (For Swagger, TESTING ONLY)
   * <b>Slug Format for File</b>: files/{tenant id | HOST}/{user id}/{id}-f-c0-w0-h0-{file name}.{extension} <br />
 * Example: files/HOST/12165e34653f8bfe76fd39febbcbd6bb/cngxhiuqkkq-f-c0-w0-h0-sample-excel.xlsx <br /><br /><b>Slug Format for Image</b>:  files/{tenant id | HOST}/{user id}/{id}-i-c{hex color}-w{width in px}-h{height in px}-{file name}.{extension} <br />
 * Example: files/dd582bf47249d2236a9739febbcbcd0b/12165e34653f8bfe76fd39febbcbd6bb/files/cngxhiuqkkq-i-c2b181b-w288-h163-sample-image.png <br /><br /><b>Thumbnail automatic generate for an image</b><br />
 * "files/dd582bf47249d2236a9739febbcbcd0b/12165e34653f8bfe76fd39febbcbd6bb/{image slug}-t.{extension}" to access thumbnail (60x60) of the image
   * @returns FileDto Returns uploaded file information
   * @throws ApiError
   */
  public fileUploadForm({
formData,
}: {
formData?: {
file?: Blob;
},
}): CancelablePromise<FileDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/files/upload-by-form',
      formData: formData,
      mediaType: 'multipart/form-data',
    });
  }

}
