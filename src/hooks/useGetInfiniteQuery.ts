import {QueryKey, useInfiniteQuery} from '@tanstack/react-query';
import {useMemo} from 'react';
import axiosInstance from '../config/axiosInstance';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface useGetQueryType<T> {
  queryKey: QueryKey;
  endPoint?: string;
  options?: any;
}

const useGetInfiniteQuery = <T>({
  queryKey,
  endPoint,
  options,
}: useGetQueryType<T>) => {
  const {data, ...rest} = useInfiniteQuery({
    initialPageParam: 1,
    queryKey,
    queryFn: async ({pageParam = 1}) => {
      const response = await axiosInstance.get(
        `${endPoint}&page=${pageParam}&per_page=10`,
      );

      return response?.data;
    },

    getNextPageParam: (lastPage, pages) => {
      return lastPage?.incomplete_results ? undefined : pages.length + 1;
    },
    ...options,
  });

  const allData = useMemo(() => {
    const newData: T[] = [];
    data?.pages.map((page: any) => newData.push(...page?.items));
    return newData;
  }, [data]);

  return {
    data: allData,
    ...rest,
  };
};
export default useGetInfiniteQuery;
