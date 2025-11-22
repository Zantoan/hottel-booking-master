import React, { use, useState } from 'react'
import Title from '../../components/Title'
import {assets, dashboardDummyData} from '../../assets/assets'

const Dashboard = () => {

  const [dashboardData, setDashboardData] = useState(dashboardDummyData);

  return (
    <div>
      <Title align='left' font='outfit' title='Bảng điều khiển' subTitle='Giám sát danh sách phòng của bạn,
       theo dõi đặt phòng và phân tích doanh thu — tất cả trong một nơi. Luôn được cập nhật với các thông tin 
       theo thời gian thực để đảm bảo hoạt động diễn ra suôn sẻ.'/>
       <div className='flex gap-4 my-8'>
        {/*-----Total Booking------- */}
        <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
          <img src={assets.totalBookingIcon} alt='' className='max-sm:hidden h-10'/>
          <div className='flex flex-col sm:ml-4 font-medium'>
            <p className='text-blue-500 text-lg'>Tổng số lượt đặt phòng</p>
            <p className='text-neutral-400 text-base'>{dashboardData.totalBookings}</p>
          </div>
        </div>
        {/*-----Total Revenue------- */}
        <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
          <img src={assets.totalRevenueIcon} alt='' className='max-sm:hidden h-10'/>
          <div className='flex flex-col sm:ml-4 font-medium'>
            <p className='text-blue-500 text-lg'>Tổng doanh thu</p>
            <p className='text-neutral-400 text-base'>${dashboardData.totalRevenue}</p>
          </div>
        </div>
       </div>
       {/*------Recent Bookings----- */}
       <h2 className='text-xl text-blue-950/70 font-medium mb-5'>Đặt phòng mới nhất</h2>
        <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll'>
        <table className='w-ful'>
        <thead className='bg-gray-50'>
          <tr>
            <th className='py-3 px-4 text-gray-800 font-medium'>Tên người dùng</th>
            <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Tên Phòng</th>
            <th className='py-3 px-4 text-gray-800 font-medium text-center'>Tổng thanh toán</th>
            <th className='py-3 px-4 text-gray-800 font-medium'>Trạng thái thanh toán</th>
          </tr>
        </thead>
      <tbody className='text-sm'>
          {dashboardData.bookings.map((item, index) => (
            <tr key={index}>
              <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                {item.user.userName}
              </td>
              <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>
                {item.room.roomType}
              </td>
              <td className='py-3 px-4 text-gray-700 border-t border-gray-300 text-center'>
                ${item.totalPrice}
              </td>
              <td className='py-3 px-4 border-t border-gray-300 flex'>
                <button className={`py-1 px-3 text-xs rounded-full mx-auto ${item.isPaid ? 'bg-green-200 text-green-600':
                  'bg-amber-300 text-yellow-600'}`}>
                  {item.isPaid ? 'Hoàn tất': 'Chờ xử lý'}
                </button>
              </td>
            </tr>
          ))}
      </tbody>
        </table>
        </div>
    </div>
  )
}

export default Dashboard