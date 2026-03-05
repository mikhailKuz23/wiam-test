import { Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import { FormField } from '@/components/FormField';
import { TEXTS } from '@/constants';
import type { IForm } from '@/types';

export const SurnameField = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IForm>();
  const fieldError = errors.surname;

  return (
    <FormField label={TEXTS.surnameFieldLabel} required errorMessage={fieldError?.message}>
      <Form.Control
        {...register('surname', { required: TEXTS.requiredErrorMessage })}
        isInvalid={!!fieldError}
        type='text'
        placeholder={TEXTS.surnameFieldPlaceholder}
      />
    </FormField>
  );
};
