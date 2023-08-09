/* eslint-disable no-unused-vars */
import axios from 'axios';

function LoginAPI(options, setError) {
    let token = '';
    let workersName = '';

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
            workersName = data.user.id;
            localStorage.setItem("workers", workersName);
            console.log(workersName);
            return {
                token: token,
                workersName: workersName
            };
        })
        .catch(error => {
            console.error(error);
            setError('Error al iniciar sesión. Por favor, verifica tus credenciales');
            // throw error;
        });
}

export { LoginAPI };