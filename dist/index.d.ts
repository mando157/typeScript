interface lengthwise {
    length: number;
}
declare function longWithLength<T extends lengthwise>(value: T): void;
type Laptop = {
    brand: string;
    price: number;
};
declare class Store<T> {
    private _products;
    add(newProduct: T): void;
    printProducts(): void;
}
declare class Stock1 extends Store<Laptop> {
}
declare let storObj: Stock1;
declare class Stock2<K> extends Store<K> {
}
declare let storObj2: Stock2<Laptop>;
type Empty_constructor = new () => {};
type Sec_Empty_constructor = {
    new (): {};
};
type Generic_Empty_constructor<T> = new () => T;
declare function creatingClass<T>(MyClass: Generic_Empty_constructor<T>): T;
declare class Car {
    constructor();
}
declare const myCar: Car;
//# sourceMappingURL=index.d.ts.map