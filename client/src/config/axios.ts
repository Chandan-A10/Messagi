import axios from "axios";
export const axiosa = axios.create({
  baseURL: process.env.REACT_APP_AXIOS_URL,
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDRjMjAzZWI1NWQxNTNiOWU2OWY4YiIsImVtYWlsIjoiYWJjIiwiaWF0IjoxNjkxNjY0ODk5LCJleHAiOjE2OTE3NTEyOTl9.RMD-CzCQ4O4M21GMTDVPemN-c2wqBht53bG8dYBREEk`,
  },
});
