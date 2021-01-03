import Api from './api';
export default{
    getTimeTable(){
        return Api().get(`api/time-table`);
    },
}