import { MemorialWhereInput } from "./MemorialWhereInput";
import { MemorialOrderByInput } from "./MemorialOrderByInput";

export type MemorialFindManyArgs = {
  where?: MemorialWhereInput;
  orderBy?: Array<MemorialOrderByInput>;
  skip?: number;
  take?: number;
};
