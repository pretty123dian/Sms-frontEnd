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
        return Api().get(`api/school-promotion-classes`);
    },
    getClasses(){
        return Api().get(`api/school-classes`);
    },
    getCategories(){
        return Api().get(`api/user-categories`);
    },
    getCategory(passcode){
        return Api().get(`api/user-categories/${passcode}`);
    },
    getNotes(){
        return Api().get(`api/course-upload`);
    },
    getAssignments(n_of_pages,pages_limit){
        return Api().get(`api/assignment?page=${n_of_pages}&limit=${pages_limit}`)
    },
    getLessons(){
        return Api().get(`api/lessons`);
    },

    getLessonPromotionById(promotion_id){
        return Api().get(`api/lessons-promotion/${promotion_id}`);
    },
    getLessonById(lesson_id){
        return Api().get(`api/lessons/${lesson_id}`)
    },
    getUsersByCategories(category_id){
        return Api().get(`api/users/get/category/${category_id}`);
    },




    login(body){
        return Api().post(`api/users/auth`,body)
    }
}
