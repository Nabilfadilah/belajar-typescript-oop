describe('Interface', () => {
    class Customer {
        constructor() {
            console.info("Create new customer")
        }
    }

    class Order {

    }
    it('should can create class', () => {
        
        // class Customer {
        // }

        // class Order {
        // }

        const customer: Customer = new Customer();
        const order = new Order();
    })

    it('should can create constructors', () => {
        new Customer()
        new Customer()
    })
})