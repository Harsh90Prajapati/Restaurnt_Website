import image1 from "../assets/1.jpg"
import image2 from "../assets/2.jpg"
import image3 from "../assets/3.jpg"

const Gallery =()=>{
    return(
        <div className="py-20" id="gallery">
        <p className="text-sm text-slate-300">How it Looks </p>
        <h1 className="text-5xl font-semibold">Gallery</h1>
        <div className="mt-16 flex sm:flex-row flex-col gap-4 w-full justify-center items-center">
            <div>
                <img src={image1} alt="" className="sm:w-[400px]  w-full sm:h-[297px] opacity-25 hover:opacity-100 duration-300 hover:scale-110 hover:duration-500 rounded-lg" />
            </div>
            <div>
                <img src={image2} alt="" className="sm:w-[400px]  w-full sm:h-[297px] opacity-25 hover:opacity-100 duration-300 hover:scale-110 hover:duration-500 rounded-lg" />
            </div>
            <div>
                <img src={image3} alt="" className="sm:w-[400px]  w-full sm:h-[297px] opacity-25 hover:opacity-100 duration-300 hover:scale-110 hover:duration-500 rounded-lg" />
            </div>
        </div>
        </div>
    )
}

export default Gallery;