import { Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import { FormField } from '@/components/FormField';
import { TEXTS } from '@/constants';
import type { IForm, Sex } from '@/types';

const OPTIONS: { name: string; value: Sex }[] = [
  { name: 'Мужской', value: 'male' },
  { name: 'Женский', value: 'female' },
];

export const SexField = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IForm>();
  const fieldError = errors.sex;

  return (
    <FormField label={TEXTS.sexFieldLabel} required errorMessage={fieldError?.message}>
      <Form.Select {...register('sex', { required: TEXTS.requiredErrorMessage })} isInvalid={!!fieldError}>
        {OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </Form.Select>
    </FormField>
  );
};
