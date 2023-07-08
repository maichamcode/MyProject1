import instance from "./instance";

export const signup = (userData:any) => {
  return instance.post("/signup", userData);
};

export const signin = (userData:any) => {
  return instance.post("/signin", userData);
};
