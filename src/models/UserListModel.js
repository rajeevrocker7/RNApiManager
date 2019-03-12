class UserListModel {

    constructor(j_obj = {}) {
        Object.assign(this, j_obj);
    }

    getListData = () => {
        if (this)
            return this.data;
        else
            return null;
    }

    getTotalPage = () => {
        if (this)
            return this.total_pages;
        else
            return 0;
    }
    //...
}

export { UserListModel };
