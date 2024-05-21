import { useState } from "react";

const Reservation = () => {

  const [reservation , setReservation] = useState(false)
  const [formData,setFormData]=useState({
    username: '',
    useremail: '',
    usermobile: '',
    date: '',
    time: '',
    sizeofparty: '',
    specialrequest: ''
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)   
    setReservation(true)
  };

  return (
    <div
      id="reservation"
      className="bg-slate-800 sm:py-20 mx-4 py-10 px-2 max-w-6xl lg:mx-auto  rounded-lg shadow-2xl flex flex-col gap-16 justify-center items-center"
    >

      <div>
        <p className="text-sm text-slate-300">Book your Table</p>
        <h1 className="sm:text-5xl text-3xl font-semibold">Reservation</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-2xl mx-auto w-full px-2 gap-2 "
      >
        <input
          value={formData.username}
          onChange={handleChange}
          type="text"
          name="username"
          placeholder="Your Full Name"
          className="p-2 rounded-md outline-none bg-transparent border border-emerald-100 placeholder:text-sm placeholder:text-slate-400"
          required
        />
        <input
          value={formData.useremail}
          onChange={handleChange}
          type="email"
          name="useremail"
          placeholder="Your Email"
          className="p-2 rounded-md outline-none bg-transparent border border-emerald-100 placeholder:text-sm placeholder:text-slate-400"
          required
        />
        <input
           value={formData.usermobile}
           onChange={handleChange}
          type="tel"
          name="usermobile"
          placeholder="Mobile Number"
          className="p-2 rounded-md outline-none bg-transparent border border-emerald-100 placeholder:text-sm placeholder:text-slate-400"
          required
        />
        <div className="w-full flex justify-center gap-2">
          <input
             value={formData.date}
             onChange={handleChange}
            type="date"
            name="date"
            // required
            className="w-3/4 p-2 rounded-md outline-none bg-transparent border border-emerald-100 placeholder:text-sm placeholder:text-slate-400"
          />
          <input
             value={formData.time}
             onChange={handleChange}
            type="time"
            name="time"
            className="w-1/4 p-2 rounded-md outline-none bg-transparent border border-emerald-100 placeholder:text-sm placeholder:text-slate-400"
            // required
          />
          <input
            value={formData.sizeofparty}
            onChange={handleChange}
            type="number"
            name="sizeofparty"
            placeholder="Size"
            className="w-1/4 p-2 rounded-md outline-none bg-transparent border border-emerald-100 placeholder:text-sm placeholder:text-slate-400"
            // required
          />
        </div>
        <textarea
          name="specialrequest"
          rows="3"
          value={formData.specialrequest}
          onChange={handleChange}
          placeholder=" Your Message"
          className="p-2 rounded-md outline-none bg-transparent border border-emerald-100 placeholder:text-sm placeholder:text-slate-400"
        ></textarea>
        <button
          type="submit"
          className="w-full py-2 bg-blue-400 rounded-lg hover:bg-indigo-400"
        >
          Reserve
        </button>
      </form>
      {reservation?<div className=" text-black bg-white max-w-2xl text-start p-4 mx-auto w-full rounded-lg shadow-2xl">
        <p>Name of Customer : {formData.username}</p>
        <p>Email of Customer: {formData.useremail}</p> 
        <p>Mobile No. of Customer: {formData.usermobile}</p>
        <p>Date of Reservation: {formData.date}</p>
        <p>Time of Reservation: {formData.time}</p>
        <p>No. of People: {formData.sizeofparty}</p>
        <p>Special Request: {formData.specialrequest}</p>
      </div>:""}
    </div>
  );
};

export default Reservation;
