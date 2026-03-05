import { useCallback, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form'; // стандарт для работы с формами, гибкое api
import { Outlet, useNavigate } from 'react-router-dom';
import { FORM_INIT_VALUES, ROUTES } from '@/constants';
import type { IForm } from '@/types';

export const MultipageFormProvider = () => {
  const navigate = useNavigate();
  const [modalState, setModalState] = useState<{ isOpen: boolean; data?: IForm }>({ isOpen: false, data: undefined });
  const formApi = useForm<IForm>({
    mode: 'onBlur',
    defaultValues: FORM_INIT_VALUES,
  });

  const handleCloseModal = useCallback(() => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const handleSubmint = formApi.handleSubmit(async (data) => {
    try {
      await fetch(`https://dummyjson.com/products/add`, {
        method: 'POST',
        body: JSON.stringify({ title: `${data.name} ${data.surname}` }),
      });

      setModalState({ isOpen: true, data: data });
      formApi.reset();
      navigate(ROUTES.person);
    } catch (e) {
      /**
       * @TODO Добавить отображение нотификации при ошибкe выполнения запроса
       */
      console.error('error', e);
    }
  });

  return (
    <FormProvider {...formApi}>
      <form onSubmit={handleSubmint}>
        <Outlet />
      </form>
      <Modal show={modalState.isOpen} onHide={handleCloseModal}>
        {modalState.data && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>
                Поздравляем, {modalState.data.surname} {modalState.data.name}!
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Вам одобрена сумма в размере {modalState.data.amount}$ на {modalState.data.term} дней
            </Modal.Body>
          </>
        )}
      </Modal>
    </FormProvider>
  );
};
