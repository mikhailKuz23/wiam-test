import { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import { FormField } from '@/components/FormField';
import { TEXTS } from '@/constants';
import { useOptionsList } from '@/providers/OptionsListProvider';
import type { IForm } from '@/types';

export const WorkplaceField = () => {
  const { options, fetchOptions } = useOptionsList();
  const {
    register,
    formState: { errors },
  } = useFormContext<IForm>();
  const fieldError = errors.workplace;

  useEffect(() => {
    void fetchOptions();
  }, [fetchOptions]);

  return (
    <FormField label={TEXTS.workplaceFieldLabel} required errorMessage={fieldError?.message}>
      <Form.Select
        {...register('workplace', { required: TEXTS.requiredErrorMessage })}
        isInvalid={!!fieldError}
        defaultValue=''
      >
        <option value='' disabled hidden />
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Form.Select>
    </FormField>
  );
};
