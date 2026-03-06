import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from '@/constants';
import { NotFound } from './components/NotFound';
import { MultipageFormProvider } from './providers/MultipageFormProvider';
import { OptionsProvider } from './providers/OptionsListProvider';
import { AreaInfo } from './screens/AreaInfo';
import { LoanInfo } from './screens/LoanInfo';
import { PersonalInfo } from './screens/PersonalInfo';

export const App = () => {
  return (
    <BrowserRouter>
      <OptionsProvider>
        <div className='layout'>
          <Routes>
            <Route element={<MultipageFormProvider />}>
              <Route path={ROUTES.person} element={<PersonalInfo />} />
              <Route path={ROUTES.area} element={<AreaInfo />} />
              <Route path={ROUTES.loan} element={<LoanInfo />} />
            </Route>

            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </OptionsProvider>
    </BrowserRouter>
  );
};
