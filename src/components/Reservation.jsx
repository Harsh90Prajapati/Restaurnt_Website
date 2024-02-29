import { useRef } from "react";

const Reservation = () => {
    
    const username =useRef();
    const useremail =useRef()
    const usermobile =useRef()
    const dateofreserve =useRef()
    const timeofreserve =useRef()
    const sizeofparty =useRef()
    const specialrequest =useRef()
    
    const handleSubmit =(event)=>{
        event.preventDefault()
        const name = username.current.value
        const email = useremail.current.value
        const number = usermobile.current.value
        const date = dateofreserve.current.value
        const time = timeofreserve.current.value
        const size = sizeofparty.current.value
        const request = specialrequest.current.value

        username.current.value =""
        useremail.current.value =""
        usermobile.current.value =""
        dateofreserve.current.value= ""
        timeofreserve.current.value = ""
        sizeofparty.current.value = ""
        specialrequest.current.value=""


        console.log(name,email,number,date,time , size , request)
        
    }

  return (
    <div id="reservation" className="bg-slate-600 p-10 rounded-lg shadow-2xl flex flex-col gap-8 justify-center items-center ">
        <div>
        <p className="text-sm text-slate-300">Book your Table</p>
        <h1 className="sm:text-5xl text-3xl font-semibold">Reservation</h1>
        </div>
      <form onSubmit={handleSubmit} className="flex flex-col max-w-2xl mx-auto w-full px-2 gap-2 ">
        <input ref={username} type="text" name="name" placeholder="Your Full Name" className="p-2 rounded-md outline-none bg-transparent border border-emerald-100 placeholder:text-sm placeholder:text-slate-400" required />
        <input ref={useremail} type="email" name="email" placeholder="Your Email" className="p-2 rounded-md outline-none bg-transparent border border-emerald-100 placeholder:text-sm placeholder:text-slate-400" required />
        <input ref={usermobile} type="tel" name="mobile" placeholder="Mobile Number" className="p-2 rounded-md outline-none bg-transparent border border-emerald-100 placeholder:text-sm placeholder:text-slate-400" required />
        <div className="w-full flex justify-center gap-2">
        <input ref={dateofreserve} type="date" name="date" required className="w-3/4 p-2 rounded-md outline-none bg-transparent border border-emerald-100 placeholder:text-sm placeholder:text-slate-400"/>
        <input ref={timeofreserve} type="time" name="time" className="w-1/4 p-2 rounded-md outline-none bg-transparent border border-emerald-100 placeholder:text-sm placeholder:text-slate-400" required />
        <input ref={sizeofparty} type="number" name="party-size" placeholder="Size" className="w-1/4 p-2 rounded-md outline-none bg-transparent border border-emerald-100 placeholder:text-sm placeholder:text-slate-400" required />
        </div>
        <textarea
          name="message"
          rows="3"
          ref={specialrequest}
          placeholder=" Your Message"
          className="p-2 rounded-md outline-none bg-transparent border border-emerald-100 placeholder:text-sm placeholder:text-slate-400"
          required
        ></textarea>
        <button type="submit" className="w-full py-2 bg-blue-400 rounded-lg hover:bg-indigo-400">Reserve</button>
      </form>
    </div>
  );
};

export default Reservation;
