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

    const output = sorting.sortByName(input)

    expect(output).toEqual(expected);
  });

  test("Without params throws expection", () => {
    expect(() => sorting.sortByName()).toThrow(TypeError)
  })
});

it("Books names should be sorted in descending order", () => {
  const input = [
    "Гарри Поттер",
    "Властелин Колец",
    "Волшебник изумрудного города",
  ];

  const expected = [
    "Гарри Поттер",
    "Волшебник изумрудного города",
    "Властелин Колец",
  ];

  const output = sorting.sortByName(input, "desc");

  expect(output).toEqual(expected);
});

it("Empty array should return empty array", () => {
  const input = [];
  const output = sorting.sortByName(input);

  expect(output).toEqual([]);
});

it("Non-array input should throw an exception", () => {
  expect(() => sorting.sortByName("invalid input")).toThrow(TypeError);
});

