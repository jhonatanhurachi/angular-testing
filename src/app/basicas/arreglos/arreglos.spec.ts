import { obtenerRobots } from './arreglos';

describe('obtenerRobots', () => {
  it('should return an array with 4 robots', () => {
    const robots = obtenerRobots();
    expect(robots).toEqual(['MegaMan', 'Jarvis', 'Robocop', 'Ultron']);
    expect(robots.length).toBe(4);
    expect(robots.length).toBeGreaterThanOrEqual(3);
  });
  it('should contain Ultron and Robocop', () => {
    const robots = obtenerRobots();
    expect(robots).toContain('Ultron');
    expect(robots).toContain('Robocop');
  });
});
