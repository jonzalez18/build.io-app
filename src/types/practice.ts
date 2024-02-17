
// export function multiply(a: number, b: number): number {
//     return a * b
// }

// export function multiplyByTwo(num: number) {
//     return num * 2
// }

// function uppercaseFirstLetter(str: string) {
//     return str[0].toUpperCase() + str.substr(1)
// }
// export default uppercaseFirstLetter;
// let array1: string[] = ['x', 'y']
// let array2: Array<string> = array1;

// let tuple: [string, number] = ['str', 1]

// enum Color {
//     Red = 4, 
//     Green = 5,
//     Blue = 3
// }

// let myFavoriteColor: Color = Color.Blue;

// console.log(Color[3])

// let ANY: any;
// ANY = 'a string';
// ANY = 1;
// ANY = true;

// const email = document.getElementById('email')

// interface Profile {
//     readonly name: string;
//     age?: number;
// }

// let profile: Profile = {
//     name: 'john',
//     age: 30
// }
// namespace interfaceAssignment {

//     interface A {
//         someProp: number;
//     }
//     interface B {
//         someProp: number;
//     }

//     let a: A = {someProp: 1}
//     let b: B = a;
// }

// interface Sum {
//     (a: number, b: number): number;
//     prop1: string
// }

// const sum: Sum = (a,b) => a+b; 
// sum.prop1 = 'some prop'

// interface Parent {
//     x: string;
// }
// interface Parent2 {
//     y: string
// }

// function sum1(a: number, b?: number): number { 
//     return a + (b || 0)
// }

// type MyFucn = (a: number, b: number)
//  => number;
//  const sum2: MyFucn = (a, b) => a + b;

//  function sumEverything(arg1: string, arg2: boolean, ...numbers: number[]): number {
//     return numbers.reduce((result, num) => result + num, 0)
//  }

//  function calcArea(width: number, height: number): number;
//  function  calcArea(length: number): number;
// //  function calcArea(...arg: number[]): number {
// //     if(arg.length === 2) {
// //         return args[0] * args[1]
// //     }
// //     return Math.pow(2)
// //  }

// class Robot {
//     #name: string;
    
//     private somePrivateField = 'a private field'

//     constructor(name: string) {
//         this.#name = name;
//     }
//     getName() {
//        return this.#name;
//     }

//     move(distance: number) {
//         console.log(`$this.name`)
//     }
// }
// class AdvancedRobot extends Robot {
//     #name: string;

//     constructor(name: string) {
//         super(name);
//         this.#name = `Advanced ${name}`
//     }
//     getAdvancedName() {
//         return this.#name;
//     }
// }
// const robot = new AdvancedRobot('Jack')
//  console.log('parnent name', robot.getName());
//  console.log('subclass name', robot.getAdvancedName())

// interface I0rder {
//     calculateTotal(): number;
// }
//  export function calculateTotalAmount(order: I0rder) {
//     let total = order.calculateTotal();
//     const discount = total * .1;
//     total -= discount;
//     const tax = total * .2
//     total += tax
//     return total;
//  }


//  interface Animal {
//     name: string;
//     group: string | undefined;
//     setGroup(group: string): void;
//  }
//  class Cat implements Animal {
//     name: string;
//     group: string;
//     constructor(name:string) {
//         this.name = name
//     };
//     setGroup(group: string) {
//         this.group = group;
//     }
//  } 
//  class Dog implements Animal {
//     name: string;
//     group: string | undefined
//     constructor(name:string) {
//         this.name = name
//     };
//     setGroup(group: string) {
//         this.group = group;
//     }
//  } 

//  interface AnimalConstructor<T> {
//     new (name: string): Animal;
//  }

//  function initializeAnimal<T extends Animal>(Animal: AnimalConstructor<T>, name: string) {
//     const animal = new Animal(name);
//     animal.setGroup('mammals')
//     return animal
//  }

// const cat  = initializeAnimal(Cat, 'felix')
// const dog = initializeAnimal(Dog, 'Ava')

// function someFn(myArgument: number | string | boolean) {
//     if(typeof myArgument === 'string'){
//     let x = myArgument.toUpperCase();
//     } 
//     if(typeof myArgument === 'number') {
//     myArgument.toFixed()
//     }
//     if(typeof myArgument === 'boolean') {
//         myArgument.valueOf()
//     }
// }
// namespace interfaceCombine {
//     interface IA {
//         a: number;
//     }

//     interface IB {
//         b: number;
//     }
//     interface IC {
//         c: number;
//     }

//     function X(obj: IA & IB & IC) {
//         return obj.a + obj.b + obj.c;
//     }

//     function combine<ObjA extends object, ObjB extends object>(objA: ObjA, objB: ObjB): ObjA & ObjB {
//         return {...objA, ...objB}
//     }

//     const objA = {a: 1}
//     const objB = {b: 2}
//     const resultObj = combine(objA, objB)
//  }

// type Alias1 = string | string[] | null;
// type Aliaz2 = {a: number} & {b: number};
// type Alias3<T> = T[];

// type Alias4 = {
//     a: number;
//     b: number;
// }


// namespace genericType {
//     function genericFunction<T> (x: T): T {
//         return x;
//     }

//     const genericArrowFunction = <T>(x:T): T => x;

//     interface GenericInterface<T> {
//         (a:T): T;
//         someProp: T;
//     }

//     interface GenericInterface<T> {
//         <U>(a: U): U;
//         someProp: T;
//     }

//     class GenericClass<P> {
//         constructor(public props: P) {}

//         getProps(): P {
//             return this.props;
//         }
//     }
// }

// namespace AnimalUnion {

//     interface Dog {
//         bark(): void;
//         walk(): void;
//     }

//     interface Cat {
//         meow(): void;
//         walk(): void;
//     }

//     function isDog(someObj: Dog | Cat): someObj is Dog {
//         return (<Dog>someObj).bark !== undefined;
//     }

//     function callMyPet(pet: Dog | Cat) {
//         pet.walk()
//         if(isDog(pet)) {
//             pet.bark();
//         } else {
//             pet.meow();
//         }
//     }
// }

// namespace FooBarUnion {

//     class Foo {
//         foo: number;
//         commonProp: string;
//     }

//     class Bar {
//         bar: number;
//         commonProp: String;
//     }

// }

// interface Cart {
//     calculateTotal(): number
// }

// interface Cart {
//     x: number;
// }

// interface Cart {
//     calculateTotal(options: {discountCode: number}): number;

// }

// let myCart: Cart = {
//     x: 1,
//     calculateTotal(options?: {discountCode: number}) {
//         return 1;
//     }
// }

// namespace MyNamespace {
//     export const x: number = 10;
//     export interface SomeInterface {
//         y: number;
//     }
// }

// namespace MyNamespace {
//     export const getX = () => xdescribe;
//     export interface SomeInterface {
//         x: number;
//     }
// }

// MyNamespace.x
// MyNamespace.getX();

// function someFunction() {
//     return 10
// }

// enum Vegetables {
//     Tomato = 'tomato', 
//     Onion = 'onion'
// }

// namespace Vegetables {
//     export function makeSalad() {
//         return Vegetables.Tomato
//         return Vegetables.Onion
//     }
// }

// class Salad {}

// namespace Salad {
//     export const availableDressings = {oil: 'olive oil'}
// }


