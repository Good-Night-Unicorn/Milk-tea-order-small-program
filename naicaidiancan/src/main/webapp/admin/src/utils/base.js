const base = {
    get() {
        return {
            url : "http://localhost:8080/naicaidiancan/",
            name: "naicaidiancan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/naicaidiancan/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "奶茶点餐小程序"
        } 
    }
}
export default base
