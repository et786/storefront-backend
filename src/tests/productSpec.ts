import { Product, ProductStore } from "../models/product";

const store = new ProductStore();

describe("Index of products", () => {
  it("should have method index", () => {
    expect(store.index).toBeDefined();
  });

  it("method index should return an array of products", async () => {
    const result = await store.index();
    expect(result).toEqual([]);
  });
});

describe("Show products", () => {
  it("should have method show", () => {
    expect(store.show).toBeDefined();
  });

  it("should have method create", () => {
    expect(store.create).toBeDefined();
  });

  it("should have method delete", () => {
    expect(store.delete).toBeDefined();
  });
});

describe("Create product", () => {
  it("should have method create", () => {
    expect(store.create).toBeDefined();
  });
});

describe("Delete product", () => {
  it("should have method delete", () => {
    expect(store.delete).toBeDefined();
  });
});
