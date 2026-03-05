import type { IForm } from './types';

export const ROUTES = {
  person: '/',
  area: '/area',
  loan: '/loan',
};

export const MIN_AMOUNT = 200;
export const MAX_AMOUNT = 1000;
export const MIN_TERM = 10;
export const MAX_TERM = 30;

export const FORM_INIT_VALUES: IForm = {
  name: '',
  surname: '',
  sex: '',
  address: '',
  workplace: '',
  amount: MIN_AMOUNT,
  term: MIN_TERM,
  phone: '',
};

export const TEXTS = {
  requiredErrorMessage: 'Поле обязательно для заполнения',
  addressFieldPlaceholder: 'Введите адрес',
  addressFieldLabel: 'Адрес проживания',
  goNext: 'Далее',
  goBack: 'Назад',
  sexFieldLabel: 'Пол',
  workplaceFieldLabel: 'Место работы',
  nameFieldLabel: 'Имя',
  nameFieldPlaceholder: 'Введите имя',
  surnameFieldLabel: 'Фамилия',
  surnameFieldPlaceholder: 'Введите фамилию',
  loanTermFieldLabel: 'Срок займа',
  maxTerm: `${MAX_TERM} дн.`,
  minTerm: `${MIN_TERM} дн.`,
  selectedTerm: (value: number) => `Выбранное количество дней: ${value}`,
  maxAmount: `${MAX_AMOUNT}$`,
  minAmount: `${MIN_AMOUNT}$`,
  selectedAmount: (value: number) => `Выбранная сумма: ${value}$`,
  amountFieldLabel: 'Сумма займа',
  submitApplication: 'Подать заявку',
  phoneFieldPlaceholder: '0XX XXX XXX',
  phoneFieldLabel: 'Телефон',
  phoneFieldValidationError: 'Введите полный номер телефона',
};
