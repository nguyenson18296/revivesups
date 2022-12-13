import { StaticImageData } from "next/image";

export const API_ENDPOINT_URL = "https://api.cellfit.vn/api";
export const DOMAIN_URL = "https://api.cellfit.vn";

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
  pricing_discount: string;
  description?: string;
  thumbnail: StaticImageData;
  sold_out: boolean;
}
