import { FaListAlt } from "react-icons/fa";
import SideBar from "./SideBar";
import { useState } from "react";
import DragDropTableTitle from "./DragDropTableTitle";
import Test from "./Test";
// import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
// const tableTitle = ["Name", "ID", "Country", "Deal Status", "Status"]
const Table = ({ data }) => {
    const [open, setOpen] = useState(false);
    const [sliceNumber, setSliceNumber] = useState(0)
    const [selectedTitleTable, setSelectedTitleTable] = useState(["Name", "ID", "Country", "Deal Status", "Status"])
    return (
        <div className="w-full relative">
            {/* table header  */}
            <div className="w-full  flex items-center justify-between px-5 py-3 border-b-2">
                <h1>Data</h1>
                <div
                    onClick={() => setOpen(!open)}
                    className="text-xl">
                    <FaListAlt />
                </div>
            </div >

            <div className="overflow-scroll w-full ">
                <table>
                    <thead>
                        <tr className="grid grid-flow-col  bg-slate-400">

                            <Test selectedTitleTable={selectedTitleTable} setSelectedTitleTable={setSelectedTitleTable} />
                        </tr>
                        {/* <tr className="grid grid-flow-col  bg-slate-400">
                            {
                                selectedTitleTable.map(title => (<th key={title} className="w-[300px] border-r-2 ">{title}</th>
                                ))
                            }
                        </tr> */}
                        {/* <DragDropTableTitle selectedTitleTable={selectedTitleTable} setSelectedTitleTable={setSelectedTitleTable}/> */}
                    </thead>
                    <tbody>
                        {data.slice(sliceNumber, sliceNumber + 10).map((item, index) => (<tr key={index} className="grid grid-flow-col  border-b-2">
                            {
                                (selectedTitleTable.includes("Name")) &&
                                <td style={{ order: selectedTitleTable.indexOf("Name") + 1 }} className="w-[300px] h-11 whitespace-nowrap  overflow-clip truncate border-r-2">{item.client_name}</td>
                            }
                            {(selectedTitleTable.includes("ID")) && <td style={{ order: selectedTitleTable.indexOf("ID") + 1 }} className="w-[300px] h-11 whitespace-nowrap  overflow-clip truncate border-r-2">{item.id}</td>}
                            {(selectedTitleTable.includes("Country")) && <td style={{ order: selectedTitleTable.indexOf("Country") + 1 }} className="w-[300px] h-11 whitespace-nowrap  overflow-clip truncate border-r-2">{item.country}</td>}
                            {(selectedTitleTable.includes("Deal Status")) && <td style={{ order: selectedTitleTable.indexOf("Deal Status") + 1 }} className={`w-[300px] h-11 whitespace-nowrap  overflow-clip truncate border-r-2 ${(item.deal_status == 0) ? 'bg-red-400' : "bg-green-300"}`}>{(item.deal_status == 0) ? "No deal Status" : "Done Deal Status"}</td>}
                            {(selectedTitleTable.includes("Status")) && <td style={{ order: selectedTitleTable.indexOf("Status") + 1 }} className="w-[300px] h-11 whitespace-nowrap  overflow-clip truncate border-r-2">{item.status}</td>}




                        </tr>))}
                    </tbody>

                </table>
                {/* table content  */}

            </div>

            {/* table footer  */}
            <div className="flex gap-5 items-center justify-end px-10">
                <p
                    onClick={() => { if (sliceNumber >= 10) setSliceNumber(sliceNumber - 10) }}
                    className="bg-slate-400 cursor-pointer rounded-lg p-1 px-2 text-white ">Prev</p>
                <div>{`${sliceNumber} - ${sliceNumber + 10}`}</div>
                <p
                    onClick={() => { if (data.length - 10 > sliceNumber) setSliceNumber(sliceNumber + 10) }}
                    className="bg-slate-400 cursor-pointer rounded-lg p-1 px-2 text-white">Next</p>
            </div>
            {
                open &&
                <div className="absolute top-0 right-0 bg-slate-500 w-[300px] h-screen transition-all duration-300 ease-in-out">
                    <SideBar setOpen={setOpen} setSelectedTitleTable={setSelectedTitleTable} />
                </div>
            }
        </div>
    );
};

export default Table;