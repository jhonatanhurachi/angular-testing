import { FormularioRegister } from './formulario';
import { FormBuilder } from '@angular/forms';

describe('FormularioRegister', () => {
  let formulario: FormularioRegister;

  beforeEach(() => {
    formulario = new FormularioRegister(new FormBuilder());
  });

  it('should create a form with email and password controls', () => {
    expect(formulario.form.contains('email')).toBeTrue();
    expect(formulario.form.contains('password')).toBeTrue();
  });

  it('should make the email control required', () => {
    const control = formulario.form.get('email');
    control!.setValue('');
    expect(control!.valid).toBeFalse();
  });

  it('should make the email control have a valid email format', () => {
    const control = formulario.form.get('email');
    control!.setValue('invalid-email');
    expect(control!.valid).toBeFalse();
  });

  it('should make the password control required', () => {
    const control = formulario.form.get('password');
    control!.setValue('');
    expect(control!.valid).toBeFalse();
  });
});
