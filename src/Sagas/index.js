import { call, delay, fork, put, take, takeLatest } from "redux-saga/effects";
import * as types from "../Constants/index";
import { getDiscover, getProducts } from "../Apis/index";
import {
  fetch_api_products,
  fetch_api_products_succcess,
  fetch_api_products_err,
  fetch_api_discover_succsess,
  fetch_api_discover_err,
} from "../Redux/Actions/Actions";
let url_products_page =
  "https://my-json-server.typicode.com/nguyenhoang98/api/products?_limit=12&_page=1";
let url_discover =
  "https://my-json-server.typicode.com/nguyenhoang98/api/discover";
function* watchFetchApiProducts() {
  while (true) {
    const response = yield take(types.FETCH_API_PRODUCTS);
    const { query } = response.payload;
    console.log(query);
    const response_products = yield call(getProducts, url_products_page, query);
    if (response_products.status === 200) {
      yield put(fetch_api_products_succcess(response_products.data));
    } else {
      yield put(
        fetch_api_products_err("Lỗi Không Thể Gọi Api - Hoặc Do Mạng Có Vấn Đề")
      );
    }
  }
}
function* watchApiDiscover() {
  while (true) {
    yield take(types.FETCH_API_DISPCOVER);
    const response_discover = yield call(getDiscover, url_discover);
    if (response_discover.status === 200) {
      yield put(fetch_api_discover_succsess(response_discover.data));
    } else {
      yield put(fetch_api_discover_err("Lối Không Gọi Được Api"));
    }
  }
}

function* watchAPiChange(data) {
  const { index } = data.payload;
  url_products_page = `https://my-json-server.typicode.com/nguyenhoang98/api/products?_limit=12&_page=${index}`;
  watchFetchApiProducts();
}

function* onFilterProductsSaga(data) {
  yield delay(500);
  const { key } = data.payload;
  yield put(fetch_api_products({ q: key }));
}

function* rootSaga() {
  yield fork(watchFetchApiProducts);
  yield fork(watchApiDiscover);
  yield takeLatest(types.CHANGE_PAGE, watchAPiChange);
  yield takeLatest(types.FILTER_PRODUCTS, onFilterProductsSaga);
}
export default rootSaga;
