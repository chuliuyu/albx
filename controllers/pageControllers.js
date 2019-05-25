

module.exports={
    // 前台页面渲染控制
    showIndexPage(req,res){
        res.render("index")
    },
    showListPage(req,res){
        res.render("list")
    },
    showDetailPage(req,res){
        res.render("detail")
    },
    // 后台页面渲染控制
    showAdminIndexPage(req,res){
        // if(req.session.isLogin&&req.session.isLogin=="true"){
        //     res.render("admin/index")
        // }else{
        //     res.redirect("admin/login")
        // }
        res.render("admin/index")    
    },
    showAdminCategoriesPage(req,res){
        res.render("admin/categories")
    },
    showAdminComments(req,res){
        res.render("admin/comments")
    },
    showAdminLogin(req,res){
        res.render("admin/login")
    },
    showAdminNav_menus(req,res){
        res.render("admin/nav-menus")
    },
    showAdminPassword_reset(req,res){
        res.render("admin/password-reset")
    },
    showAdminPost_add(req,res){
        res.render("admin/post-add")
    },
    showAdminPosts(req,res){
        res.render("admin/posts")
    },
    showAdminProfile(req,res){
        res.render("admin/profile")
    },
    showAdminSettings(req,res){
        res.render("admin/settings")
    },
    showAdminSlides(req,res){
        res.render("admin/slides")
    },
    showAdminUsers(req,res){
        res.render("admin/users")
    }
}