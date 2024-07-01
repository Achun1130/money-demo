/**
 * frontend interface
 */
export interface FrontEndLoginForm {
  username: string | null;
  password: string | null;
  staySignedIn: boolean;
}

export interface FrontEndRegisterForm {
  username: string | null;
  password: string | null;
  checkPassword: string | null;
}

export interface FrontEndForgetForm {
  username: string | null;
}

export interface FrontEndPasswordResetForm {
  password: string | null;
  checkPassword: string | null;
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
