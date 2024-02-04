
import SEOBarChart from "./components/BarchartCreate/SEOBarChart"
import ImageGalleryLayout from "./components/ImageGalleryLayout/ImageGalleryLayout"
// import QRcode from "./components/QRcode/QRcode"
import QrCodeGenerate from "./components/QrCode/QrCodeGenerate"
import SelectDivision from "./components/SelectDivision/SelectDivision"
import Accordian from "./components/accordian/Accordian"
import SEOHomePage from "./components/seapage1/SEOHomePage"
import Test from "./components/seapage1/Test"



function App() {
  return (
    <div>
      <SEOHomePage/>
      {/* <Test/> */}
      <ImageGalleryLayout />
      <Accordian />
      <SelectDivision />
      <QrCodeGenerate/>
      
    </div>
  )
}

export default App
