(() => {
    interface Iperson {
        firstName: string,
        lastName: string
    }
    class Person {
        firstName: string
        lastName: string
        fullName: string
        // 定义一个构造器函数
        constructor(firstName: string, lastName: string) {
            // 更新属性数据
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = this.firstName + this.lastName
        }
    }
    function showFullName(person: Iperson) {
        return person.firstName + '_' + person.lastName

    }
    // 实例化对象
    const person = new Person('绝顶', '大痉挛')
    console.log(showFullName(person));

})()