import { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormFieldsContainer } from '@/components/FormFieldsContainer';
import { ROUTES, TEXTS } from '@/constants';
import type { IForm } from '@/types';
import { NameField } from './NameField';
import { PhoneField } from './PhoneField';
import { SexField } from './SexField';
import { SurnameField } from './SurnameField';

export const PersonalInfo = () => {
  const navigate = useNavigate();
  const { trigger } = useFormContext<IForm>();

  const handleGoNextStep = useCallback(async () => {
    const isValid = await trigger(['name', 'sex', 'surname', 'phone']);

    if (isValid) {
      navigate(ROUTES.area);
    }
  }, [trigger, navigate]);

  return (
    <FormFieldsContainer buttons={<Button onClick={handleGoNextStep}>{TEXTS.goNext}</Button>}>
      <PhoneField />
      <NameField />
      <SurnameField />
      <SexField />
    </FormFieldsContainer>
  );
};
