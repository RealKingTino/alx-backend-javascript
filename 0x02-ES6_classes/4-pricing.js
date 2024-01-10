import Currency from './3-currency.js';

export default class Pricing {
    constructor(amount, currency) {
        this._amount = 0;
        this._currency = new Currency('', '');

        this.amount = amount;
        this.currency = currency;
    }

    get amount() {
        return this._amount;
    }

    set amount(newAmount) {
        if (typeof newAmount === 'number') {
            this._amount = newAmount;
        } else {
            throw new Error('Amount must be a number');
        }
    }

    get currency() {
        return this._currency;
    }

    set currency(newCurrency) {
        if (newCurrency instanceof Currency) {
            this._currency = newCurrency;
        } else {
            throw new Error('Currency must be an instance of Currency class');
        }
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.displayFullCurrency()}`;
    }

    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }
}
