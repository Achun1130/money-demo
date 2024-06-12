/**
 * 1. Success: success
 * 2. Danger: danger
 * 3. Info: info
 */
export enum TagType {
  Success = 'success',
  Danger = 'danger',
  Info = 'info',
}

export interface TagTypeOption {
  text: string;
  type: TagType;
}

export interface FormImage {
  url: string;
  [key: string]: any;
}
