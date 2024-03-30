import React from 'react'
import { GrAdd } from "react-icons/gr";
import { IoMdCart } from "react-icons/io";
import { FaBusSimple } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { FaBowlFood } from "react-icons/fa6";
import { TbAlignBoxCenterMiddleFilled } from "react-icons/tb";
import { BsThreeDots } from "react-icons/bs";
import { BarChart, Bar, Legend, ResponsiveContainer, Tooltip } from 'recharts'

import u1 from "./u1.png"
import u2 from "./u2.png"
import u3 from "./u3.png"

const data = [
  {
    value: 600,
  },
  {
    value: 900,
  },
  {
    value: 800,
  },
  {
    value: 400,
  },
  {
    value: 600,
  },
  {
    value: 600,
  },
  {
    value: 800,
  },
  {
    value: 400,
  },
  {
    value: 600,
  },
  {
    value: 900,
  },
  {
    value: 800,
  },
  {
    value: 400,
  },
  {
    value: 600,
  },
  {
    value: 500,
  },
  {
    value: 800,
  },
  {
    value: 400,
  },
  {
    value: 600,
  },
  {
    value: 900,
  },
  {
    value: 800,
  },
  {
    value: 400,
  },
  {
    value: 600,
  },
  {
    value: 1000,
  },
  {
    value: 800,
  }
];

function Expences() {
  return (
    <div className='flex flex-basis relative'>
      <div className='ml-[80px] mt-[30px] mb-[40px] basis-2/3 w-2/3'>
        <div className='flex justufy-between item-center '>
          <div className=''>
            <div className='font-poppins font-semibold text-[30px]'>
              Expenses
            </div>
            <div className='mt-[5px] font-poppins text-gray-500 text-[15px]'>
              01 - 25 March, 2020
            </div>
          </div>
          <div className='flex relative mt-[5px] px-[150px] relative'>
            <img className='h-10 w-10 absolute z-2 rounded-full  ml-[85px] bg-cover bg-no-repeat bg center border-white border-1'
              src={u1} />
            <img className='h-10 w-10 z-1 absolute  rounded-full shrink-0 grow-0 ml-[55px] bg-cover bg-no-repeat bg center border-white border-2'
              src={u2} />
            <img className='h-10 w-10 z-0 rounded-full shrink-0 grow-0 ml-[25px] bg-cover bg-no-repeat bg center border-white border-2'
              src={u3} />
            <div className='h-[38px] w-[38px] rounded-full shrink-0 grow-0 ml-[70px] bg-cover bg-no-repeat bg-center border-[#D2DCE8] text-[#D2DCE8] text-[25px] border-2'>
              <GrAdd className='ml-[5px] mt-[5px]' />
            </div>

          </div>
        </div>
        <div className='mt-[30px] mb-[40px]'>

          {/* <Chart/> */}
          <div className='h-[3rem] bg-white rounded-sm flex flex-col'>
            <div className='w-full flex-1'>
              <ResponsiveContainer width='100%' height='100%'>
                <BarChart
                  data={data}
                  margin={{
                    top: 5,
                    right: -5,
                    left: -5,
                    bottom: 0
                  }}
                >
                  <Tooltip />
                  <Bar dataKey="value" fill='#A7C7E7' />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

        <div className='font-poppins'>
          <div className='flex w-[400px]'>
            <div className='font-bold'>Today</div>
            <div className='text-[#D2DCE8] mt-[5px] ml-[400px]'> <BsThreeDots /></div>
          </div>
          <hr className='mt-[10px] w-[460px]' />

          <div className='mt-[20px] ml-[10px] w-[450px] h-full space-y-4'>

            <div className='flex gap-[10px] w-[500px]'>
              <div className='rounded-full shrink-0 grow-0 bg-blue-500 text-white w-[40px] h-[40px] flex items-center justify-center'>
                <IoMdCart />
              </div>
              <div className='flex justify-between w-[400px]'>
                <div className='flex-col'>
                  <div className='text-black text-[16px] font-medium'>Grocery</div>
                  <div className='text-gray-500 text-[14px]'>5.12 pm . Belanja de pasar</div>
                </div>
                <div className='text-[16px] font-semibold'>-326,800</div>
              </div>
            </div>

            <div className='flex gap-[10px] '>
              <div className='rounded-full shrink-0 grow-0 bg-purple-600 text-white w-[40px] h-[40px] flex items-center justify-center'>
                <FaBusSimple />
              </div>
              <div className='flex justify-between w-[500px]'>
                <div className='flex-col'>
                  <div className='text-black text-[16px] font-medium'>Transportation</div>
                  <div className='text-gray-500 text-[14px]'>5:12 pm  •  Naik bus umum</div>
                </div>
                <div className='text-[16px] font-semibold'>-15.000</div>
              </div>
            </div>

            <div className='flex gap-[10px] '>
              <div className='rounded-full shrink-0 grow-0 bg-orange-500 text-white w-[40px] h-[40px] flex items-center justify-center'>
                <IoMdHome />
              </div>
              <div className='flex justify-between w-[400px]'>
                <div className='flex-col'>
                  <div className='text-black text-[16px] font-medium'>Housing</div>
                  <div className='text-gray-500 text-[14px]'>5:12 pm  •  Bayar Listrik</div>
                </div>
                <div className='text-[16px] font-semibold'>-185.750</div>
              </div>
            </div>

          </div>
        </div>

        <div className='mt-[40px] font-poppins'>
          <div className='flex w-[440px]'>
            <div className='font-bold'>Monday, 23 March 2020</div>
            <div className='text-[#D2DCE8] mt-[5px] '> </div>
          </div>
          <hr className='mt-[10px] w-[460px]' />

          <div className='mt-[30px] ml-[10px] w-[500px] h-full space-y-4'>

            <div className='flex gap-[10px] w-[500px] mt-[5px]'>
              <div className='rounded-full shrink-0 grow-0 bg-[#DC3434] text-white w-[40px] h-[40px] flex items-center justify-center'>
                <FaBowlFood />
              </div>
              <div className='flex justify-between w-[400px]'>
                <div className='flex-col'>
                  <div className='text-black text-[16px] font-medium'>Food and Drink</div>
                  <div className='text-gray-500 text-[14px]'>5:12 pm  •  Makan Steak</div>
                </div>
                <div className='text-[16px] font-semibold'>-156.000</div>
              </div>
            </div>

            <div className='flex gap-[10px] '>
              <div className='rounded-full shrink-0 grow-0 bg-[#4BA83D] text-white w-[40px] h-[40px] flex items-center justify-center'>
                <TbAlignBoxCenterMiddleFilled />
              </div>
              <div className='flex justify-between w-[400px]'>
                <div className='flex-col'>
                  <div className='text-black text-[16px] font-medium'>Entertainment</div>
                  <div className='text-gray-500 text-[14px]'>5:12 pm  •  Nonton Bioskop</div>
                </div>
                <div className='text-[16px] font-semibold'>-35.200</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

  )
}

export default Expences 