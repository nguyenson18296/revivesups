import { StaticImageData } from "next/image";

export const API_ENDPOINT_URL = "http://localhost:1337/api";
export const DOMAIN_URL = "http://localhost:1337";

export enum HTTP_METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

export interface IProductItemProps {
  id: string;
  name: string;
  url: string;
  pricing: string;
  description?: string;
  thumbnail: StaticImageData;
  sold_out: boolean;
}
