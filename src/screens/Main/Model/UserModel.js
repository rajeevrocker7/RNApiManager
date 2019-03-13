class UserModel {
    // {
    //     "id": 2,
    //     "first_name": "Janet",
    //     "last_name": "Weaver",
    //     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
    // }

    constructor() {
        this.id = null;
        this.first_name = '';
        this.last_name = '';
        this.avatar = '';
    }

    getAvatar = () => {
        return this.avatar;
    }

    getName = () => {
        return `${this.first_name} ${this.last_name}`;
    }

    getId = () => {
        return this.id;
    }
}

export { UserModel };
