// import { takeEvery, all, call } from 'redux-saga/effects'
import { put, takeEvery, takeLatest, all, call } from 'redux-saga/effects'
import { getPosts } from './reducers';
// import fetchFailed from './fetch-failed';
// import setRecords from './set-records';

export const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* helloSaga() {
  console.log('Hello Sagas!')
}

export function* incrementAsync() {
  yield call (delay, 1000)
  yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* getPost() {
    yield takeLatest('GET_POST', getPostAsync)
}

export function* getPostAsync() {
    try{
        fetch(`https://jsonplaceholder.typicode.com/posts/1`)
            .then(response => response.json())
            .then(json =>
                console.log(json),
                yield json)
    }
    catch (e) {
        // yield put(fetchFailed(e));
        // return;
        console.log(e);
    }
    yield put(response);
    console.log(response);
    }

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync(),
    getPost(),
  ])
}