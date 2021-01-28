import Api from './api';
export default{
    getTimeTable(){
        return Api().get(`api/time-table`);
    },
    getTimeTablebyId(timetable_id){

        return Api().get(`api/time-table/${timetable_id}`);

    },
    getTimeTableByPromotion(promotion_id,filename){

        return Api.get(`api/time-table/download/${promotion_id}/${filename}`);
        
    },
    postTimeTable(promotion_id,mytitle,myfile_name,mystatus,mypromotion){
        return Api.post(`api/time-table/${promotion_id}`,{
        title:mytitle,
        file_name:myfile_name,
        status:mystatus,
        promotion:mypromotion
        }).then(response=>{
           console.log(response);
        })
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

   
    login(body){
        return Api().post(`api/users/auth`,body)
    }
}
