import emoji from "./index";

test("returns the 100 emoji", () => {
  expect(emoji()).toBe("💯");
});
