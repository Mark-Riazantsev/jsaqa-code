const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];

    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];

    const output = sorting.sortByName(input);

    expect(output).toEqual(expected);
  });

  test("Without params throws expection", () => {
    expect(() => sorting.sortByName()).toThrow(TypeError);
  });

  it("Empty array should return empty array", () => {
    const input = [];
    const output = sorting.sortByName(input);

    expect(output).toEqual([]);
  });

  it("Non-array input should throw an exception", () => {
    expect(() => sorting.sortByName("invalid input")).toThrow(TypeError);
  });

  it("Should return the same array if all books are the same", () => {
    const input = [
      "Гарри Поттер",
      "Гарри Поттер",
      "Гарри Поттер",
    ];

    const expected = [
      "Гарри Поттер",
      "Гарри Поттер",
      "Гарри Поттер",
    ];

    const output = sorting.sortByName(input);

    expect(output).toEqual(expected);
});

});
