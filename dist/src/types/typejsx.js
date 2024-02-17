// import React from 'react'
// interface Starship {
//     name: String;
//     enableHyperjump: Boolean
// }
// type StarshipWithoutName = Omit<Starship, "name">;
// const updateStarship = (id: Number, starship: Partial<Starship>) => {}
// updateStarship(1, {
//     name: "Explorer"
// })
// const starships: Record<string, Starship> = {
//     Explorer1: {
//         name: "Explorer1",
//         enableHyperjump: true
//     },
//     Explorer2: {
//         name: 'Explorer2',
//         enableHyperjump: false
//     }
// }
// type AvailableDrinks = "Coffee" | "Tea" | " Orange Juice" | "Lemonade"
// let JohnsDrink: AvailableDrinks;
// JohnsDrink = "Coffee";
// type DrinksJaneDoesntLike = "Coffee" | "Orange Juice";
// type DrinksJaneLikes = "Tea" | "lemonade" | "Mohito";
// let JanesDrink: Exclude<AvailableDrinks, DrinksJaneDoesntLike>;
// let JanesDrinks: Extract<AvailableDrinks, DrinksJaneLikes>;
// JanesDrink = "Tea"
// interface StarshipProperties {
//     color?: 'blue' | "red" | "green"
// }
// function paintStarship(
//     id: number, 
//     color:NonNullable<StarshipProperties['color']>) {
//         return {
//             id,
//             color
//         }
//     }
// type PaintStarshipReturn = ReturnType<typeof paintStarship>;
// paintStarship(1, 'blue');
// type Constructable<ClassIntsance> = new (...args: any[]) => ClassIntsance;
// function Deletable<BaseClass extends Constructable<{}>>(Base: BaseClass) 
// {
//     return class extends Base 
//     {
//         deleted: boolean;
//     delete() {} 
//     }
// } 
// class Car {
//     constructor(public name: string) {}
// }
// class User {
//     constructor(public name: string) {}
// }
// const DeletableCar = Deletable(Car);
// const DeletableUser = Deletable(User)
// type DeletableCarInstance = InstanceType<typeof DeletableUser>
// type DeletableUserInstance = InstanceType<typeof DeletableUser>
// class Profile {
//     user: DeletableUserInstance;
//     car: DeletableCarInstance
// }
// const profile = new Profile();
// profile.user = new DeletableUser('john')
// profile.car = new DeletableCar('ferrari')
// type Properties = 'propA' | 'propB';
// // type MyMappedType<Properties extends string | number | symbol> = {
// //     [P in Properties]: P;
// // }
// type MyMappedType<T> = {
//    [P in keyof T]: T[P];
// }
// type MyNewType = MyMappedType<{a: 'a'; b: 'b'}>;
// type Pick1<T, Properties extends keyof T> = {
//     [P in Properties]: T[P]
// };
// type MyNewType2 = Pick1<{a: 'a', b: 'b'}, 'a' | 'b'>
// type Record1<K extends keyof any, T> = {
//     [P in K]: T;
// } & {someProperty: string}
// const someRecord: Record1<string, number> = {}
// someRecord.apples = 10;
// someRecord.oranges = 10;
// someRecord[1] = 1
// interface Record2 {
//     [key: string]: number;
// }
// type SomeType  = number; 
// type MyConditionalType = SomeType extends string ? string : null;
// function someFunction<T>(value: T)
// {
//     type A = T extends boolean 
//     ? 'TYPE A' 
//      : T extends string 
//      ? 'TYPE B' 
//      : T extends number 
//      ? 'TYPE C' 
//      : 'TYPE D'
//     const someOtherFunction = (someArg: T extends boolean ? 'TYPE A' : 'TYPE B') => 
//     {
//         const a: 'TYPE A' | 'TYPE B' = someArg
//     };
//     return someOtherFunction;
// }
// const result = someFunction(true)
// type StringOrNot<T> = T extends string ? string : never;
// type AUnion  = string | boolean | never;
// type ResultType = Exclude <'a' | 'b' | 'c', 'a' | 'b'>
// type MyType<T> =  [string | number] extends [string | number] ? T : never;
// type MyResult = MyType<string | number >;
// type InferSomething<T> = T extends infer U ? U : any;
// type Inferred = InferSomething<'I am a string'>;
// type InferSomething2<T> = T extends {a: infer A, b: infer B} ? A & B : any;
// type Inferred2 = InferSomething2<{a: {someAProp: 1}; b:{ someBProp: "B"}}>;
// type numArray = Array<number>
