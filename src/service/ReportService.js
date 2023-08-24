import axios from "axios";
import { authHeader, handleResponseWithLoginCheck } from "@/service/BaseService";
import { BASE_API_URL } from "@/common/Constants";

const API_URL_MAIN = BASE_API_URL + "/api/report";

class VehicleService {
  getMyReports(id) {
    const url = API_URL_MAIN + "/user";
    const req = axios.get(url, { headers: authHeader(),params:{"userId":id} });
    return handleResponseWithLoginCheck(req);
  }
}
export default new VehicleService();