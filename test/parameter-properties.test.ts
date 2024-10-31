describe('Parameter Properties', () => {

    class Person {
        constructor(public name: string) {

        }
    }

    it('should support', () => {
        const person = new Person("Eldo");
        console.info(person.name)

        person.name = "Sudarsono"
        console.info(person.name)
    })

})