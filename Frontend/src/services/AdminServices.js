import axios from 'axios'

const SUBPLAN_ALL_URL = 'http://localhost:8080/plans'
const SUBPLAN_PUT_URL = 'http://localhost:8080/plans/save'
const SUBPLAN_DELETE_URL = 'http://localhost:8080/plans/delete'

const GYMMEMB_ALL_URL = 'http://localhost:8080/gymmembers'
const GYMMEMB_DELETE_URL = 'http://localhost:8080/gymmembers/delete'


class AdminServices {

    getSubplans() {
        console.log("Hello");
        return axios.get(SUBPLAN_ALL_URL);
        
    }

    createSubplans(subplan) {
        return axios.post(SUBPLAN_PUT_URL, subplan);
    }

    deleteSubplans(subplanId) {
        return axios.delete(SUBPLAN_DELETE_URL  + '/' + subplanId);
    }

    getGymMembers() {
        return axios.get(GYMMEMB_ALL_URL)
    }

    deleteGymMembers(memberId) {
        return axios.delete(GYMMEMB_DELETE_URL  + '/' + memberId);
    }
}

export default new AdminServices()