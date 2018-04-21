import { delay } from 'redux-saga'
import { put, takeEvery, all, call } from 'redux-saga/effects'

// SAGA WORKER (does the leg work)
export function* incrementAsync() {
  yield call(delay, 1000)
  yield put({ type: 'INCREMENT' })
}

// Saga Watcher, listens for certain actions, and triggers appropriate worker
function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* decrementAsync() {
  yield call(delay, 1000)
  yield call(delay, 1000)
  yield put({ type: 'DECREMENT' })
}

function* watchDecrementAsync() {
  yield takeEvery('DECREMENT_ASYNC', decrementAsync)
}

export function* helloSaga() {
  console.log('Hello Sagas!');
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync(),
    watchDecrementAsync()
  ])
}
