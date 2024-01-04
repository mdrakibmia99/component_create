import { useState } from "react";
import QRCode from "react-qr-code";

const QrCodeGenerate = () => {
    const [inputValue,setInputValue]=useState("");
    const [newQr,setNewQr]=useState("")

    return (
        <div className="mt-10">
            <h1 className="text-center font-bold text-5xl py-5">QR code Generate</h1>

            <div className="flex justify-center">
                <input onChange={e=>setInputValue(e.target.value)} value={inputValue} type="text" placeholder="Enter you text or paste" className="border px-2 py-4 outline-0" />
                <button onClick={()=>{setNewQr(inputValue);setInputValue("")}} className="bg-slate-600 px-2 py-4 hover:cursor-pointer text-lg font-bold">Generate </button>
            </div>
   <div className="flex justify-center">

            <div style={{ background: 'white', padding: '16px' }}>
                <QRCode value={newQr}  />
                <p className="text-center font-bold mt-2">{newQr}</p>
            </div>
   </div>
        </div>
    );
};

export default QrCodeGenerate;