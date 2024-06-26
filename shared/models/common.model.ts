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

/**
 * 1. Add: 新增
 * 2. Edit: 編輯
 */
export enum FormType {
  Add = 'add',
  Edit = 'edit',
}

export interface TagTypeOption {
  text: string;
  type: TagType;
}

export interface FormImage {
  url: string;
  [key: string]: any;
}
