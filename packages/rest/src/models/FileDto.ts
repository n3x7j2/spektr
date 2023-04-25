/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FileDto = {
  isImage?: boolean;
  imageWidthPx?: number;
  imageHeightPx?: number;
  imageDominantHexColor?: string | null;
  name?: string | null;
  mimeType?: string | null;
  fileUrl?: string | null;
  creationTime?: string;
  lastModificationTime?: string | null;
};
