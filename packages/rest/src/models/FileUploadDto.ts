/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FileUploadDto = {
  folder?: string | null;
  name?: string | null;
  contentBase64: string;
  isEnableCompressImage?: boolean;
  imageMaxWidthPx?: number | null;
  imageMaxHeightPx?: number | null;
};
