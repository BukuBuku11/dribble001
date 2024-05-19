import React from 'react'
import { SearchLogo } from '../svgs'

const Search = () => {
  return (
    <div className='font-mono'>
      <SearchLogo className='md:hidden' />
        <input type='Search' name='Search' placeholder='Search...' className='outline-none rounded-full h-12 pl-4 w-[15rem] hidden lg:block'>
        </input>
    </div>
  )
}

export default Search
