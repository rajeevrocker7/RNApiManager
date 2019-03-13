import {
    API_CONST,
} from '../../constants/ApiConstants';

// for type-scripting
import PropTypes from 'prop-types';

class ApiModel {
    constructor(j_obj = {}) {
        this.API_SUCCESS = (j_obj["API_SUCCESS"]) ? j_obj["API_SUCCESS"] : API_CONST.API_SUCCESS;

        this.API_FAILURE = (j_obj["API_FAILURE"]) ? j_obj["API_FAILURE"] : API_CONST.API_FAILURE;

        this.API_ERR = (j_obj["API_ERR"]) ? j_obj["API_ERR"] : API_CONST.API_ERR;

        this.API_NETWORK_ERR = (j_obj["API_NETWORK_ERR"]) ? j_obj["API_NETWORK_ERR"] : API_CONST.API_NETWORK_ERR;

        this.API_IS_LOADING = (j_obj["API_IS_LOADING"]) ? j_obj["API_IS_LOADING"] : false;
    }
}

// for type-scripting
ApiModel.propTypes = {
    API_SUCCESS: PropTypes.string,
    API_FAILURE: PropTypes.string,
    API_ERR: PropTypes.string,
    API_NETWORK_ERR: PropTypes.string,
    API_IS_LOADING: PropTypes.bool,
};

export { ApiModel };
