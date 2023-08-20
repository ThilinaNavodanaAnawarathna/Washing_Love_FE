import axios from "axios";
import { authHeader, handleResponseWithLoginCheck } from "@/service/BaseService";
import { BASE_API_URL } from "@/common/Constants";

const API_URL_MAIN = BASE_API_URL + "/api/vehicle";

class VehicleService {

  addVehicle(resultObj) {
    const req = axios.post(API_URL_MAIN, resultObj, { headers: authHeader() });
    return handleResponseWithLoginCheck(req);
  }

  getMyVehicles(id) {
    const url = API_URL_MAIN + "/user";
    const req = axios.get(url, { headers: authHeader(),params:{"userId":id} });
    return handleResponseWithLoginCheck(req);
  }

  deleteVehicle(id) {
    const url = API_URL_MAIN ;
    const req = axios.delete(url, { headers: authHeader(),params:{"vehicleId":id} });
    return handleResponseWithLoginCheck(req);
  }

  findVehicleById(id) {
    const url = API_URL_MAIN +"/vehicle";
    const req = axios.get(url, { headers: authHeader(),params:{"vehicleId":id} });
    return handleResponseWithLoginCheck(req);
  }
  updateVehicle(resultObj) {
    const url = API_URL_MAIN ;
    const req = axios.patch(url, resultObj,{ headers: authHeader() });
    return handleResponseWithLoginCheck(req);
  }
}

export default new VehicleService();