export class Item {

    private itemId: number;
    private itemName: string;
    private done: boolean;

    constructor(itemId: number, itemName : string, done: boolean) {
        this.itemId = itemId;
        this.itemName = itemName;
        this.done = done;
    }

    getItemId() {
        return this.itemId;
    }

    getItemName() {
        return this.itemName;
    }

    setItemName(newItemName : string) {
        this.itemName = newItemName;
    }

    getDone() {
        return this.done;
    }

    setDone(newDone : boolean) {
        this.done = newDone;
    }

    toString() {
        return "itemId: " + this.itemId + ", itemName: " + this.itemName + ", done: " + this.done;
    }
}