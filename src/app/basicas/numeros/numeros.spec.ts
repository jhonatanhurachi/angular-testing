import { incrementar } from "./numeros";

describe('incrementar', () => {
  it('should return 100 if the input is greater than 100', () => {
    expect(incrementar(101)).toEqual(100);
  });

  it('should return the input plus one if the input is less than or equal to 100', () => {
    expect(incrementar(50)).toEqual(51);
    expect(incrementar(100)).toEqual(101);
  });
});
