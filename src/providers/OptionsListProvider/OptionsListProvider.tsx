import { createContext, type ReactNode, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

interface OptionsListProvider {
  options: string[];
  fetchOptions: () => Promise<void>;
  isLoading: boolean;
}

const OptionsContext = createContext<OptionsListProvider | null>(null);

export const OptionsProvider = ({ children }: { children: ReactNode }) => {
  const [options, setOptions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  /**
   * Реф для предотвращения двойной загрузки, если два компонента
   * одновременно вызовут fetchOptions. В конетксте текущей задачи наверное
   * перегнул c оптимизацией)
   */
  const fetchRef = useRef(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchOptions = useCallback(async () => {
    if (options.length > 0 || fetchRef.current) return;

    try {
      const controller = new AbortController();

      abortControllerRef.current = controller;
      fetchRef.current = true;
      setIsLoading(true);
      /**
       * @TODO Hаписать функцию для работы с api apiCall<T>()
       */
      const response = await fetch('https://dummyjson.com/products/category-list', {
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`Ошибка сервера: ${response.status}`);
      }

      const data = await response.json();
      setOptions(data);
    } catch (err) {
      const error = err as Error;
      if (error.name === 'AbortError') return;
      /**
       * @TODO Добавить отображение нотификации при ошибкe загрузки
       */
      console.error('error', err);
    } finally {
      setIsLoading(false);
      fetchRef.current = false;
    }
  }, [options.length]);

  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort();
    };
  }, []);

  const value: OptionsListProvider = useMemo(
    () => ({
      options: options,
      fetchOptions: fetchOptions,
      isLoading: isLoading,
    }),
    [options, fetchOptions, isLoading]
  );

  return <OptionsContext.Provider value={value}>{children}</OptionsContext.Provider>;
};

export const useOptionsList = () => {
  const context = useContext(OptionsContext);
  if (!context) {
    throw new Error('Нельзя использовать хук вне контекста OptionsContext');
  }
  return context;
};
