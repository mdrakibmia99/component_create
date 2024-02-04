import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
const tableTitle = ["Name", "ID", "Country", "Deal Status", "Status"]
const SideBar = ({ setOpen ,setSelectedTitleTable,selectedTitleTable}) => {
    const [checkedItem, setCheckedItem] = useState(tableTitle);
    const handleCheckboxChange = (title) => {
        if (checkedItem.includes(title)) {
            const filterChecked = checkedItem.filter(item => item != title)
            // console.log(filterChecked, "fch")
            setCheckedItem(filterChecked);
            setSelectedTitleTable(filterChecked);
        } else {
            setCheckedItem([...checkedItem, title]);
            setSelectedTitleTable([...checkedItem, title]);

        }
        // console.log(title)
    };
    // console.log(checkedItem, "rakib")
    return (
        <div>
            <div className="flex justify-end border-b-2">
                <div
                    className="text-3xl pr-5 py-5"
                    onClick={() => setOpen(false)}> <IoIosCloseCircle /></div>
            </div>
            <div className="mt-5 ml-5 ">
                {tableTitle.map((title, index) => (<div className="text-xl pt-2" key={index}>
                    {/* <input
                        checked={checkedItem.includes(title)?true :false}
                        onChange={() => handleCheckboxChange(title)}
                        type="checkbox" /> <span>{title}</span> */}
                    <label className="flex items-center">
                        <input
                            checked={selectedTitleTable.includes(title) || false}
                            onChange={() => handleCheckboxChange(title)}
                            type="checkbox" id={`title`} />
                        <span className="ml-2">{title}</span>
                    </label>
                </div>
                ))}
            </div>
        </div>
    );
};

export default SideBar;