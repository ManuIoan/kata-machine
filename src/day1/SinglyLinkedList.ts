export default class SinglyLinkedList<T> {
    public length: number;
    public next: SinglyLinkedList<T>;
    public value: T;
    

    constructor() {
    }

    prepend(item: T): void {

    }
    insertAt(item: T, idx: number): void {

    }
    append(item: T): void {
        let SLL = new SinglyLinkedList<T>;
        SLL.next = null;
        SLL.value = item;
        this.next = SLL;
        
    }
    remove(item: T): T | undefined {

    }
    get(idx: number): T | undefined {

    }
    removeAt(idx: number): T | undefined {

}
}