import Api from './api';
export default {
    login(body) {
        return Api().post(`api/users/auth`, body)
    },

    // GETTING APIS START HERE


    getTimeTable() {
        return Api().get(`api/time-table`);
    },

    getPromotion(promotion_id) {
        return Api().get(`api/school-promotions/${promotion_id}`);
    },

    getSemesters(n_of_pages, pages_limit) {
        return Api().get(`api/semester?page=${n_of_pages}&limit=${pages_limit}`);
    },
    getClassPromotion() {
        return Api().get(`api/school-promotion-classes`);
    },
    getClasses() {
        return Api().get(`api/school-classes`);
    },
    getCategories() {
        return Api().get(`api/user-categories`);
    },
    getCategory(passcode) {
        return Api().get(`api/user-categories/${passcode}`);
    },
    getNotes() {
        return Api().get(`api/course-upload`);
    },
    getAssignments(n_of_pages, pages_limit) {
        return Api().get(`api/assignment?page=${n_of_pages}&limit=${pages_limit}`)
    },
    getLessons(pages, limit) {
        return Api().get(`api/lessons/?page=${pages}&limit=${limit}`);
    },

    getLessonPromotionById(promotion_id) {
        return Api().get(`api/lessons-promotion/${promotion_id}`);
    },
    getLessonById(lesson_id) {
        return Api().get(`api/lessons/${lesson_id}`)
    },
    getUsers() {
        return Api().get(`api/users`);
    },
    getUserData(user_id) {
        return Api().get(`api/users/${user_id}`)
    },


    // GETTING APIS END HERE

    //POSTING APIS START HERE

    addLesson(body) {
        return Api().post(`api/lessons`, body);
    },

    // POSTING APIS END HERE



    // UDPATING APIS START HERE

    updateUser(user_id, body) {
        return Api().put(`api/users/${user_id}`, body);
    },
    updatePassword(user_id, body) {
        return Api().post(`api/users/update/password/${user_id}`, body)
    }

    // UPDATING APIS END HERE

}

