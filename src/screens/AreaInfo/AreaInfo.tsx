import { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormFieldsContainer } from '@/components/FormFieldsContainer';
import { ROUTES, TEXTS } from '@/constants';
import { useFirstStepComplete } from '@/hooks/useFirstStepComplete';
import type { IForm } from '@/types';
import { AddressField } from './AddressField';
import { WorkplaceField } from './WorkplaceField';

export const AreaInfo = () => {
  const navigate = useNavigate();
  const { trigger } = useFormContext<IForm>();

  const handleGoBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const handleGoNextStep = useCallback(async () => {
    const isValid = await trigger(['address', 'workplace']);

    if (isValid) {
      navigate(ROUTES.loan);
    }
  }, [trigger, navigate]);

  useFirstStepComplete();

  return (
    <FormFieldsContainer
      buttons={
        <>
          <Button onClick={handleGoBack}>{TEXTS.goBack}</Button>
          <Button onClick={handleGoNextStep}>{TEXTS.goNext}</Button>
        </>
      }
    >
      <WorkplaceField />
      <AddressField />
    </FormFieldsContainer>
  );
};
