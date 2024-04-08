import React from "react";
import KeyAdvantages from "./KeyAdvantages";
import Image from "next/image";

function KeyAdvantagesCard(props: any){
    return(
        <>
        <div className="flex flex-col p-5 px-6 items-center border-[1px] border-gray-400 rounded gap-3 ">
                <Image width={40} height={40} src={props.logo} alt="" ></Image>
                
                <h3 className="font-bold ">{props.title}</h3>
            
                <p className="">{props.description}

</p>
        </div>
        </>
    )
}

export default KeyAdvantagesCard