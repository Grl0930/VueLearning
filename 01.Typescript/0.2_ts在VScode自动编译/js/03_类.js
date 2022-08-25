(() => {
    class Person {
        // 定义一个构造器函数
        constructor(firstName, lastName) {
            // 更新属性数据
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = this.firstName + this.lastName;
        }
    }
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    // 实例化对象
    const person = new Person('绝顶', '大痉挛');
    console.log(showFullName(person));
})();
