import { ItemInterface } from "./iteminterface";

export class Item implements ItemInterface {

    _itemId: number;
    _itemName: string;
    _done: boolean;

    constructor(itemId: number, itemName : string, done: boolean) {
        this._itemId = itemId;
        this._itemName = itemName;
        this._done = done;
    }

    get itemId() {
        return this._itemId;
    }

    set itemId(itemId : number) {
        this._itemId = this.itemId
    }

    get itemName() {
        return this._itemName;
    }

    set itemName(newItemName : string) {
        this._itemName = newItemName;
    }

    get done() {
        return this._done;
    }

    set done(newDone : boolean) {
        this._done = newDone;
    }

    toString() {
        return "itemId: " + this._itemId + ", itemName: " + this._itemName + ", done: " + this._done;
    }
}