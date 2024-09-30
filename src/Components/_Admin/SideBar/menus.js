export default [
    
    {
        menu_title: "Dashboard",
        menu_icon: "fa fa-home",
        path: "/admin",
        child_routes: null
    },
    {
        menu_title: "Profile",
        menu_icon: "fa fa-user-circle",
        path: "/admin/profile",
        child_routes: null
    },
    {
        menu_title: "Category",
        menu_icon: "fa fa-book",
        path: "/category",
        child_routes: [
            {
                menu_title: "All",
                menu_icon: "fa fa-file-text",
                path: "/admin/category/all"
            },
            {
                menu_title: "Create",
                menu_icon: "fa fa-plus-square",
                path: "/admin/category/create"
            },
            
        ]
    },
    {
        menu_title: "Product",
        menu_icon: "fa fa-newspaper-o",
        child_routes: [
            {
                menu_title: "All",
                menu_icon: "fa fa-pie-chart",
                path: "/admin/product/all"
            },
            {
                menu_title: "Create",
                menu_icon: "fa fa-cloud-upload",
                path: "/admin/product/create"
            },
            
        ]
    },
    
    
]