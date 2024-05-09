
import  AT1 from '/assets/avatar1.jpg'
import  AT2 from '/assets/avatar2.jpg'
import  AT3 from '/assets/avatar3.jpg'
import { Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const data =[
  {
    avatar: AT1,
    name : 'Aditya',
    review: 'random'
  },
  {
    avatar: AT2,
    name : 'Aman',
    review: 'random'
  },
  {
    avatar: AT3,
    name : 'Ishan',
    review: 'random'
  }
]

function Testimonial() {
  return (
    <div id="testimonial" className='my-20 px-8' >
      <h5 className='sm:text-sm text-xs text-slate-300'>Review from Client</h5> 
      <h2 className='sm:text-5xl text-3xl font-semibold pb-10'>Testimonials</h2>    
      <Swiper className=" sm:w-3/5 "
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
       >
       {data.map(({avatar, name , review}, index)=>{
        return(
          <SwiperSlide className='flex flex-col justify-center items-center p-8 bg-[#2c2c6c] rounded-xl text-center' key={index}>
          <div className="w-16 overflow-hidden rounded-full border-2 border-blue-300 ">
           <img src={avatar} alt="Avatar-1" />
          </div>
          <h5 className='pt-1 text-sm font-thin'>{name}</h5>
          <small className='block w-4/5 my-4'>
          {review}
          </small>
        </SwiperSlide>
        )
       })}
      </Swiper>    
    </div>
  )
}

export default Testimonial