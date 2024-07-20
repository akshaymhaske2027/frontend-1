import { IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


const CartItem = () => {
  return (
    <div className='px-5'>
<div>
    <img className='w-[5rem] h-[5rem] object-cover' src="https://images.pexels.com/photos/7469289/pexels-photo-7469289.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

</div>
<div className='flex items-center justify-between lg:w-[70%]'>
    <div className='space-y-1 lg:space-y-3 w-full' >
        <p>biryani</p>
        <div className='flex justify-between items-center'>
<div className='flex items-center space-x-1'>
<IconButton >
<RemoveCircleOutlineIcon/>
</IconButton>
<div className='w-5 h-5 text-xs flex items-center justify-center'>
{5}
</div>
</div>
        </div>

    </div>

</div>
    </div>
  )
}

export default CartItem