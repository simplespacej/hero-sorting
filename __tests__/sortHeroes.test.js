// __tests__/sortHeroes.test.js
import { sortHeroesByHealth } from '../sortHeroes';

describe('sortHeroesByHealth', () => {
  it('should sort heroes by health in descending order', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const sortedHeroes = sortHeroesByHealth(heroes);

    expect(sortedHeroes).toEqual([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ]);
  });

  it('should return an empty array if no heroes are provided', () => {
    const heroes = [];
    const sortedHeroes = sortHeroesByHealth(heroes);
    expect(sortedHeroes).toEqual([]);
  });

  it('should handle a single hero', () => {
    const heroes = [{ name: 'маг', health: 100 }];
    const sortedHeroes = sortHeroesByHealth(heroes);
    expect(sortedHeroes).toEqual([{ name: 'маг', health: 100 }]);
  });

  it('should not use toBe for object comparison', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const sortedHeroes = sortHeroesByHealth(heroes);
    expect(sortedHeroes).not.toBe([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ]);
  });
});
