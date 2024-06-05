import { ApiPathImgur } from '~/shared/constants/api/imgur-api.const';
import type {
  GetImageResponse,
  PostImageResponse,
} from '~/shared/models/api/imgur.model';

export const useImgur = () => {
  const { $request } = useNuxtApp();

  return {
    /**
     * 取得 image 資訊
     * @param imageHash imageHash
     */
    getImage(imageHash: string): Promise<GetImageResponse> {
      return $request(ApiPathImgur.GetImage, {
        imageHash,
      });
    },

    /**
     * 新增 object
     * @param params 傳送參數
     */
    postObject(params: FormData): Promise<PostImageResponse> {
      return $request(ApiPathImgur.PostImage, {}, params);
    },
  };
};
