class UserModelMResponse {
    //     {
    //     "data": {
    //         "id": 2,
    //             "first_name": "Janet",
    //                 "last_name": "Weaver",
    //                     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
    //          }
    //      }
    constructor() {
        this.data = null;
    }

    getData = () => {
        return this.data;
    };

}

export { UserModelMResponse };
