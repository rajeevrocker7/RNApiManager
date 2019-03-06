import { API_CONST } from '../constants/ApiConstants';

let instance = null;

class ApiSingleton {
    constructor() {
        if (!instance) {
            this.baseUrl = API_CONST.BASE_URL_FB;
            this.instance = this;
        }

        return instance;
    }

    static getInstance = () => {
        return new ApiSingleton();
    };

    //METHOD: GET REQUEST
    getMoviesFromApi = async () => {
        try {
            const url = `${this.baseUrl}${API_CONST.GET_MOVIES}`;
            console.log(`ApiSingleton: getMoviesFromApi: ->\n ${url}`);

            let response = await fetch(url);
            let responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    };

}

export default ApiSingleton;