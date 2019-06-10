export class Flunt {
    constructor(public errors: any[] = []) { }

    isRequired(value: any, message: any) {
        if (!value || value.length <= 0) {
            this.errors.push(message);
        }
    }

    hasMinLen = (value: { length: number; }, min: number, message: any) => {
        if (!value || value.length < min) {
            this.errors.push(message);
        }
    }

    hasMaxLen = (value: { length: number; }, max: number, message: any) => {
        if (!value || value.length > max) {
            this.errors.push(message);
        }
    }

    isFixedLen = (value: { length: any; }, len: any, message: any) => {
        if (value.length !== len) {
            this.errors.push(message);
        }
    }

    isEmail = (value: string, message: any) => {
        const reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
        if (!reg.test(value)) {
            this.errors.push(message);
        }
    }

    isNotNull = (value: { length: any; }, message: any) => {
        if (!value.length) {
            this.errors.push(message);
        }
    }

    isGreaterThan = (valuea: number, valueb: number, message: any) => {
        if (valuea > valueb) {
            this.errors.push(message);
        }
    }

    clear() {
        this.errors = [];
    }

    isValid() {
        return this.errors.length === 0;
    }
}