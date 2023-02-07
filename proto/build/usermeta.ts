/* eslint-disable */
export const protobufPackage = "usermeta";

export interface UserById {
  id: number;
}

export interface UserMeta {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
}

export interface UserMetaService {
  findOne(request: UserById): Promise<UserMeta>;
}
