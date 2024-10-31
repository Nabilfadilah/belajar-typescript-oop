describe('Visibility', () => {
    class Counter {
        // privete agar yang akses cuma dalam class
        // private counter: number = 0;

        // protedted, bisa akses di dalam class dan turunan class nya
        protected counter: number = 0;

        // method
        public increment(): void {
            this.counter++
        }

        public getCounter(): number {
            return this.counter;
        }
    }

    // class yang bisa 
    class DoubleCounter extends Counter {

        public increment(): void {
            this.counter += 2;
        }
    }
    
    it('should support private', () => {
        const counter = new Counter();
        counter.increment()
        counter.increment()
        counter.increment()
        console.info(counter.getCounter())
    })

    it('should support protected', () => {
        const counter = new DoubleCounter();
        counter.increment()
        counter.increment()
        counter.increment()
        console.info(counter.getCounter())
    })
})