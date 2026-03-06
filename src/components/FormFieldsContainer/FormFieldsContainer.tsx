import type { ReactNode } from 'react';
import { Card, Stack } from 'react-bootstrap';

interface Props {
  children: ReactNode;
  buttons?: ReactNode;
}

export const FormFieldsContainer = ({ children, buttons }: Props) => {
  return (
    <Card>
      <Card.Body>
        <Stack gap={4}>{children}</Stack>
        {buttons && (
          <Stack direction='horizontal' gap={2} className='mt-3'>
            {buttons}
          </Stack>
        )}
      </Card.Body>
    </Card>
  );
};
