import { Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import { FormField } from '@/components/FormField';
import { TEXTS } from '@/constants';
import type { IForm } from '@/types';

export const NameField = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IForm>();
  const fieldError = errors.name;

  return (
    <FormField label={TEXTS.nameFieldLabel} required errorMessage={fieldError?.message}>
      <Form.Control
        {...register('name', { required: TEXTS.requiredErrorMessage })}
        isInvalid={!!fieldError}
        type='text'
        placeholder={TEXTS.nameFieldPlaceholder}
      />
    </FormField>
  );
};
