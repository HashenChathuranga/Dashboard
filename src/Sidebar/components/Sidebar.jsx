import React from 'react'
import img from "./PfImage .jpeg"
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="bg-neutral-900 w-40 p-10 flex flex-col text-white rounded-3xl ml-[40px] mt-[40px]">
      <div className='relative'>
        <div className='px-[40px] absolute item-center text-center justify-center'>
          <div className='absolute  item-center w-[20px] h-[20px]
           rounded-full shrink-0 grow-0 bg-red-700 text-center  text-white transform-translate-2'>4</div>
        </div>
        <img className='w-[50px] h-[50px] object-cover rounded-md' src={img} alt="" />
      </div>

      <div className="bg-black-40 text-[30px] text-bold">Samantha</div>
      <span className='text-neutral-100 text-sm'>samantha@email.com</span>
      <Link to="/dashboard"><div className="bg-black-100 mt-[40px]">Dashboard</div></Link>
      <Link to="/"><div className="bg-black-100 mt-[20px]">Expenses</div></Link>
      <Link to="/wallets"><div className="bg-black-100 mt-[20px]">Wallets</div></Link>
      <Link to="/summery"><div className="bg-black-100 mt-[20px]">Summary</div></Link>
      <Link to="/accounts"><div className="bg-black-100 mt-[20px]">Accounts</div></Link>
      <Link to="/setting"><div className="bg-black-100 mt-[20px]">Setting</div></Link>
    </div>
  )
}

