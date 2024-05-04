import {FC} from 'react'

const HeaderMobile: FC = () => {
  return (
    <>
      <div className="hidden max-md:block">
        <div className="flex items-center justify-between">
          <label htmlFor="menu-toggle">
            <i className="fa-solid fa-bars-staggered cursor-pointer text-2xl"></i>
          </label>
          <h1 className="text-2xl">Logo</h1>
        </div>
      </div>

      <input type="checkbox" className="hidden" id="menu-toggle"></input>
      <div className="md:hidden fixed -left-full top-0 w-full h-dvh toggled-bar flex flex-col bg-white transition-all px-10 py-5 z-50">
        <div className="flex items-center border-b-4 justify-between">
          <h1 className="text-2xl">Menu</h1>
          <label htmlFor="menu-toggle">
            <i className="fa-solid fa-xmark text-2xl text-black cursor-pointer"></i>
          </label>
        </div>
        <div className="flex flex-col items-center gap-10">
          <div className="flex items-center gap-10">
            <h1 className="text-2xl">Logo</h1>
            <select>
              <option value="">Uzbek</option>
              <option value="">English</option>
            </select>
          </div>
          <div className="flex items-center gap-5">
            <p className="text-[#FB5F12] text-xl max-sm:text-xs">
              +99 890 123 45 67
            </p>
            <button className="bg-black text-white py-2 px-5 rounded-full max-sm:text-xs">
              Aloqada bo'ling <i className="fa-solid fa-phone"></i>
            </button>
          </div>
          <div className="icons flex items-center gap-10">
            <i className="fa-brands fa-telegram text-6xl max-sm:text-4xl cursor-pointer"></i>
            <i className="fa-brands fa-square-instagram text-6xl max-sm:text-4xl cursor-pointer"></i>
            <i className="fa-brands fa-linkedin text-6xl max-sm:text-4xl cursor-pointer"></i>
            <i className="fa-brands fa-facebook text-6xl max-sm:text-4xl cursor-pointer"></i>
          </div>
        </div>
      </div>
      {/* <input type="checkbox" className="hidden" id="menu-toggle"></input>
      <label htmlFor="menu-toggle">
        <i className="fa-solid fa-xmark text-2xl text-white cursor-pointer"></i>
      </label> */}
    </>
  )
}

export default HeaderMobile