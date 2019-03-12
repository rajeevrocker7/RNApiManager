class UserRegisterModel {
    //    {
    //     "token": "QpwL5tke4Pnpja7X"
    //    }

    constructor(j_obj = {}) {
        Object.assign(this, j_obj);
    }

    getToken = () => {
        if (this)
            return this.token;
        else
            return ``;
    }

}

export { UserRegisterModel };
