import { usuarioIngresado } from './booleanos';

describe('usuarioIngresado', () => {
  it('should return true', () => {
    const result = usuarioIngresado();
    expect(result).toBeTrue();
    expect(result).toBeTruthy();
    expect(result).not.toBeFalsy();
  });
});
