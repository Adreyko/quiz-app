export type StorageList<T> = {
  [key: string]: T;
};

export const setStorageData = <T>(data: StorageList<T>) => {
  return Object.entries(data).forEach(([key, value]) => {
    localStorage.setItem(key, JSON.stringify(value));
  });
};
