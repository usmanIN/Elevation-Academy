import React, { useContext } from 'react';

import { useParams , Link} from 'react-router-dom';
import {ContentAPI} from '../context/contentAPI';


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

function Post(){

    const [record] = useContext(ContentAPI);
    const {postName} = useParams();
    let content = record.filter(function(item){ return (item.slug===postName) })[0];
    let similar = record.filter(function(item){ return (item.category.toLowerCase()==content.category.toLowerCase()) });
    //[Math.floor(Math.random()*similar.length)]);

    return(
        <>
            <div className="mx-auto container">
                <div className='row'>
                    <div className='col-lg-2'></div>                    
                    <div className='col-lg-8'>
                        <h1>{content.title}</h1>            
                        <img src='' alt='demo image' style={{width:"100%", height:"100px"}} />
                        <p>{content.description}</p>                            
                    </div>                        
                    <div className='col-lg-2'></div>
                </div>      
            </div>
            <div className='mx-auto container'>
                <h4>More from the siren</h4>
                <div className='d-flex justify-content-start small-screen'>
                    {
                        shuffle(similar).slice(0,3).map(function(item,index){
                                return (
                                    <div className='card mx-2' key={index}>
                                        <div className='card-body'>
                                            <img src='' alt={item.title}/>
                                            <h4 className='card-text'>
                                                <Link to={"/"+item.category.toLowerCase()+"/"+item.slug} >{item.title}</Link>
                                            </h4>
                                            <p>{item.description.split(" ").splice(0, 20).join(" ")}</p>
                                        </div>                        
                                    </div>
                                )
                            
                        })
                    }                    
                </div>
            </div>
        </>
        
    )
}
export default Post;