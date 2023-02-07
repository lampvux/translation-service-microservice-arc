/* eslint-disable */
export const protobufPackage = "translationfile";

export interface FileById {
  id: string;
}

export interface TranslationFile {
  id: string;
  filename: string;
  filesize: string;
  filepath: string;
  status: string;
}

export interface TranslationFileService {
  getFile(request: FileById): Promise<TranslationFile>;
}
