import { FC } from 'react'
import HeaderMobile from './HeaderMobile'

const Header: FC = () => {
  return (
    <header className="container max-w-[1920px] w-4/5 mx-auto py-3 max-md:w-[95%] max-xl:w-[90%]">
      <div className="flex justify-between items-center max-md:hidden">
        <div className="logo text-4xl font-semibold text-slate-600">LOGO</div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-5">
            <div className="icons flex items-center gap-8">
              <i className="fa-brands fa-telegram text-xl cursor-pointer"></i>
              <i className="fa-brands fa-square-instagram text-xl cursor-pointer"></i>
              <i className="fa-brands fa-linkedin text-xl cursor-pointer"></i>
              <i className="fa-brands fa-facebook text-xl cursor-pointer"></i>
            </div>
            <select>
              <option value="">Uzbek</option>
              <option value="">English</option>
            </select>
          </div>
          <div className="flex items-center gap-5">
            <p className="text-[#FB5F12] text-xl">+99 890 123 45 67</p>
            <button className="bg-black text-white py-2 px-5 rounded-full">
              Aloqada bo'ling <i className="fa-solid fa-phone"></i>
            </button>
          </div>
        </div>
      </div>
      <HeaderMobile />
    </header>
  )
}

export default Header
