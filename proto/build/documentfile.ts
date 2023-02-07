/* eslint-disable */
export const protobufPackage = "documentfile";

export interface FileById {
  id: string;
}

export interface DocumentFile {
  id: string;
  filename: string;
  filesize: string;
  filepath: string;
  status: string;
}

export interface DocumentFileService {
  getFile(request: FileById): Promise<DocumentFile>;
}
