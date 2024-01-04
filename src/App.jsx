
import ImageGalleryLayout from "./components/ImageGalleryLayout/ImageGalleryLayout"
// import QRcode from "./components/QRcode/QRcode"
import QrCodeGenerate from "./components/QrCode/QrCodeGenerate"
import SelectDivision from "./components/SelectDivision/SelectDivision"
import Accordian from "./components/accordian/Accordian"


function App() {
  return (
    <div>
      <ImageGalleryLayout />
      <Accordian />
      <SelectDivision />
      <QrCodeGenerate/>
    </div>
  )
}

export default App
