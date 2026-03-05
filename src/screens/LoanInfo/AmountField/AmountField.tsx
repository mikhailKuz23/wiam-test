import { Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import { FormField } from '@/components/FormField';
import { MAX_AMOUNT, MIN_AMOUNT, TEXTS } from '@/constants';
import type { IForm } from '@/types';
import { RangeBarSubtitle } from '../shared/RangeBarSubtitle';

export const AmountField = () => {
  const { register, watch } = useFormContext<IForm>();
  const currentAmount = watch('amount');

  return (
    <FormField label={TEXTS.amountFieldLabel} required>
      <RangeBarSubtitle maxValue={TEXTS.maxAmount} minValue={TEXTS.minAmount} />
      <Form.Range min={MIN_AMOUNT} max={MAX_AMOUNT} step={100} {...register('amount', { valueAsNumber: true })} />
      <Form.Text>{TEXTS.selectedAmount(currentAmount)}</Form.Text>
    </FormField>
  );
};
