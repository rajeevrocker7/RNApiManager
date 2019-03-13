import ModelBuilder from "./ModelBuilder";

class ArrayOfObjectBuilder {
    constructor(models, parent, propertyName) {
        this.models = models;
        this.parent = parent;
        this.propertyName = propertyName;
    }

    useClass = (className) => {
        this.className = className;
        return this;
    };

    useJSONArray = (arr) => {
        this.arr = arr;
        return this;
    };

    initializeArray = () => {
        this.array = Array(this.arr.length).fill(null).map(v => {
            return new this.models[this.className]();
        });

        this.arrayOfObjectBuilder = Array(this.arr.length).fill(null).map((v, i) => {
            let mb = new ModelBuilder(this.models);
            mb.useClass(this.className);
            mb.useJSONObject(this.arr[i]);
            return mb;
        });
        return this;
    };

    buildEachModel = () => {
        for (let i = 0; i < this.arrayOfObjectBuilder.length; i++) {
            let builder = this.arrayOfObjectBuilder[i];
            this.array[i] = builder.build();
        }
        return this;
    };

    forEachModel = (callback) => {
        for (let i = 0; i < this.arrayOfObjectBuilder.length; i++) {
            let mBuilder = this.arrayOfObjectBuilder[i];
            callback(mBuilder, i, this.arr[i]);
        }
        return this;
    };

    setPropertyForInstance = (key, propName) => {
        for (let i = 0; i < this.arrayOfObjectBuilder.length; i++) {
            let mBuilder = this.arrayOfObjectBuilder[i];
            mBuilder.setProperty(key, propName);
        }
        return this;
    };

    buildArray = () => {
        this.parent.setValue(this.propertyName, this.array);
        return this.parent
    };
}

export default ArrayOfObjectBuilder;
