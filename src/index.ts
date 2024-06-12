// 1] let age: number = 20;
// if(age < 50)
//     age+=10;
// console.log(age);

// 2] let sales: number = 123_456_789;
// let course: string = 'TypeScript';
// let is_published: boolean = true;
// let x;
// let num = 10;

// 3] any type
// let level;
// level = 1;
// level = 'a';

// 4] parameter implicity any 
// function render(document:any){
//     console.log(document);
    
//

// 5] var any: number[] = [10,20,30]
// var any: number[] = [10,20,30];
// let x = [10,20,30];
// let y = [10,20,'30'] 
// let y: number[] = [10,20,'30'] 
// let numbers: number[] = []
// numbers = [3];
// numbers  = ['a'];

// 6] code completion == means you get emmit suggestions than js bcuz ts knows what type of data it is
// let numbers: number[] = [];
// numbers.forEach(n =>n.)

// 7] tuple == mostly used as key and  value 
// let num: [number,string] = [1,'jashwanth'];

// 8] enum
// enum Size {Small =6,Medium,Large}
// let mySize: Size = Size.Large;
// console.log(mySize);

// 9] anotate return value
// function calculate(income: number , tax:number):number{
//     return 0; 
// }

// 10] objects and optional sign ===? , readonly
// let employee:{
//     readonly id:number
//     name?: string
// } = {id:10}
// employee.name='jash'
// employee.name = "jabi"
// employee.id = 10;

// 11] type alias == used to reuse type in mulitiple places
// type Employee = {
//     readonly id:number
//     name?: string
// }
// let employee: Employee = {id:10}

// 12] union types or union operator == |
// function kgToLbs(weight: number | string ): number{
//     if (typeof weight === 'number') {
//         return weight*2.2
//     }
//     return parseInt(weight)*2.2;
// }
// kgToLbs(10);
// kgToLbs('10kg');

// 13] intersection type
// type Draggable = {
//     drag : () => void
// }
// type Resizable = {
//     resize : () => void
// }

// type UIWidget = Draggable & Resizable;

// let textBOx : UIWidget = {
//     drag: () => {},
//     resize:() => {}
// }

// 14] literal ( exact or specific)
// let q : 50;
// let x : 50 =50;
// let xx: 50 = 00;
// let xxx: 50|100 = 100;

// type q = 'cm' | 'mm';
// let aa:q = 'cm';

// 15] Nullable types . working with null or undefined with parameters errors
// function greet (name: string | null | undefined )
// {
//     if (name){
//         console.log(name.toUpperCase);
//     }
//     else{
//         console.log('HOlla !');
        
//     }
// }
// greet(undefined);


// 16 ] optional chaining or optional property access operator == ?.
// type Customr {
//     birthday : Date
// }

// function getCustomer(id:number): Customr | null | undefined{
//     return id ===0 ? null : { birthday : new Date() } ;
// }

// let customer = getCustomer(0);
// console.log(customer?.birthday);

