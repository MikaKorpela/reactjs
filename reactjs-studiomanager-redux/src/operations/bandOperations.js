import {createBand, updateBand} from '../actions/bandActions'

export const postBand = (band_name, genre) => {
    return (dispatch) => {
    
        const params = {
            band_name: band_name,
            genre: genre
        };
    
        return axios.post(`${config.api.invokeUrl}/bands`, params)
            .then(response => {
            
                const band = response.data;
            
                dispatch(createBand(band));
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const putBand = (id, band_name, genre) => {
    return(dispatch) => {

        const params = {
            id: id,
            band_name: band_name,
            genre: genre
        }

        return axios.put(`${config.api.invokeUrl}/bands/${id}`, params)
            .then(response => {

                const band = response.data;

                dispatch(updateBand(band));
            })
            .catch(error => {
                throw(error);
            });


    }
}