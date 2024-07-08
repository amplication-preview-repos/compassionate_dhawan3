import { GranitType as TGranitType } from "../api/granitType/GranitType";

export const GRANITTYPE_TITLE_FIELD = "id";

export const GranitTypeTitle = (record: TGranitType): string => {
  return record.id?.toString() || String(record.id);
};
