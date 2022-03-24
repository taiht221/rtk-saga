import { all } from 'redux-saga/effects'

function* a() {
  console.log(1)
}

export default function* rootSaga() {
  console.log(2)
  yield all([a()])
}
