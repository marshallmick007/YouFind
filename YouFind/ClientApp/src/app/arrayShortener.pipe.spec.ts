import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ArrayShortenerPipe } from "./arrayShortener.pipe";

describe("ArrayShortenerPipe", () => {
  let pipe: ArrayShortenerPipe;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArrayShortenerPipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    pipe = new ArrayShortenerPipe();
  });

  it("should create", () => {
    expect(pipe).toBeTruthy();
  });

  it("should have a transform function", () => {
    expect(pipe.transform).toBeTruthy();
  });

  it("should return null if given null", () => {
    let res = pipe.transform(null);
    expect(res).toBeNull();
  });

  it("should return 1 if given 1", () => {
    let res = pipe.transform(1);
    expect(res).toBe(1);
  });

  it("should return 'test' if given 'test'", () => {
    let res = pipe.transform("test");
    expect(res).toBe("test");
  });

  it("should return '' if given []", () => {
    let res = pipe.transform([]);
    expect(res).toBe("");
  });

  it("should return 'test' if given ['test']", () => {
    let res = pipe.transform(["test"]);
    expect(res).toBe("test");
  });

  it("should return 'test, thing' if given ['test', 'thing']", () => {
    let res = pipe.transform(["test", "thing"]);
    expect(res).toBe("test, thing");
  });

  it("should return 'test, thing, another' if given ['test', 'thing', 'another']", () => {
    let res = pipe.transform(["test", "thing", "another"]);
    expect(res).toBe("test, thing, another");
  });

  it("should return 'test, thing, and 1 more' if given ['test', 'thing', 'another long item which will be too long']", () => {
    let res = pipe.transform([
      "test",
      "thing",
      "another long item which will be too long",
    ]);
    expect(res).toBe("test, thing, and 1 more");
  });

  it("should return 'this is a longer value for testing, and 1 more' if given a longer set of words", () => {
    let res = pipe.transform([
      "this is a longer value for testing",
      " another thing",
    ]);
    expect(res).toBe("this is a longer value for testing, and 1 more");
  });

  it("should return 'this is a longer value for testing, and 11 more' if given a longer set of words and longer array", () => {
    let res = pipe.transform([
      "this is a longer value for testing",
      " another thing",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
    ]);
    expect(res).toBe("this is a longer value for testing, and 11 more");
  });
});
