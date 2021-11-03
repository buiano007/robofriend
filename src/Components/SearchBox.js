import React from "react";


const SearchBox = ({ searchfield, searchChange}) =>{
    return (
        <div className='ps2'>
            <input 
            className="tc bg-light-green dib br3 pa3 ma2  v grow bw2 shadow-5"
             type='search'
             placeholder='search robots'
             onChange={searchChange}
              />
         </div>
        );
}



export default SearchBox;