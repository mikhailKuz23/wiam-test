import { Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import { FormField } from '@/components/FormField';
import { MAX_TERM, MIN_TERM, TEXTS } from '@/constants';
import type { IForm } from '@/types';
import { RangeBarSubtitle } from '../shared/RangeBarSubtitle';

export const TermField = () => {
  const { register, watch } = useFormContext<IForm>();
  const currentTerm = watch('term');

  return (
    <FormField label={TEXTS.loanTermFieldLabel} required>
      <RangeBarSubtitle maxValue={TEXTS.maxTerm} minValue={TEXTS.minTerm} />
      <Form.Range min={MIN_TERM} max={MAX_TERM} step={1} {...register('term', { valueAsNumber: true })} />
      <Form.Text>{TEXTS.selectedTerm(currentTerm)}</Form.Text>
    </FormField>
  );
};
