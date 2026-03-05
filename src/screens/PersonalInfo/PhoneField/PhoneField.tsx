import { forwardRef } from 'react';
import { Form } from 'react-bootstrap';
import { Controller, useFormContext } from 'react-hook-form';
import { PatternFormat } from 'react-number-format'; // легкая библиотека для работы масками
import { FormField } from '@/components/FormField';
import { TEXTS } from '@/constants';
import type { IForm } from '@/types';

/**
 * Небольшой костыль чтобы не ругался typescript
 * при передаче пропа customInput в компонент PatternFormat
 */
const BootstrapInput = forwardRef<HTMLInputElement, any>((props, ref) => {
  return <Form.Control {...props} ref={ref} />;
});

export const PhoneField = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IForm>();
  const fieldError = errors.phone;

  return (
    <FormField label={TEXTS.phoneFieldLabel} required errorMessage={fieldError?.message}>
      <Controller
        name='phone'
        control={control}
        rules={{
          required: TEXTS.requiredErrorMessage,
          minLength: { value: 8, message: TEXTS.phoneFieldValidationError },
        }}
        render={({ field: { onChange, name, value, ref, onBlur } }) => (
          <PatternFormat
            customInput={BootstrapInput}
            placeholder={TEXTS.phoneFieldPlaceholder}
            format='0## ### ###'
            mask='_'
            type='tel'
            name={name}
            className={fieldError ? 'is-invalid' : ''}
            getInputRef={ref}
            onBlur={onBlur}
            value={value}
            onValueChange={(values) => onChange(values.value)}
          />
        )}
      />
    </FormField>
  );
};
