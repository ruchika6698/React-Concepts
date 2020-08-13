import React, { useState,useEffect } from 'react';
import { from } from 'rxjs'
import { map,filter,delay,mergeMap } from 'rxjs/operators';

let numberObservable = from([1,2,3,4,5]);
let squareNumbers = numberObservable.pipe(
    filter(val => val > 2),
    mergeMap(val => from([val]).pipe(delay(1000,val))),
    map(val => val * val)
);

// const get = async name => {
//     const [ result:flowers] = await fetch("").then(res => res.json);
//     return flowers.filter(flower=>flower.name.includes(name));
// }

const useObservable = (observable,setter)=>{
    useEffect(()=>{
        let subscription = observable.subscribe(result =>{
            setter(result);
        })
        return () => subscription.unsubsribe();
    }, [observable,setter]
    );
}

export function Observable(){

    const [currentNumber,setCurrentNumber] = useState(0);

    useObservable(squareNumbers,setCurrentNumber);

    return(
        <div align="center">
            <h2>Hello</h2>
            <h2>Square of Number</h2>
            <p>Current Number is: {currentNumber}</p>
        </div>
    );
}

export default Observable;