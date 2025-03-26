const base = {
    get() {
        return {
            url : "http://localhost:8080/lvchengzhengzhouaixingongyi/",
            name: "lvchengzhengzhouaixingongyi",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/lvchengzhengzhouaixingongyi/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "绿城郑州爱心公益网站"
        } 
    }
}
export default base
