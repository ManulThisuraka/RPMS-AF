import axios from "axios";

export const signup = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post("http://localhost:5000/register", data);

  return response;
};

export const signin = async (data) => {
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };
  console.log("Auth Data", data);

  const response = await axios.post("http://localhost:5000/login", data);
  console.log("response Data", response);

  return response;
};
