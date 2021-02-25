/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const API = {
  getEmployees: function () {
    return axios.get(
      "https://randomuser.me/api/?results=20&exc=login,registered"
    );
  },
  // getNumberofUsers: function(numberOfUsers) {
};

export default API;
//   return axios.get("https://randomuser.me/api/?results=" + numberOfUsers);
// },

// "https://randomuser.me/api/?results=50"
