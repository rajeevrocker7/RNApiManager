import {
    UserListMResponse,
    UserModel,
    UserModelMResponse,
    UserRegisterMResponse,
} from '../Model/index';
import {
    GET_USERS_LIST,
    GET_SINGLE_USER,
    POST_REGISTER,

} from "../../../redux/actions/types";
import ModelBuilder from "../../../modelManager/ModelBuilder";

let instance = null;

class MainPresenter {
    constructor() {
        if (!instance) {
            this.instance = this;
        }

        return instance;
    }

    static getInstance = () => {
        return new MainPresenter();
    };


    //--------------- DATA MODELS CREATION ------------------//

    getModelsList = () => {
        //MODELS LIST 
        const ModelsList = {
            UserListMResponse,
            UserModel,
            UserModelMResponse,
            UserRegisterMResponse,
        };

        return ModelsList;
    };

    createModel = (apiLabel = "", j_obj) => {
        let m_instance = null;
        
        let emptyJsonBoolCheck = j_obj &&
            Object.keys(j_obj).length === 0 &&
            j_obj.constructor === Object;

        switch (apiLabel) {
            case GET_USERS_LIST:
                if (!emptyJsonBoolCheck) {
                    m_instance = new ModelBuilder(this.getModelsList())
                        .useClass("UserListMResponse")
                        .useJSONObject(j_obj)
                        .setProperty("page", "page")
                        .setProperty("per_page", "per_page")
                        .setProperty("total", "total")
                        .setProperty("total_pages", "total_pages")
                        //sub-array 
                        .addSubArray("UserModel", j_obj.data, "data")
                        .buildEachModel()
                        .setPropertyForInstance("id", "id")
                        .setPropertyForInstance("first_name", "first_name")
                        .setPropertyForInstance("last_name", "last_name")
                        .setPropertyForInstance("avatar", "avatar")
                        .buildArray()
                        .build();
                }
                return m_instance;

            case GET_SINGLE_USER:
                if (!emptyJsonBoolCheck) {
                    m_instance = new ModelBuilder(this.getModelsList())
                        .useClass("UserModelMResponse")
                        .useJSONObject(j_obj)
                        //sub-class
                        .addSubClass("UserModel", j_obj.data, "data")
                        .setProperty("id", "id")
                        .setProperty("first_name", "first_name")
                        .setProperty("last_name", "last_name")
                        .setProperty("avatar", "avatar")
                        .buildSubClass()
                        .build();
                }
                return m_instance;

            case POST_REGISTER:
                if (!emptyJsonBoolCheck) {
                    m_instance = new ModelBuilder(this.getModelsList())
                        .useClass("UserRegisterMResponse")
                        .useJSONObject(j_obj)
                        .setProperty("token", "token")
                        .build();
                }
                return m_instance;

            default:
                return m_instance;
        }
    };


}

export default MainPresenter;
