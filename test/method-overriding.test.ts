describe('Method Overriding', () => {

    class Employee {
        name: string;

        constructor(name: string) {
            // this = memanggil class saat ini
            this.name = name;
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`)
        }
    }

    class Manager extends Employee {
        // deklarasi ulang (method overriding)
        sayHello(name: string): void {
            // method oveeriding
            // console.info(`Hello ${name}, my name is ${this.name}, I am your manager`)
            
            // super = memanggil si parent class nya
            // .sayHello = memnaggil sayHello milik si parent classnya/Employee
            super.sayHello(name)
            console.info(`And, I am your manager`)
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