import type { FormImage, TagTypeOption } from '../common.model';

/**
 * frontend enum
 */

/**
 * 1. On: 已上架
 * 2. Ing: 上架中
 * 3. Off: 已下架
 */
export enum FrontEndServiceItemStatusType {
  On = 'ON',
  Ing = 'ING',
  Off = 'OFF',
}

/**
 * frontend interface
 */
export interface FrontEndServiceItem {
  id: string;
  name: string;
  status: FrontEndServiceItemStatusType;
  tag: TagTypeOption;
}

export interface FrontEndServiceForm {
  title: string | null;
  content: string | null;
  images: FormImage[];
  sort: number | null;
}

/**
 * backend
 */

/**
 * request
 */

/**
 * response
 */
