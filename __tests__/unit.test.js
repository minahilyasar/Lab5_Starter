// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('valid phone number 1', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('valid phone number 2', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('invalid phone number 1', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});
test('invalid phone number 2', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

test('valid email 1', () => {
  expect(isEmail('test@example.com')).toBe(true);
});
test('valid email 2', () => {
  expect(isEmail('user@domain.com')).toBe(true);
});
test('invalid email 1', () => {
  expect(isEmail('test@@example.com')).toBe(false);
});
test('invalid email 2', () => {
  expect(isEmail('user@.com')).toBe(false);
});

test('valid password 1', () => {
  expect(isStrongPassword('abc123')).toBe(true);
});
test('valid password 2', () => {
  expect(isStrongPassword('Good_pass1')).toBe(true);
});
test('invalid password 1', () => {
  expect(isStrongPassword('1bad')).toBe(false);
});
test('invalid password 2', () => {
  expect(isStrongPassword('sh')).toBe(false);
});

test('valid date 1', () => {
  expect(isDate('01/01/2023')).toBe(true);
});
test('valid date 2', () => {
  expect(isDate('12/31/1999')).toBe(true);
});
test('invalid date 1', () => {
  expect(isDate('2023-01-01')).toBe(false);
});
test('invalid date 2', () => {
  expect(isDate('2000/12/01')).toBe(false);
});

test('valid hex 1', () => {
  expect(isHexColor('#fff')).toBe(true);
});
test('valid hex 2', () => {
  expect(isHexColor('#123ABC')).toBe(true);
});
test('invalid hex 1', () => {
  expect(isHexColor('#12')).toBe(false);
});
test('invalid hex 2', () => {
  expect(isHexColor('GHIJKL')).toBe(false);
});
