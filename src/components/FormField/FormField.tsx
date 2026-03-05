import type { ReactNode } from 'react';
import { Form } from 'react-bootstrap';

interface Props {
  label: string;
  children: ReactNode;
  required?: boolean;
  errorMessage?: string;
}
export const FormField = ({ children, label, errorMessage, required }: Props) => {
  return (
    <Form.Group>
      <Form.Label>
        {label} {required && <span className='text-danger'>*</span>}
      </Form.Label>
      {children}
      <Form.Control.Feedback type='invalid'>{errorMessage}</Form.Control.Feedback>
    </Form.Group>
  );
};
