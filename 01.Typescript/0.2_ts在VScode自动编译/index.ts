(() => {
    function sayHi(str:string) {
        return 'hi' + str
    }
    let text = 'gaga'
    console.log(sayHi(text));

})()
// 在ts文件写纯js代码，谷歌中可以直接使用。使用tsc进行编译