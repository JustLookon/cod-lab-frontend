import React from "react"
import Image from 'next/image'

function Slider() {

    return(

        <>
        <div className="mt-16"></div>
            <Image className="w-screen  object-cover h-[70vh]" src={"https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600"} width={600} height={600} alt=''></Image>
        </>
        
    )
}
export default Slider