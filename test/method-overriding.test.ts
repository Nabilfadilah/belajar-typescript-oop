describe('Method Overriding', () => {

    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`)
        }
    }

    class Manager extends Employee {
        // deklarasi ulang (method overriding)
        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}, I am your manager`)
            // super.sayHello(name)
        }
    }


    it('should support in typescript', () => {
        // memanggil class employee
        const employee = new Employee("Akamaru")
        employee.sayHello("Prononis")

        // memanggil class manager
        const manager = new Manager("Burhanudin")
        manager.sayHello("Prabowo")
    })

})