describe('Polymorphism', () => {

    class Employee {
        constructor(public name: string) {

        }
    }

    class Manager extends Employee {
        
    }

    class VicePresident extends Manager {
        
    }

    function sayHello(employee: Employee): void {
        console.info(`Hello ${employee.name}`)
    }

    it('should support', () => {
        let employee: Employee = new Employee("Eldo")
        console.info(employee)

        // polymorphism dapat diubah isinya
        employee = new Manager("Eldo")
        console.info(employee)

        employee = new VicePresident("Eldo")
        console.info(employee)
    })

    // bisa mengerim tidak hanya objek class tersebut tapi juga turunan-turunannya
    it('should support method parameter polymorphism', () => {
        sayHello(new Employee("Borka"))
        sayHello(new Manager("Amengka"))
        sayHello(new VicePresident("Tamiya"))
    })

})