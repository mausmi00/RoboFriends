import React from 'react';
import Card from './Card';


const CardList = ({robots})=> {
    /*if(true){
        throw new Error('NOOOOOOOOOO');
    }*/
    return (
        robots.map((robot,i)=> {
            return <Card key= {i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>  
        })  

    );
}
export default CardList;