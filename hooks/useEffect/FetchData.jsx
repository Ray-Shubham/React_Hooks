import React, { useEffect } from "react";

const FetchData = () => {
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const api = await fetch("https://jsonplaceholder.typicode.com/users");
      const response = await api.json();
      console.log(response);
    };
    fetchDataFromAPI();
  }, []);

  return <div>FetchData</div>;
};

export default FetchData;
