describe('Interface', () => {

    interface HasName {
        name: string;
    }

    interface CanSayHello {
        sayHello(name: string): void;
    }

    // implements interface class
    class Person implements HasName, CanSayHello {
        name: string;

        // contraktor mandatori
        constructor(name: string){
            this.name = name;
        }

        // method
        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`)
        }
    }

    it('should support interface', () => {
        const person = new Person("Gordon")
        person.sayHello("Sanusi")
    })
})