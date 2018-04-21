import test from 'tape';
import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { incrementAsync, decrementAsync } from './sagas';

test('incrementAsync Saga test', (assert) => {
  const gen = incrementAsync();

  assert.deepEqual(
    gen.next().value,
    call(delay, 1000),
    'incrementAsync calls delay(1000)'
  )

  assert.deepEqual(
    gen.next().value,
    put({ type: 'INCREMENT' }),
    'incrementAsync dispatches an INCREMENT action'
  )

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    'increment saga is done after two iterations'
  )
  assert.end()
});


test('decrementAsync Saga test', (assert) => {
  const gen = decrementAsync();

  assert.deepEqual(
    gen.next(),
    { done: false, value: call(delay, 1000) },
    'decrementAsyncs first iteration calls delay(1000)'
  )

  assert.deepEqual(
    gen.next(),
    { done: false, value: call(delay, 1000) },
    'decrementAsyncs second iteration calls delay(1000)'
  )

  assert.deepEqual(
    gen.next(),
    { done: false, value: put({ type: 'DECREMENT' }) },
    'decrementAsyncs third iteration dispatches DECREMENT'
  )
  
  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    'decrementAsync is done after three iterations'
  )
  assert.end()
})
