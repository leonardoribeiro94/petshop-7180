import { Flunt } from 'src/utils/flunt';
import { Contract } from './Contract';
import { Customer } from '../models/customer.model';

export class CreateCustomerContract implements Contract {
    errors: any[];
    validate(model: Customer): boolean {
        const flunt = new Flunt();

        flunt.hasMinLen(model.name, 5, 'Nome Inválido');
        flunt.isEmail(model.email, 'E-mail inválido');
        flunt.isFixedLen(model.document, 11, 'Documento inválido');
        flunt.hasMinLen(model.password, 6, 'Senha inválida');

        this.errors = flunt.errors;
        return flunt.isValid();
    }
}