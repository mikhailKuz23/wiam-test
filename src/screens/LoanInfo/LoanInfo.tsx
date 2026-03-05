import { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormFieldsContainer } from '@/components/FormFieldsContainer';
import { TEXTS } from '@/constants';
import { useFirstStepComplete } from '@/hooks/useFirstStepComplete';
import type { IForm } from '@/types';
import { AmountField } from './AmountField';
import { TermField } from './TermField';

export const LoanInfo = () => {
  const navigate = useNavigate();
  const {
    formState: { isSubmitting },
  } = useFormContext<IForm>();

  const handleGoBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  useFirstStepComplete();

  return (
    <FormFieldsContainer
      buttons={
        <>
          <Button onClick={handleGoBack}>{TEXTS.goBack}</Button>
          <Button type='submit' disabled={isSubmitting}>
            {TEXTS.submitApplication}
          </Button>
        </>
      }
    >
      <AmountField />
      <TermField />
    </FormFieldsContainer>
  );
};
