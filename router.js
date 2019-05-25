var express=require("express");
var router=express.Router();
var pageControllers=require("./controllers/pageControllers");
var userControllers=require('./controllers/userControllers')
var cateControllers=require("./controllers/cateControllers");
var postControllers=require("./controllers/postControllers")
var uploadControllers=require("./controllers/uploadControllers")
var menusControllers=require("./controllers/menusControllers")

router
    // 响应前台页面
    .get("/",pageControllers.showIndexPage)
    .get("/list",pageControllers.showListPage)
    .get("/detail",pageControllers.showDetailPage)
    // 响应后台页面
    .get("/admin",pageControllers.showAdminIndexPage)
    .get("/admin/categories",pageControllers.showAdminCategoriesPage)
    .get("/admin/comments",pageControllers.showAdminComments)
    .get("/admin/login",pageControllers.showAdminLogin)
    .get("/admin/nav-menus",pageControllers.showAdminNav_menus)
    .get("/admin/password-reset",pageControllers.showAdminPassword_reset)
    .get("/admin/post-add",pageControllers.showAdminPost_add)
    .get("/admin/posts",pageControllers.showAdminPosts)
    .get("/admin/profile",pageControllers.showAdminProfile)
    .get("/admin/settings",pageControllers.showAdminSettings)
    .get("/admin/slides",pageControllers.showAdminSlides)
    .get("/admin/users",pageControllers.showAdminUsers)
    //响应用户登录验证
    .post("/login",userControllers.login)
    // 响应分类操作
    .get("/getAllcate",cateControllers.getAllCate)
    .post("/addcategory",cateControllers.addCategory)
    .post("/editcategory",cateControllers.editCategory)
    .get("/delcategory",cateControllers.delCategory)
    .get("/delscategory",cateControllers.delsCategory)
    // 所有文章操作
    .get("/getPostsList",postControllers.getPostsList)
    .get("/delPost",postControllers.delPost)
    // 文件上传操作
    .post("/uploadFile",uploadControllers.uploadFile)
    .post("/addPost",postControllers.addPost)
    // 文章编辑
    .get("/getPostById",postControllers.getPostById)
    .post('/editPostById',postControllers.editPostById)
    .post('/addMenu',menusControllers.addMenu)
    .get('/getAllMenu',menusControllers.getAllMenuList)
module.exports=router;