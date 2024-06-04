export const ApiPathApi = {
  GetListOfAllObjects: '@GET/objects',
  GetObject: '@GET/objects/{object_id}',
  PostObject: '@POST/objects',
  PatchObject: '@PATCH/objects/{object_id}',
  DeleteObject: '@DELETE/objects/{object_id}',
} as const;
