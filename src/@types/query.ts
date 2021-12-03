import { MetadataType } from "./filter";

export type QueryParamsType = {
  currentPage: number;
  selectedBrands: MetadataType[];
  selectedTags: MetadataType[];
  selectedItemType: string;
  selectedSort: string;
};
