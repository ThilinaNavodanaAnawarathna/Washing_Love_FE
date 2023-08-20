export default class Booking {
  constructor(id, user, vehicle, date, startTime, bookingStatus,endTime) {
    this.id = id;
    this.user = user;
    this.vehicle = vehicle;
    this.date = date;
    this.startTime = startTime;
    this.endTime = endTime;
    this.bookingStatus = bookingStatus;
  }
}