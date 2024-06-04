import { ApiPathApi } from '../constants/api/api-api.const';
import type {
  DeleteObjectResponse,
  GetObjectResponse,
} from '../models/api/api.model';

interface DataFormatMap {
  [ApiPathApi.GetListOfAllObjects]: GetObjectResponse[];
  [ApiPathApi.GetObject]: GetObjectResponse;
  [ApiPathApi.PostObject]: GetObjectResponse;
  [ApiPathApi.PatchObject]: GetObjectResponse;
  [ApiPathApi.DeleteObject]: DeleteObjectResponse;
}

export const API_MOCK: DataFormatMap = {
  [ApiPathApi.GetListOfAllObjects]: [
    {
      id: '1',
      name: 'This object id is 1',
      data: null,
    },
  ],
  [ApiPathApi.GetObject]: {
    id: '1',
    name: 'This object id is 1',
    data: null,
  },
  [ApiPathApi.PostObject]: {
    id: '1',
    name: 'This object id is 1',
    data: null,
  },
  [ApiPathApi.PatchObject]: {
    id: '1',
    name: 'This object id is new 1',
    data: null,
  },
  [ApiPathApi.DeleteObject]: {
    message: 'Object with id = 1, has been deleted.',
  },
};
