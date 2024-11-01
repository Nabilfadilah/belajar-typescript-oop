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
        // console.info(`Hello ${employee.name}`)

        // Type case - video 57
        // mengecek chile paling bawah terlebih dahulu, jangan yang awal
        if (employee instanceof VicePresident) {
            const vp = employee as VicePresident
            console.info(`Hello vp ${vp.name}`)
        } else if (employee instanceof Manager) {
            const manager = employee as Manager
            console.info(`Hello manager ${manager.name}`)
        } else {
            console.info(`Hello employee ${employee.name}`)
        }
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