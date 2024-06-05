export const ApiPathImgur = {
  /**
   * 取得圖片
   */
  GetImage: '@GET/3/image/{imageHash}',

  /**
   * 上傳圖片
   */
  PostImage: '@POST/3/image',
} as const;
