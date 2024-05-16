import React from 'react'
import { SearchLogo } from '../svgs'

const Search = () => {
  return (
    <div>
      <SearchLogo className='md:hidden' />
        <input type='Search' name='Search' placeholder='Search...' className='rounded-full h-12 pl-4 hidden lg:block'>
        </input>
    </div>
  )
}

export default Search
