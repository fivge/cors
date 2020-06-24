let getData = () => {
  axios({
    method: "get",
    url: "http://localhost:3000",
    headers: {
      "Content-Type": "application/json",
      Authorization: "fake-user-token",
    },
  });

  axios({
    method: "post",
    url: "http://localhost:3000",
    data: { bar: "foo" },
  });

  axios({
    method: "delete",
    url: "http://localhost:3000",
  });
};

getData();
