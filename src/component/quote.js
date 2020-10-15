import React, {  useState } from 'react'

const Quote=()=>{
    const[quotes, setQuotes]=useState('')
    const[author, setAuthor]=useState('')
   
const quoteFetching=()=>{
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(res=>res.json())
    .then(result=>{
        const randomQuote=result.quotes[  Math.floor(Math.random()*result.quotes.length)]
             setQuotes(randomQuote.quote)
             setAuthor(randomQuote.author)
    })
    }
const handleClick=()=>{
    quoteFetching()
}
    
return(
    <div className="quote-wrapper">
    <div className="quote-heading">
      <h2>The Random Quote Generator</h2>
    </div>

    <div className="quote-body">
      <div className="icon-quote">
        <span className="icon">
          <i className="fas fa-quote-left"></i>
        </span>
        <span className="quote">{quotes}</span>
      </div>
      <div className="author">― {author}</div>

      <div className="quote-buttons">
        <div className="social">
          <a href="https://github.com/nuha90" >
          <i className="fab fa-github" ></i>
          </a>
        </div>

        <div className="btn">
          <button id="quote-btn" onClick={handleClick}>New Quote</button>
        </div>
      </div>
    </div>

    <div className="footer">
      <p>Powered by Nouha Najah</p>
    </div>
</div>
)
}
export default Quote