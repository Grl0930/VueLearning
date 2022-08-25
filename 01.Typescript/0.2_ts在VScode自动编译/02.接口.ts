(() => {
    interface Iperson {
        firstName: string
        lastName: string
    }

    function showFullName(person: Iperson) {
        return person.firstName + person.lastName
    }
    const person = {
        firstName: '绝顶',
        lastName: '大痉挛'
    }
    console.log(showFullName(person));

})()