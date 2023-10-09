import { Jugador } from './clases';

describe('Jugador', () => {
  let jugador: Jugador;

  beforeEach(() => {
    jugador = new Jugador();
  });

  it('should create a jugador with 100 hp', () => {
    expect(jugador.hp).toBe(100);
  });

  it('should reduce hp by 20 if recibeDanio is called with 20', () => {
    const hpAntes = jugador.hp;
    jugador.recibeDanio(20);
    expect(jugador.hp).toBe(hpAntes - 20);
  });

  it('should set hp to 0 if recibeDanio is called with more damage than hp', () => {
    jugador.recibeDanio(150);
    expect(jugador.hp).toBe(0);
  });
});
