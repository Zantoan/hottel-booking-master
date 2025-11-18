import React from "react";
import heroImage from "../assets/heroImage.png"; 
import { assets, cities } from "../assets/assets";

const Hero = () => {
  return (
    <div
      className="flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Tiêu đề */}
      <p className="bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20">
        Trải nghiệm khách sạn đẳng cấp nhất
      </p>
      <h1 className="font-playfair text-2xl md:text-5xl md:text-[45px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4">
        Khám phá điểm đến hoàn hảo
      </h1>
      <p className="max-w-130 mt-2 text-sm md:text-base">
        Sự sang trọng và thoải mái bậc nhất đang chờ đón bạn tại những khách sạn <br />
        và khu nghỉ dưỡng hàng đầu thế giới. Hãy bắt đầu hành trình của bạn ngay hôm nay.
      </p>

      {/* Form tìm kiếm */}
      <form className='bg-white text-gray-500 rounded-lg px-3 py-3  flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto mt-3'>

        {/* Thành phố / điểm đến */}
        <div>
          <div className='flex items-center gap-2'>
            <img src={assets.calenderIcon} alt="calenderIcon" className="h-4"/>
            <label htmlFor="destinationInput">Điểm đến</label>
          </div>
          <input 
            list='destinations' 
            id="destinationInput" 
            type="text" 
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" 
            placeholder="Nhập thành phố" 
            required 
          />
          <datalist id="destinations">
            {cities.map((city,index)=>(
              <option value={city} key={index}></option>
            ))}
          </datalist>
        </div>

        {/* Check-in */}
        <div>
          <div className='flex items-center gap-2'>
            <img src={assets.calenderIcon} alt="calenderIcon" className="h-4"/>
            <label htmlFor="checkIn">Nhận phòng</label>
          </div>
          <input 
            id="checkIn" 
            type="date" 
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" 
          />
        </div>

        {/* Check-out */}
        <div>
          <div className='flex items-center gap-2'>
            <img src={assets.calenderIcon} alt="calenderIcon" className="h-4"/>
            <label htmlFor="checkOut">Trả phòng</label>
          </div>
          <input 
            id="checkOut" 
            type="date" 
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" 
          />
        </div>

        {/* Khách */}
        <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
          <label htmlFor="guests">Số khách</label>
          <input 
            min={1} max={4} 
            id="guests" 
            type="number" 
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16" 
            placeholder="0" 
          />
        </div>

        {/* Nút tìm kiếm */}
        <button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1' >
          <img src={assets.searchIcon} alt="searchIcon" className="h-7"/>
          <span>Tìm kiếm</span>
        </button>
      </form>
    </div>
  );
};

export default Hero;
