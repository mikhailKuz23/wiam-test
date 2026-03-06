import type { IForm } from './types';

export const ROUTES = {
  person: '/',
  area: '/area',
  loan: '/loan',
};

export const AMOUNT_RANGE = {
  min: 200,
  max: 1000,
};

export const TERM_RANGE = {
  min: 10,
  max: 30,
};

export const FORM_INIT_VALUES: IForm = {
  name: '',
  surname: '',
  sex: '',
  address: '',
  workplace: '',
  amount: AMOUNT_RANGE.min,
  term: TERM_RANGE.min,
  phone: '',
};

export const TEXTS = {
  requiredErrorMessage: 'Поле обязательно для заполнения',
  addressFieldPlaceholder: 'Введите адрес',
  addressFieldLabel: 'Адрес проживания',
  goNext: 'Далее',
  goBack: 'Назад',
  sexFieldLabel: 'Пол',
  sexFieldPlaceholderOption: 'Укажите пол',
  workplaceFieldLabel: 'Место работы',
  workplaceFieldPlaceholderOption: 'Укажите место работы',
  nameFieldLabel: 'Имя',
  nameFieldPlaceholder: 'Введите имя',
  surnameFieldLabel: 'Фамилия',
  surnameFieldPlaceholder: 'Введите фамилию',
  loanTermFieldLabel: 'Срок займа',
  maxTerm: `${TERM_RANGE.max} дн.`,
  minTerm: `${TERM_RANGE.min} дн.`,
  selectedTerm: (value: number) => `Выбранное количество дней: ${value}`,
  maxAmount: `${AMOUNT_RANGE.max}$`,
  minAmount: `${AMOUNT_RANGE.min}$`,
  selectedAmount: (value: number) => `Выбранная сумма: ${value}$`,
  amountFieldLabel: 'Сумма займа',
  submitApplication: 'Подать заявку',
  phoneFieldPlaceholder: '0XX XXX XXX',
  phoneFieldLabel: 'Телефон',
  phoneFieldValidationError: 'Введите полный номер телефона',
  goHome: 'Вернуться на главную',
  pageNotFound: 'Упс! Страница, которую вы ищете, не существует',
};
