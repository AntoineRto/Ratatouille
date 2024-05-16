// export default class IdGenerator {
//   static counter = 0;

//   constructor() {
//   }

//   static generateId() {
//     const timestamp = Date.now();
//     const counterId = IdGenerator.counter;
//     const base36 = (timestamp * 1000 + counterId).toString(36);
//     IdGenerator.counter++;
//     return base36;
//   }
// }

export default class IdGenerator {
  static generateId() {
    return '_' + Math.random().toString(36).slice(2, 9);
  }
}