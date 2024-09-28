"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
class Biblioteca {
    normalizeText(text) {
        return text.toLocaleUpperCase();
    }
    generateID() {
        return this.id++;
    }
    create(item) {
        item.title = this.normalizeText(item.title);
        this.collection.push(item);
        return item;
    }
    read() {
        if (this.collection.length > 0) {
            this.collection.forEach((item) => console.table(item));
        }
        else {
            console.log("No data saved");
        }
    }
    update(item) {
        item.title = this.normalizeText(item.title);
        const index = this.collection.findIndex((item) => item.id);
        if (index >= 0) {
            return (this.collection[index] = item);
        }
        else {
            console.log("ID passado não corresponde ao item informado");
        }
    }
    delete(id) {
        const index = this.collection.findIndex((item) => item.id === id);
        if (index >= 0) {
            const obj = this.collection[index];
            if (obj.available) {
                this.collection.slice(index, 1);
                console.log("Deleted");
                console.table(obj);
            }
            else {
                console.log("This item is not available to be deleted");
            }
        }
        else {
            console.log("No users were found");
        }
    }
    findAllByTitle(title) {
        title = this.normalizeText(title);
        const listOfItens = this.collection.filter((item) => item.title === title);
        console.table(listOfItens);
    }
    getById(id) {
        if (this.collection.length > 0) {
            const index = this.collection.findIndex((item) => item.id);
            const obj = this.collection[index];
            return obj;
        }
        else {
            console.log("No users were found");
        }
    }
    barrowed(title) {
        title = this.normalizeText(title);
        const index = this.collection.findIndex((item) => {
            return item.title === title;
        });
        if (index >= 0) {
            if (this.collection[index].available === true) {
                this.collection[index].available = false;
                console.log(`Now, this item is barrowed to you, give it back by using it's id: ${this.collection[index].id}`);
            }
            else {
                console.log("This item is already barrowed");
            }
        }
        else {
            console.log("Item don't exist");
        }
    }
    giveBack(id) {
        const index = this.collection.findIndex((item) => item.id === id);
        if (index >= 0) {
            if (this.collection[index].available === false) {
                console.log("Thanks for returning to our collection.");
                this.collection[index].available = true;
                console.table(this.collection[index]);
            }
            else {
                console.log("Seems like you gave us an ID to be given back, but this item isn't barrowed in the first place.");
            }
        }
        else {
            console.log("No such ID found");
        }
    }
    constructor() {
        this.collection = [];
        this.id = 1;
    }
}
exports.Biblioteca = Biblioteca;
