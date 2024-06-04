/**
 * request
 */
export interface PostObjectRequest {
  name?: string;
  data?: {
    [key in string]: any;
  };
}

/**
 * response
 */
export interface GetObjectResponse {
  id: string;
  name: string;
  data:
    | {
        [key in string]: string | number;
      }
    | null;
}

export interface DeleteObjectResponse {
  message: string;
}
