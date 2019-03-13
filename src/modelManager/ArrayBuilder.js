// /**
//  * ARRAY BUILDER : USED TO CREATE ARRAYS IN POJO MODEL(S) AS PER API REQUIREMENTS
//  */
// class ArrayBuilder {
//     constructor(models, parent, propertyName) {
//         this.models = models;
//         this.parent = parent;
//         this.propertyName = propertyName;
//     }

//     useClass = (className) => {
//         this.className = className;
//         return this;
//     };

//     useArray = (arr) => {
//         this.arr = arr;
//         return this;
//     }

//     initializeArray = () => {
//         this.array = Array(this.arr.length).fill(null).map(v => {
//             return new this.models[this.className]();
//         });
//         return this;
//     };

//     setPropertyForInstance = (key, propName) => {
//         for (let i = 0; i < this.array.length; i++) {
//             let element = this.array[i];
//             element[propName] = this.arr[i][key];
//         }
//         return this;
//     };

//     buildArray = () => {
//         this.parent.setValue(this.propertyName, this.array);
//         return this.parent
//     };
// }

// export default ArrayBuilder;
