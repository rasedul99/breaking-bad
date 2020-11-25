import React, { useState } from 'react'

const Search = ({getquery}) => {
    const [text, settext] = useState('')
    console.log(text);
    const onChange=(q)=>{
        settext(q)
        getquery(q)
    }
    return (
        <section className='search'>
            <form>
                <input type="text"
                 className="form-control"
                placeholder ="Search characters"
                value={text}
                onChange={(e)=>onChange(e.target.value)}
                autoFocus
                />
                
            </form>

        </section>
            
        
    )
}

export default Search
