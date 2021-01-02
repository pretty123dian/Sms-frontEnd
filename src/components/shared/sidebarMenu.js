 function getSidebarMenu(){
    let menu =[];
    menu = [
        {
            icon:'fasdfasdf',
            title:'Dashboard',
            to:'/dashboard'
        },
        {
            icon:'fasdfasdfa',
            title:'Lessons',
            children:[{
                icon:'',
                title:'View lessons',
                to: '/view/lessons'
            }]
        }
    ]
    return menu;
}

module.exports.getRoutes = getSidebarMenu
