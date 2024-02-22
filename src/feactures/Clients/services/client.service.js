import axios from "../../../services/axios/axiosConfig";

const clientService = {
    get: async () => {
        try {
            const response = await axios.get('/client')
            return response.data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    },

    view: async (data) => {
        try {
            const response = await axios.post('/client/view', data)
            return response.data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    },


    store: async (data) => {
        try {
            const response = await axios.post('/client', data)
            return response.data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    },


    update: async (data) => {
        try {
            const response = await axios.put(`/client`, data)
            return response.data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    },

    delete: async (data) => {
        try {
            const response = await axios.post(`/client/delete`, data)
            return response.data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    },
};

export default clientService;

