import ArrayOfObjectBuilder from "./ArrayOfObjectBuilder";
/**
 * MODEL BUILDER : USED TO CREATE POJO MODEL(S) AS PER API REQUIREMENTS
 */
class ModelBuilder {
    /**
     * 
     * @param {List of Model Classes} models 
     */
    constructor(models) {
        this.models = models;
    }

    /** 
     * @param {Class Name from Models List to which JSON should mapped} className
     */
    useClass = (className) => {
        this.instance = new this.models[className]();    //CREATING CLASS/POJO INSTANCE
        return this;
    };

    /**
     * API JSON RECEIVED
     * @param {JSON object} obj
     */
    useJSONObject = (obj) => {
        this.obj = obj;
        return this;
    }

    /**
     *  JSON TO MODEL ARBITARY KEYS MAPPINGS
     *  @param {JSON object's 'Key'} key
     *  @param {POJO/MODEL property Name } propertyName
     */
    setProperty = (key, propertyName) => {
        this.instance[propertyName] = this.obj[key];
        return this;
    };

    /**
     *  HELPER FUNCTION TO SET MODEL PROPERTY VALUE
     *  @param {POJO/MODEL property Name } propertyName
     *  @param {Value corresponding to that propertyName} value
     */
    setValue = (propertyName, value) => {
        this.instance[propertyName] = value;
        return this;
    };
    /**
     *  HELPER FUNCTION TO ADD SUB CLASS IN PARENT
     *  @param {SUB-CLASS NAME FROM MODEL LIST  } subClassName
     *  @param {JSON OBJECT FOR SUB-CLASS } jsonInstance
     *  @param {PropertyName (in Parent class) corresponding to SUB-CLASS} subProperty
     */
    addSubClass = (subClassName, jsonInstance, subProperty) => {
        let subBuilder = new ModelBuilder(this.models);
        subBuilder.useClass(subClassName);
        subBuilder.useJSONObject(jsonInstance);
        this.instance[subProperty] = subBuilder.build();
        subBuilder.parent = this;
        return subBuilder;
    }

    /**
     *  HELPER FUNCTION TO ADD SUB BUILDER CREATED TO PARENT BUILDER MODEL 
     *  @param {Already created ModelBuilder(sub-builder) instance  } mBuilder
     *  @param {PropertyName (in Parent class) corresponding to mBuilder } subProperty
     */
    addSubBuilderObject = (mBuilder, subProperty) => {
        this.instance[subProperty] = mBuilder;
        return this;
    }

    /**
    *  HELPER FUNCTION TO ADD ARRAY IN PARENT/SUBCLASS
    *  @param {CLASS NAME FROM MODEL LIST For Array } subClassName
    *  @param {JSON OBJECT FOR Array } jsonInstance
    *  @param {PropertyName (in Parent class) corresponding to Array property} subProperty
    */
    addSubArray = (subClassName, jsonInstance, subProperty) => {
        let subArrBuilder = new ArrayOfObjectBuilder(this.models, this, subProperty);
        subArrBuilder.useClass(subClassName);
        subArrBuilder.useJSONArray(jsonInstance);
        subArrBuilder.initializeArray();
        return subArrBuilder;
    };

    /**
    *  HELPER FUNCTION TO CREATE A SUBCLASS MODEL IN PARENT
    */
    buildSubClass = () => {
        return this.parent;
    };

    /**
    *  HELPER FUNCTION TO CREATE IN PARENT MODEL
    */
    build = () => {
        return this.instance;
    };

    /**
     * 
     *
    //-------------- USAGE--------------------//

    let x = new ModelBuilder(Models)
            .useClass("UserModel")
            .useJSONObject(jsonData.response)
            .setProperty("mId", "id")
            .setProperty("userName", "name")
            
            //sub class / object
            .addSubClass("UserSession", jsonData.response.session, "userSession")
            .setProperty("sessId", "sessionId")
            .setProperty("token","fcmToken")
            .buildSubClass()
            
            //sub array 
            .addSubArray("UserData", jsonData.response.data, "data")
            .buildEachModel()

            .setPropertyForInstance("name", "u_name")
            .setPropertyForInstance("id", "u_id")

            //sub array of objects
            .forEachModel((mBuilder, i, jsonElement) => {

                mBuilder.addSubClass("UserSession", jsonElement.sess, "sessionObj")
                .setProperty("fcmToken", "fcmToken")
                .buildSubClass();
            })
            .buildArray()

            .build();

    console.log("X", x);

    let y = new ModelBuilder(Models)
            .useClass("ResponseModel")
            .useJSONObject(jsonData)
            .setProperty("code", "code")
            .addSubBuilderObject(x,"response" )
            .build();

    console.log("MAIN ", y);

     * 
     */
}

export default ModelBuilder;