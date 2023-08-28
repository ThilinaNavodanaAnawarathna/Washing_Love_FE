import axios from "axios";
import { authHeader, handleResponseWithLoginCheck } from "@/service/BaseService";
import { BASE_API_URL } from "@/common/Constants";

const API_URL_MAIN = BASE_API_URL + "/api/booking";

class BookingService {

  addBooking(resultObj) {
    const req = axios.post(API_URL_MAIN, resultObj, { headers: authHeader() });
    return handleResponseWithLoginCheck(req);
  }

  checkAvailability(resultObj) {
    const url = API_URL_MAIN + "/availability";
    const req = axios.post(url, resultObj, { headers: authHeader() });
    return handleResponseWithLoginCheck(req);
  }
  getMyBookings(id) {
    const url = API_URL_MAIN + "/user";
    const req = axios.get(url, { headers: authHeader(),params:{"userId":id} });
    return handleResponseWithLoginCheck(req);
  }

  getAllBookings() {
    const url = API_URL_MAIN + "/all";
    const req = axios.get(url, { headers: authHeader() });
    return handleResponseWithLoginCheck(req);
  }

  deleteBookings(id) {
    const url = API_URL_MAIN ;
    const req = axios.delete(url, { headers: authHeader(),params:{"bookingId":id} });
    return handleResponseWithLoginCheck(req);
  }


}

export default new BookingService();