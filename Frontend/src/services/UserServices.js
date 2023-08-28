import axios from 'axios'

const EMP_ALL_URL = 'http://localhost:8080/users'
const SIGN_UP_FORM_DATA = 'http://localhost:8080/users/save'
const ADMINTRAINER_PUT_URL = 'http://localhost:8080/users/saveAdTrain'


class UserServices {

    getUsers() {
        console.log("Hello");
        return axios.get(EMP_ALL_URL);
        
    }

    createUsers(user) {
        /* return axios.post(SIGN_UP_FORM_DATA, user); */
         return axios.post('http://localhost:8080/users/save', user); 
        
    }

    createTrainerAdmin(user) {
        return axios.post(ADMINTRAINER_PUT_URL,user)
    }
}

export default new UserServices()