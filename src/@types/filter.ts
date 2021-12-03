export type MetadataType = {
  name: string;
  count: number;
};

export type SortType = {
  name: string;
  value: string;
};

export type FilterState = {
  isLoading: boolean;
  error: boolean;
  brands: MetadataType[];
  tags: MetadataType[];
  itemTypes: MetadataType[];
  sorts: SortType[];
  selectedSort: string;
  selectedBrands: MetadataType[];
  selectedTags: MetadataType[];
  selectedItemType: string;
  currentPage: number;
};
