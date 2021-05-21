import React from 'react'; 
import MediaCard from '../Card/Card.component';
import './Lista.component.scss';

export default function Lista(props){
    const data = props.data;
    /*const listItems = data.map(
        (elem,index) => 
        <li className="text-left" key={elem.id}>
            <ProductResume to={props.abrirProducto(elem.id)}
                category={elem.category}
                image={elem.image}
                title={elem.title}/>
        </li>
    );*/
    const listItems = data.map(
        (elem,index) => 
        <li className="text-left" key={elem.id}>
            <MediaCard to={props.abrirProducto(elem.id)}
                category={elem.category}
                image={elem.image}
                title={elem.title}/>
        </li>
    );
    return(
        <ul className="list-group">{listItems}</ul>        
    );
}