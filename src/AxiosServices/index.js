import axios from "axios";
class AxiosServices {
  constructor() {
    let instance = axios.create();
    instance.interceptors.response.use(this.getSuccess, this.getErr);
    this.instance = instance;
  }
  getErr(err) {
    return Promise.reject(err);
  }
  getSuccess(response) {
    return response;
  }
  get(url) {
    return this.instance.get(url);
  }
}
export default new AxiosServices();
