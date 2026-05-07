import {
  Character,
  Bowman,
  Swordsman,
  Magician,
  Daemon,
  Undead,
  Zombie,
} from "../app";

test("проверка на создание класса Bowman", () => {
  expect(new Bowman ("Володя")).toEqual({
    name: "Володя",
    type: "Bowman",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test("проверка на создание класса Swordsman", () => {
  expect(new Swordsman("Володя")).toEqual({
    name: "Володя",
    type: "Swordsman",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test("проверка на создание класса Magician", () => {
  expect(new Magician("Володя")).toEqual({
    name: "Володя",
    type: "Magician",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test("проверка на создание класса Daemon", () => {
  expect(new Daemon("Володя")).toEqual({
    name: "Володя",
    type: "Daemon",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test("проверка на создание класса Undead", () => {
  expect(new Undead("Володя")).toEqual({
    name: "Володя",
    type: "Undead",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test("проверка на создание класса Zombie", () => {
  expect(new Zombie("Володя")).toEqual({
    name: "Володя",
    type: "Zombie",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});


test('ошибка если имя короче 2 символов', () => {
  expect(() => new Character('А', 'Bowerman')).toThrow('Невалидное значение имени');
});

test('ошибка если имя длиннее 10 символов', () => {
  expect(() => new Character('ОченьДлинноеИмя', 'Bowerman')).toThrow('Невалидное значение имени');
});

test('ошибка если имя не строка', () => {
  expect(() => new Character(123, 'Bowerman')).toThrow('Невалидное значение имени');
});

test('ошибка если невалидный тип', () => {
  expect(() => new Character('Володя', 'Неизвестный')).toThrow('Несуществующий тип персонажа');
});