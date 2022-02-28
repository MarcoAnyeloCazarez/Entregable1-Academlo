// import React from 'react';
import { useState } from 'react';
import quotes from '../quotes.json'
import colors from './Colors';


const getRandom = () => Math.floor(Math.random() * quotes.length)



/* ----------------   Card quote box  ---------------------- */
const QuoteBox = () => {
    const [ Quote, setQuote ] = useState( quotes[getRandom()])

    const changeQuote = () => {
        const random = getRandom() 
        setQuote(quotes[random])
    }
    
    let color = colors[Math.floor(Math.random() * colors.length)]
    document.body.style = `background: ${color}`
        
    return (
        <div className='quoteCard' style={{color: color}}>
            <h3><i className="fa-solid fa-quote-right"></i>  {Quote.quote}  <i className="fa-solid fa-quote-right"></i></h3>
            <h4> <i class="fa-solid fa-book"></i> {Quote.author}  </h4>
            <button onClick={changeQuote}><i class="fa-solid fa-angle-right"></i></button>
        </div>
    );
};

/* ------------------------------------------------------- */



export default QuoteBox;
