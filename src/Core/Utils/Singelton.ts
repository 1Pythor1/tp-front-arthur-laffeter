export class Singelton<T>{
    instance: T | null = null;
    private constructor(instance: T){
        if(this.instance) {
            return;
        }
        this.instance = instance;
    }
    static getInstance<T>(instance: T): Singelton<T>{        
        return new Singelton<T>(instance);
    }
}