import { Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import { FormField } from '@/components/FormField';
import { TEXTS } from '@/constants';
import type { IForm } from '@/types';

export const AddressField = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IForm>();
  const fieldError = errors.address;

  return (
    <FormField label={TEXTS.addressFieldLabel} required errorMessage={fieldError?.message}>
      <Form.Control
        {...register('address', { required: TEXTS.requiredErrorMessage })}
        isInvalid={!!fieldError}
        type='text'
        placeholder={TEXTS.addressFieldPlaceholder}
      />
    </FormField>
  );
};
