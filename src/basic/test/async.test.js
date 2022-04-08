const fetchProduct = require("../async.js");

describe("Async", () => {
  it("async-done", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
      done();
    });
  });
  // done 방식보다는 return 하는 방식이 코드가 더 깔끔하고 return 방식이 테스트 평가시간이 더 짧음
  it("async-return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
    });
  });

  it("async-await", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "Milk", price: 200 });
  });

  it("async-resolves", () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "Milk",
      price: 200,
    });
  });
  it("async-reject", () => {
    return expect(fetchProduct("error")).rejects.toBe("network error");
  });
});
