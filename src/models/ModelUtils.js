import { UserListModel, UserModel, UserRegisterModel, ApiModel } from './index';

//API MODEL CREATION
export const createApiModel = (j_obj) => {
    return m_instance = new ApiModel(j_obj);
};

// DATA MODELS CREATION
export const createUserListModel = (j_obj) => {
    return m_instance = new UserListModel(j_obj);
};

export const createUserModel = (j_obj) => {
    return m_instance = new UserModel(j_obj);
};

export const createUserRegisterModel = (j_obj) => {
    return m_instance = new UserRegisterModel(j_obj);
};

