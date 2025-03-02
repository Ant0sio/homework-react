import  {FC, ReactNode} from 'react';
import {ISimpson} from "../../models/ISimpson.ts";
type MyPropsSimpson={
    hero:ISimpson
    children:ReactNode
}


const CharacterComponent:FC<MyPropsSimpson> = ({hero,children}) => {

    return (
        <div className='bg-yellow-950 text-orange-400 rounded-xl border-4 border-slate-200'>
           <h1 className="text-3xl font-bold underline">{hero.name} {hero.surname}</h1>
            <p>Age: {hero.age} years</p>
            <p className='rounded-md border-4 border-orange-500'>{children}</p>
            <img src={hero.photo} alt={hero.name}/>
        </div>
    );
};

export default CharacterComponent;