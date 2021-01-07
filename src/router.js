
import Home from './pages/Home.vue';

import VueRouter from 'vue-router';
import Vue from 'vue'
// import NProgress from 'nprogress';
// import components here
import Lessons from './components/lessons/LessonsTable';

import Students from './components/students/StudentsTable.vue';
import AddStudent from './components/students/AddStudent.vue';

import Instructors from './components/instructors/InstructorTable.vue';
import AddInstructor from './components/instructors/AddInstructor.vue';

import Assignments from './components/assignments/AssignmentsTable.vue'
import AddAssignment from './components/assignments/AddAssignment.vue';

import Notes from './components/notes/NotesTable.vue'
import AddNotes from './components/notes/AddNotes.vue'

import Categories from './components/categories/CategoriesTable.vue'
import AddCategories from './components/categories/AddCategories.vue'

import Classes from './components/rcaclasses/ClassesTable.vue'
import AddClass from './components/rcaclasses/AddClass.vue'

import ClassesPromotion from './components/classpromotions/ClassPromotiions.vue'
import AddClassPromotion from './components/classpromotions/AddClassPromotion.vue'

import AddSemester from './components/semester/AddSemester.vue';
import Semesters from './components/semester/SemestersTable.vue';

import Timetables from './components/timetable/TimetableTables.vue';
import AddTimeTable from './components/timetable/AddTimeTable.vue';

import ProfileSettings from './components/profile/ProfileSettings.vue';
import UpdatePassword from './components/profile/UpdatePassword.vue';

import Dashboard from './pages/Dashboard.vue'
import Statistics from './components/main/StatisticalVisual.vue'
import ForgotPassword from './components/ForgotPassword.vue';

// import MainBody from './components/shared/MainBody.vue'
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        component: Home,
        children: [
            {
                path: '/forgotpassword',
                name: 'ForgotPassword',
                component: ForgotPassword
            }
        ]
    },

    {

        path: '/dashboard',
        name: 'home',
        component: Dashboard,
        children: [
            {
                path: '/',
                name: 'Dashboard',
                component: Statistics
            },
            {
                path: '/view/lessons',
                name: 'Lessons',
                component: Lessons

            },

            {
                path: '/view/students',
                name: 'Students',
                component: Students
            },

            {
                path: '/register/student',
                name: 'Students',
                component: AddStudent
            },
            {
                path: '/view/instructors',
                name: 'Instructors',
                component: Instructors
            },
            {
                path: '/register/instructor',
                name: 'Instructors',
                component: AddInstructor
            },
            {
                path: '/view/assignments',
                name: 'Assignments',
                component: Assignments
            },
            {
                path: '/register/assignment',
                name: 'Assignments',
                component: AddAssignment
            },
            {
                path: '/view/notes',
                name: 'Notes',
                component: Notes
            },
            {
                path: '/register/notes',
                name: 'Notes',
                component: AddNotes
            },
            {
                path: '/view/categories',
                name: 'Categories',
                component: Categories
            }, {
                path: '/register/category',
                name: 'Categories',
                component: AddCategories
            },
            {
                path: '/view/classes',
                name: 'Classes',
                component: Classes
            },
            {
                path: '/register/class',
                name: 'Classes',
                component: AddClass
            },
            {
                path: '/view/classpromotions',
                name: 'Promotions',
                component: ClassesPromotion
            },
            {
                path: '/register/classpromotion',
                name: 'Promotions',
                component: AddClassPromotion
            },
            {
                path: '/view/semesters',
                name: 'Semesters',
                component: Semesters
            },
            {
                path: '/register/semester',
                name: 'Semesters',
                component: AddSemester
            },
            {
                path: '/view/timetable',
                name: 'Timetable',
                component: Timetables
            },
            {
                path: '/register/timetable',
                name: 'Timtable',
                component: AddTimeTable
            },
            {
                path: '/profile-settings',
                name: 'ProfileSettings',
                component: ProfileSettings
            },
            {
                path: '/profile-settings/updatepassword',
                name: 'ProfileSettings',
                component: UpdatePassword
            }

        ]

    }

    ]

})

// router.beforeResolve((to, from, next) => {
//     if (to.name || to.path) {
//       NProgress.start()
//     }
//     next()
//   })
//   router.afterEach(() => {
//     NProgress.done()
//   })
export default router;