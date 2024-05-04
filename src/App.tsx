import Contact from "./components/Contact"
import CourseForWhom from "./components/CourseForWhom"
import Courses from "./components/Courses"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import GrantCards from "./components/GrantCards"
import Header from "./components/Header"
import HowMuchProfit from "./components/HowMuchProfit"
import MainVideo from "./components/MainVideo"
import RegisterGrand from "./components/RegisterGrand"

function App() {
  return (
    <>
      <Header />
      <MainVideo />
      <div className="container max-w-[1920px] w-4/5 mx-auto max-md:w-[95%]">
        <GrantCards />
        <CourseForWhom />
        <HowMuchProfit />
        <RegisterGrand />
        <Courses />
      </div>
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}

export default App
