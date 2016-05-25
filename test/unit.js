import test from 'ava';
import browserEnv from '../dist';

test('Function should setup browser environment', t => {
  t.is(typeof window, 'undefined');
  t.is(typeof document, 'undefined');
  t.is(typeof navigator, 'undefined');
  t.is(typeof HTMLElement, 'undefined');
  browserEnv();
  t.not(typeof window, 'undefined');
  t.not(typeof document, 'undefined');
  t.not(typeof navigator, 'undefined');
  t.not(typeof HTMLElement, 'undefined');
});

test('Function should return window instance', t => {
  const returnValue = browserEnv();
  t.is(returnValue, window);
});
