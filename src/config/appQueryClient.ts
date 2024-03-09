import {QueryClient} from '@tanstack/react-query';
import {createAsyncStoragePersister} from '@tanstack/query-async-storage-persister';
import EncryptedStorage from 'react-native-encrypted-storage';

const appQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 5 * 60 * 1000,
      staleTime: 5 * 60 * 1000,
    },
  },
});
export const asyncStoragePersister = createAsyncStoragePersister({
  storage: EncryptedStorage,
});

export default appQueryClient;
