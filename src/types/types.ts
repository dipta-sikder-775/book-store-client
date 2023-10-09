import { ChangeEventHandler } from "react";

export interface IUser {
  _id: string | null;
  email: string | null;
  name: string | null;
  token: string | null;
}

export type IError = {
  status?: number;
  data?: {
    success?: boolean;
    statusCode?: number;
    message?: string;
    stack?: string;
  };
};

export type IProps = {
  className?: string;
  children?: React.ReactNode;
  value?: string;
  src?: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export type IInput = {
  id?: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  type?: string;
  className?: string;
  placeholder?: string;
  defaultValue?: string;
  onFocus?: ChangeEventHandler<HTMLInputElement>;
  ref?: React.RefObject<HTMLInputElement>;
};

export type IInputDiv = {
  type?: string;
  level?: string;
  className?: string;
  placeholder?: string;
};

export type IBook = {
  title: string;
  genre: string;
  price: number;
  image: string;
};

export type IImageResponse = {
  data: {
    message: string;
    data: any;
  };
};

export interface IBookResponse {
  _id: string;
  author: {
    _id?: string;
    name?: string;
    email?: string;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
  };
  genre: string;
  title: string;
  price: number;
  image: {
    _id?: string;
    bucket?: string;
    etag?: string;
    fileExtension?: string;
    fileName?: string;
    fileUrl?: string;
    mimeType?: string;
    size?: number;
    __v?: number;
    createdAt?: string;
    updatedAt?: string;
  };
  publicationDate: string;
  reviews: string[];
  __v?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface IUploadImageRes {
  message: string;
  data: IUploadImageData;
}

export interface IUploadImageData {
  fileName: string;
  fileUrl: string;
  fileExtension: string;
  bucket: string;
  key: string;
  size: number;
  etag: string;
  mimeType: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IImageUploadCNRes {
  asset_id?: string;
  public_id?: string;
  version?: number;
  version_id?: string;
  signature?: string;
  width?: number;
  height?: number;
  format?: string;
  resource_type?: string;
  created_at?: string;
  tags?: string[];
  bytes?: number;
  type?: string;
  etag?: string;
  placeholder?: boolean;
  url?: string;
  secure_url?: string;
  folder?: string;
  access_mode?: string;
  original_filename?: string;
}
