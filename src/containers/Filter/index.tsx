import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  getFiltersSuccess,
  hasError,
  startLoading,
} from "../../features/filter";
import { getMetadata } from "../../utils/services";
import Sorting from "./Sorting";
import Brands from "./Brands";
import Tags from "./Tags";
import { FilterState } from "../../@types/filter";
import Loading from "../../components/Loading";

const FilterContainer = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(
    (state: { filter: FilterState }) => state.filter
  );

  useEffect(() => {
    (async function init() {
      dispatch(startLoading());
      const { error, data } = await getMetadata();
      if (error) {
        dispatch(hasError(data));
      } else {
        dispatch(getFiltersSuccess(data));
      }
    })();
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Sorting />
      <Brands />
      <Tags />
    </>
  );
};

export default FilterContainer;
