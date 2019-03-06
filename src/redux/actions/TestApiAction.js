
import {
    TEST_API
} from './types';

//action creator (of type synchronous)
export const testMoviesApiAction = (resp_data_obj) => {
    return {
        type: TEST_API,
        payload: resp_data_obj
    };
};
