import { ApiPathApi } from '~/shared/constants/api/api-api.const';
import type {
  DeleteObjectResponse,
  GetObjectResponse,
  PostObjectRequest,
} from '~/shared/models/api/api.model';

export const useApi = () => {
  const { $request } = useNuxtApp();

  return {
    /**
     * 取得 objects 列表資訊
     */
    getListOfAllObjects(): Promise<GetObjectResponse[]> {
      return $request(ApiPathApi.GetListOfAllObjects);
    },

    /**
     * 取得 object 資訊
     * @param object_id object_id
     */
    getObject(object_id: string): Promise<GetObjectResponse> {
      return $request(ApiPathApi.GetObject, {
        object_id,
      });
    },

    /**
     * 新增 object
     * @param params 傳送參數
     */
    postObject(params: PostObjectRequest): Promise<GetObjectResponse> {
      return $request(ApiPathApi.PostObject, {}, params);
    },

    /**
     * 更新 object 資訊
     * @param object_id object_id
     * @param params 傳送參數
     */
    patchObject(
      object_id: string,
      params: PostObjectRequest,
    ): Promise<GetObjectResponse> {
      return $request(
        ApiPathApi.PatchObject,
        {
          object_id,
        },
        params,
      );
    },

    /**
     * 刪除 object
     * @param object_id object_id
     */
    deleteObject(object_id: string): Promise<DeleteObjectResponse> {
      return $request(ApiPathApi.DeleteObject, {
        object_id,
      });
    },
  };
};
