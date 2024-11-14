import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

export const getMusics = async () => {
    const response = await axios.get('/music');
    return response.data;
};