
const Player = require('../lib/Player.js');
const Potion = require('../lib/Potion.js');

jest.mock('../lib/Potion.js');

console.log(new Potion());

// const { JestHook } = require('jest-watcher'); NOT SURE HOW THIS CODE GOT IN HERE??
// const { default: test } = require('node:test');

// returns object that will check for the existence of name, health, strength, agaility and inventory
test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));

    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)])
    );
});

// returns an object with four specific properties: potions, health, strength and agility
test("gets player's stats as an object", () => {
    const player = new Player('Dave');

    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});

test('gets inventory from player or returns false', () => {
    const player = new Player('Dave');

    expect(player.getInventory()).toEqual(expect.any(Array));

    player.inventory = []; // simulates an empty array

    expect(player.getInventory()).toEqual(false);
});