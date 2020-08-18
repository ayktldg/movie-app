import axios from 'axios';

const httpService = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
})


httpService.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log(error);
    }
)

export default httpService;

/* export const apiUrl = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '6493a6123f5162ff2ff9776e58dd41de'
}

export default apiUrl; */