describe('Properties', () => {

    class Customer {
        readonly id: number;
        // name: string;
        name: string = "sasa";
        age?: number;

        constructor(id: number, name: string) {
            this.id = id;
            this.name = name;
        }

        // method - video 46
        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`)
        }
    }

    it('should can have properties', () => {
        const customer = new Customer(1, "Jhone")
        customer.age = 20;

        console.info(customer);
        console.info(customer.id);
        console.info(customer.name);
        console.info(customer.age);
    })

    // method - video 46
    it('should can have methods', () => {
        const customer = new Customer(1, "Abil")
        customer.sayHello("Fadilah")
    })
    
})