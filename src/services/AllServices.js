import Api from './api';
export default{
    getTimeTable(){
        return Api().get(`api/time-table`);
    },

    getPromotion(promotion_id){
        return Api().get(`api/school-promotions/${promotion_id}`);
    }
  
}
