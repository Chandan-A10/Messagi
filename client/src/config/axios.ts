import axios from "axios";
export const axiosa = axios.create({
  baseURL: process.env.REACT_APP_AXIOS_URL,
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZGIyY2IzMDBlMGM3M2IxMzMxNjk2MSIsImVtYWlsIjoiai5jb20iLCJpYXQiOjE2OTIwODU0MjcsImV4cCI6MTY5MjE3MTgyN30.shlBNoEIFwZYrVFO_vmiuKE6He-Xub0fUhs0SwCk13Y`,
  },
});
