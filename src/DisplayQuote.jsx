import  React  from  'react';

const  DisplayQuote = ({ quote }) => {
    return (
        <div  className="DisplayQuote">
        
            <img  src={quote.image}  alt="carton character"  />
            <ul>
                <li>Quote : {quote.quote}</li>
                <li>
                    Character : {quote.character}
                </li>
                <li>Character direction : {quote.characterDirection}</li>
            </ul>
        </div>
    );
};

export  default  DisplayQuote;