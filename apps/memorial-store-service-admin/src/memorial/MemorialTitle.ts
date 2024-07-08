import { Memorial as TMemorial } from "../api/memorial/Memorial";

export const MEMORIAL_TITLE_FIELD = "id";

export const MemorialTitle = (record: TMemorial): string => {
  return record.id?.toString() || String(record.id);
};
