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

/**
 * 1. Outlined: material-icons-outlined
 * 2. Filled: material-icons
 */
export enum IconGoogleType {
  Outlined = 'material-icons-outlined',
  Filled = 'material-icons',
}

export interface TagTypeOption {
  text: string;
  type: TagType;
}

export interface FormImage {
  url: string;
  [key: string]: any;
}
