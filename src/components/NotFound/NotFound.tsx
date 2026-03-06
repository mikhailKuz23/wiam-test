import { useCallback } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ROUTES, TEXTS } from '@/constants';

export const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHomePage = useCallback(() => {
    navigate(ROUTES.person);
  }, [navigate]);

  return (
    <Alert variant='warning' className='py-5 px-4'>
      <Alert.Heading>{TEXTS.pageNotFound}</Alert.Heading>
      <hr />
      <div className='d-flex justify-content-center'>
        <Button size='lg' onClick={handleGoHomePage}>
          {TEXTS.goHome}
        </Button>
      </div>
    </Alert>
  );
};
