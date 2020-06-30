let getData = () => {
  // 简单请求
  // axios({
  //   method: "get",
  //   url: "http://localhost:3000",
  // });

  // no keep-alive
  axios({
    method: "get",
    url: "http://localhost:3000/close",
  });

  // 非简单请求
  // axios({
  //   method: "get",
  //   url: "http://localhost:3000",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: "fake-user-token",
  //   },
  // });

  // axios({
  //   method: "post",
  //   url: "http://localhost:3000",
  //   data: { bar: "foo" },
  //   headers: {
  //     Connection: "close",
  //   },
  // });

  // axios({
  //   method: "put",
  //   url: "http://localhost:3000",
  //   data: { bar: "foo" },
  //   headers: {
  //     Connection: "close",
  //   },
  // });

  // axios({
  //   method: "delete",
  //   url: "http://localhost:3000",
  //   headers: {
  //     Connection: "close",
  //   },
  // });
};

getData();
