import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants';
import type { IForm } from '@/types';

/**
 * Защита на случай, если пользователь перешел по прямой ссылке
 * на второй или третий шаг формы
 */
export const useFirstStepComplete = () => {
  const navigate = useNavigate();
  const { getValues } = useFormContext<IForm>();

  useEffect(() => {
    if (getValues().name) return;

    navigate(ROUTES.person);
  }, [navigate, getValues]);
};
