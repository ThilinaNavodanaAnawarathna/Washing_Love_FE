
import Router from "../router";

export const authHeader = () => {

  return {
    "Content-Type": "application/json",
    "authorization": "Bearer " + localStorage.getItem("user-token")
  };
};

export const handleResponseWithLoginCheck = (promise) => {
  return promise.then(data => {
    return data;
  }).catch((error) => {
    const status = error?.response?.status;

    if (status === 401 || status === 403) {
      Store.dispatch("clearUser").then(() => {
        Router.push("/login").catch((error) => {
          console.log(error)
        });
      });
    }
    return Promise.reject(error)
  });
};