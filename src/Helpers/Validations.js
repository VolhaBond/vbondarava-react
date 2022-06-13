//Username должен быть только email (пример: dawdavfa@qwe.ru и т.д.), поле обязательно
//Password минимальная длинна 8 символов, должен включать хоть 1 цифру и 1 букву, поле обязательно
const required = value => value ? undefined : 'Required field.';
const minLength = value => value.length >= 8 ? undefined : 'Min length is 8.';
//only lower case:
const emailPattern = value => value.match(/([a-z][0-9])*@[a-z]+\.[a-z]+/) ? undefined : 'Incorrect email format.';
const passwordPattern = value => value.search(/[0-9]+/) > -1 && value.search(/[a-z]+/i) > -1 ? undefined : 'Should contain at least 1 letter and 1 number';

const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined);

const validations = {
    required,
    minLength,
    emailPattern,
    passwordPattern,
    composeValidators
}

export default validations;
