import React, { useEffect, useState } from "react";

const useCustomHook = (url) => {
  const [data, Setdata] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => Setdata(data));
  }, []);

  return [data];
};

export default useCustomHook;
