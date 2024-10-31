describe('Inheritence', () => {
    
    // parent class
    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    // class turunan employee
    class Manager extends Employee {

    }

    class Director extends Manager {

    }

    it('should support inheritence', () => {
        const employee = new Employee("Abila");
        console.info(employee.name)

        const manager = new Manager("Budiono");
        console.info(manager.name)

        const director = new Director("Jokono")
        console.info(director.name)
    })
})