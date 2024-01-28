import React, {useState} from "react";
import TableValues from "./TableValues.json";
import * as FA from "react-icons/fa"
import * as IO from "react-icons/io"
const Pagnation = (num) => {
    return (
        <>
            <p class = "px-5"> {num} </p>
        </>
    )
}
const Table = () => {
    const [currentPage, setPage] = useState(0);
    const [dropdown, setDropdown] = useState(false);
    const [numItem, setNumItem] = useState(1);

    const page = [];
    for(let i = 1; i <= TableValues.RandomValues.length; i++){
        page.push(i);
    }

    return(
        <div class = "border border-1 rounded-xl shadow-lg w-11/12 ">
            <table class = "w-full">
                <thead class = "h-[50px] bg-gray-50">
                    <tr class = "  ">
                        <td class = "text-gray-400 font-semibold p-5">Item</td>
                        <td class = "text-gray-400 font-semibold p-5">Subsystem</td>
                        <td class = "text-gray-400 font-semibold p-5">Assigne</td>
                        <td class = "text-gray-400 font-semibold p-5">Status</td>
                    </tr>
                </thead>
                <tbody>
                    {console.log(TableValues.RandomValues.length)}
                    {
                        
                        TableValues.RandomValues.slice(currentPage, currentPage + numItem).map((data, key)=> (
                        
                            <tr class = " cursor-pointer transition ease-in-out delay-150 hover:bg-gray-100">
                                <td class = "font-normal text-sm p-5">{data.item}</td>
                                <td class = "font-normal text-sm p-5">{data.subsystem}</td>
                                <td class = "font-normal text-sm p-5">{data.owner}</td>
                                {data.status == "Purchased" ? 
                                    <td class = "">
                                        <div class = "rounded-xl h-[40px] w-[100px] bg-green-500" >
                                            <p class = "text-center py-1.5 font-light text-white">{data.status}</p>
                                        </div>
                                    </td> :
                                    data.status == "Sent" ?
                                    <td class = "">
                                        <div class = "rounded-xl h-[40px] w-[100px] bg-yellow-500" >
                                            <p class = "text-center py-1.5 font-light text-white">{data.status}</p>
                                        </div>
                                    </td> :
                                   <td class = "">
                                   <div class = "rounded-xl h-[40px] w-[100px] bg-red-500" >
                                       <p class = "text-center py-1.5 font-light text-white">{data.status}</p>
                                   </div>
                               </td>

                                }
                            </tr>
                        ))
                    }
                    
                    
                </tbody>
                
            </table>
            <div class = "flex flex-cols justify-between h-[50px] p-5">
                <div class = " ">
                    <div onClick={()=>setDropdown(!dropdown)} class = "flex flex-row cursor-pointer">
                        <p class = "pl-5 pr-2.5 text-gray-400 cursor-pointer">1</p>
                        <i class = "py-0.5 text-xl text-gray-400"><IO.IoMdArrowDropdown/></i>

                    </div>
                    {
                        dropdown ? 
                            <div class = "my-1 relative border border-transparent shadow-xl rounded-b-lg bg-white">
                                <div 
                                    onClick = {() => setNumItem(1)}
                                    class = "mx-2 w-[30px] h-[40px]  "
                                >
                                    <p class = "text-gray-400 text-center cursor-pointer">1</p>
                                </div>
                                <div
                                    onClick = {()=> setNumItem(3)} 
                                    class = "mx-2 w-[30px] h-[40px]  "
                                >
                                    <p class = "text-gray-400 text-center cursor-pointer">3</p>
                                </div>
                                <div 
                                    onClick = {()=>setNumItem(5)}
                                    class = "mx-2  w-[30px] h-[40px] "
                                >
                                    <p class = "text-gray-400 text-center cursor-pointer">5</p>
                                </div>
                                <div 
                                    onClick = {()=>setNumItem(10)}
                                    class = "mx-2 w-[30px] h-[40px]"
                                >
                                    <p class = "text-gray-400 text-center cursor-pointer">10</p>
                                </div> 

                            </div>
                        
                        : null
                    }
                    
                    
                </div>
                <div class = "flex flex-cols">
                    {
                        page.map((data,key) => (
                            <p 
                                onClick = {()=>setPage(key)}
                                class = "px-5 text-gray-400 cursor-pointer"
                            >
                                {key + 1}
                            </p>
                        ))
                    }


                </div>
                <div class = "flex flex-cols">
                    <i  
                        onClick = {() =>setPage(currentPage-numItem)}
                        class = "cursor-pointer px-5 text-gray-400"
                    >
                        <FA.FaArrowLeft/>
                    </i>
                    <i  onClick = {() =>setPage(currentPage+numItem)}
                        class = "cursor-pointer px-5 text-gray-400"
                    >
                        <FA.FaArrowRight/>
                    </i>
                </div>
            </div>

           

        </div>
        
    )
}
export default Table;