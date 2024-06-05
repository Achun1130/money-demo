/**
 * response
 */
export interface ImgurApiResponse<T = any> {
  data: T;
  success: boolean;
  status: number;
}

export type GetImageResponse = ImgurApiResponse<GetImageData>;

export interface GetImageData {
  id: string;
  title: string;
  description: string;
  datetime: number;
  type: string;
  animated: boolean;
  width: number;
  height: number;
  size: number;
  views: number;
  bandwidth: number;
  vote: any;
  favorite: boolean;
  nsfw: boolean;
  section: any;
  account_url: any;
  account_id: number;
  is_ad: boolean;
  in_most_viral: boolean;
  has_sound: boolean;
  tags: any[];
  ad_type: number;
  ad_url: string;
  edited: string;
  in_gallery: boolean;
  deletehash: string;
  name: string;
  link: string;
  ad_config: GetImageAdConfig;
}

export interface GetImageAdConfig {
  safeFlags: string[];
  highRiskFlags: any[];
  unsafeFlags: any[];
  wallUnsafeFlags: any[];
  showsAds: boolean;
  showAdLevel: number;
  safe_flags: string[];
  high_risk_flags: any[];
  unsafe_flags: any[];
  wall_unsafe_flags: any[];
  show_ads: boolean;
  show_ad_level: number;
  nsfw_score: number;
}

export type PostImageResponse = ImgurApiResponse<PostImageData>;

export interface PostImageData {
  id: string;
  deletehash: string;
  account_id: number;
  account_url: string;
  ad_type: any;
  ad_url: any;
  title: string;
  description: string;
  name: string;
  type: string;
  width: number;
  height: number;
  size: number;
  views: number;
  section: any;
  vote: any;
  bandwidth: number;
  animated: boolean;
  favorite: boolean;
  in_gallery: boolean;
  in_most_viral: boolean;
  has_sound: boolean;
  is_ad: boolean;
  nsfw: any;
  link: string;
  tags: any[];
  datetime: number;
  mp4: string;
  hls: string;
}
