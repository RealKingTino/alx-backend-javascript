import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        super(sqft);
        this._floors = 0;
        this.floors = floors;
    }

    get floors() {
        return this._floors;
    }

    set floors(newFloors) {
        if (typeof newFloors === 'number') {
            this._floors = newFloors;
        } else {
            throw new Error('Number of floors must be a number');
        }
    }

    evacuationWarningMessage() {
        return `Evacuate slowly the ${this._floors} floors.`;
    }
}
