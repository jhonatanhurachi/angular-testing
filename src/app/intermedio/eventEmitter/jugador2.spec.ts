import { Jugador } from './jugador2';

describe('Jugador', () => {
  let jugador: Jugador;

  beforeEach(() => {
    jugador = new Jugador();
  });

  it('should create', () => {
    expect(jugador).toBeTruthy();
  });

  it('should have 100 hp when created', () => {
    expect(jugador.hp).toBe(100);
  });

  it('should emit an event when recibeDanio is called', () => {
    let nuevoHp = 0;
    jugador.hpCambia.subscribe(hp => {
      nuevoHp = hp;
    });
    jugador.recibeDanio(50);
    expect(nuevoHp).toBe(50);
  });

  it('should set hp to 0 if danio is greater than or equal to hp', () => {
    jugador.recibeDanio(100);
    expect(jugador.hp).toBe(0);
  });

  it('should subtract danio from hp if danio is less than hp', () => {
    jugador.recibeDanio(50);
    expect(jugador.hp).toBe(50);
  });
});
