import {
    ApiModel,
} from '../Model/index';

//--------------- API MODEL CREATION ------------------//
export const createApiModel = (j_obj) => {
    return m_instance = new ApiModel(j_obj);
};

