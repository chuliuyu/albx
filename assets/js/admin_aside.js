
$(function(){
    var menu_posts=$("#menu-posts");
    var routername;
    var index=location.href.indexOf("?");
    console.log(index);
    if(index!=-1){
        routername=location.href.substring(location.href.lastIndexOf("/")+1,index);
    }else{
        routername=location.href.substring(location.href.lastIndexOf("/")+1);
    }
    console.log(routername);
    if(routername=="posts"||routername=="post-add"||routername=="categories"){
        menu_posts.addClass("in");
        menu_posts.attr("aria-expanded","true")
    }

})