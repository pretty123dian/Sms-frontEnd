import Api from './api';
export default{
    getTimeTable(){
        return Api().get(`api/time-table`);
    },

    getPromotion(promotion_id){
        return Api().get(`api/school-promotions/${promotion_id}`);
    },

    getSemesters(n_of_pages, pages_limit){
        return Api().get(`api/semester?page=${n_of_pages}&limit=${pages_limit}`);
    },
    getClassPromotion(){
        return Api().get(`api/api/school-promotion-classes`);
    }
}
