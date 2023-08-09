/* eslint-disable no-unused-vars */
import axios from 'axios';

function LoginAPI(options, setError) {
    let token = '';
    let workersId = '';

    return axios.post('http://localhost:8080/login', options.body, { headers: options.headers })
        .then(response => {
            if (!response.data) {
                throw new Error('Error al iniciar sesión. Por favor, verifica tus credenciales.');
            }
            return response.data;
        })
        .then(data => {
            token = data.accessToken;
            localStorage.setItem('token', token);
            console.log(token);
            return data;            
        })
        .then((data) => {
            workersId = data.user.id;
            localStorage.setItem("workers", workersId);
            console.log(workersId);
            return {
                token: token,
                workersId: workersId
            };
        })
        .catch(error => {
            console.error(error);
            setError('Error al iniciar sesión. Por favor, verifica tus credenciales');
            // throw error;
        });
}

export { LoginAPI };