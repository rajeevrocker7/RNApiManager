class UserModel {
    //     {
    //     "data": {
    //         "id": 2,
    //             "first_name": "Janet",
    //                 "last_name": "Weaver",
    //                     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
    //          }
    //      }

    constructor(j_obj = {}) {
        Object.assign(this, j_obj);
    }

    getUserData = () => {
        if (this)
            return this.data;
        else
            return null;
    }

    getName = () => {
        if (this)
            return `${this.first_name} ${this.last_name}`;
        else
            return ``;
    }

    getId = () => {
        if (this)
            return this.id;
        else
            return 0;
    }
}

export { UserModel };
