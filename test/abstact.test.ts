describe('Abstract Class', () => {

    // kalau tita menggunakan kata cunki abstrack maka didepanya harus menggunakan abstacrk  
    abstract class Customer {
        readonly id: number
        abstract name: string

        constructor(id: number) {
            this.id = id
        }

        hello() {
            console.info('Hello')
        }

        // abstack method
        abstract sayHello(name: string): void 
    }

    class RegularCustomer extends Customer {
        name: string

        constructor(id: number, name: string) {
            super(id)
            this.name = name
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`)
        }
    }

    it('should support method', () => {
        const customer1 = new RegularCustomer(1, "Eljju")
        customer1.sayHello("Burhan")
    })
})