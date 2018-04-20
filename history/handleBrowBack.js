/*
 * 功能： 监听浏览器后退按钮 直接返回第num个页面。
 *
 * 使用： 在需要实现该功能的页面 页面加载完成后执行一次该方法！
 *
 * @param {Number} num 返回第num个页面
 *      示例 ： 返回第一个页面 入参num为 1 返回第二个页面 入参num为 2 ...
 * @return undefind
 * */
function handleBrowBack(num){

    if(history.pushState){
        history.pushState({}, "", "");
        window.addEventListener("popstate",handlePopstate, false);
    }

    function handlePopstate (){
        try{
            var len = window.history.length;
            history.go(-(len - 1 - num));
        }catch(e){
            console.log(e)
        }

    }
}