/* eslint-disable */
export const protobufPackage = "userfile";

export interface UserById {
  id: number;
}

export interface TranslationFile {
  id: string;
  filename: string;
  filesize: string;
  filepath: string;
  status: string;
}

export interface UserFiles {
  userfiles: TranslationFile[];
}

export interface FileById {
  id: string;
}

export interface TranslatedFile {
  id: string;
  filename: string;
  filesize: string;
  filepath: string;
  status: string;
  version: string;
}

export interface TranslatedFiles {
  translatedfiles: TranslatedFile[];
}

export interface UserFileService {
  findUserFiles(request: UserById): Promise<UserFiles>;
  findTranslatedFileByFile(request: FileById): Promise<TranslatedFiles>;
  findTranslatedFile(request: FileById): Promise<TranslatedFile>;
}
