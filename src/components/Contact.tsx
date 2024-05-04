import { FC } from 'react'

const Contact: FC = () => {
  return (
    <div className="container max-w-[1920px] w-4/5 mx-auto max-md:w-[95%] bg-slate-200 p-10 my-10 rounded-3xl">
      <div className="flex gap-5 max-lg:flex-col">
        <div className="lg:w-2/5 mt-5 max-lg:text-center">
          <h2 className="text-2xl font-bold max-sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            eveniet optio est temporibus similique qui.
          </h2>
          <p className="text-xs">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias,
            repellendus!
          </p>
        </div>
        <form className="lg:w-3/5 bg-white rounded-3xl p-10">
          <h1 className="text-3xl font-semibold max-sm:text-xl">Kursga yozilish</h1>
          <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5 mt-5">
            <div>
              <label htmlFor="name" className="text-sm">
                Ismingiz <br />
              </label>
              <input
                type="text"
                id="name"
                placeholder="Type here"
                className="input outline-none focus:outline-none w-full bg-slate-200"
              />
            </div>

            <div>
              <label htmlFor="phone" className="text-sm">
                Telefon raqamingiz <br />
              </label>
              <input
                type="number"
                id="phone"
                placeholder="+998"
                className="input outline-none focus:outline-none w-full bg-slate-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5 mt-5">
            <div className="w-full">
              <label htmlFor="englishLevel" className="text-sm">
                Ingliz tili darajangiz{' '}
              </label>
              <select
                id="englishLevel"
                className="select bg-slate-200 outline-none focus:outline-none w-full"
              >
                <option disabled selected>
                  Darajangiz
                </option>
                <option>Level 1</option>
                <option>Level 2</option>
                <option>Level 3</option>
                <option>Level 4</option>
              </select>
            </div>
            <div className="w-full">
              <label htmlFor="logicLevel" className="text-sm">
                Mantiqiy bilim darajangiz{' '}
              </label>
              <select
                id="logicLevel"
                className="select bg-slate-200 outline-none focus:outline-none w-full"
              >
                <option disabled selected>
                  Darajangiz
                </option>
                <option>Level 1</option>
                <option>Level 2</option>
                <option>Level 3</option>
                <option>Level 4</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between mt-5 max-sm:flex-col">
            <div className="flex gap-5 w-2/3 items-center max-sm:w-full">
              <input type="checkbox" defaultChecked className="checkbox" />
              <p className="text-sm max-sm:text-xs">
                Lorem ipsum, dolor sit amet consectetur{' '}
                <span className="text-blue-500">"Adipisicing elit"</span> omnis,
                eveniet?
              </p>
            </div>
            <div className="max-sm:mt-4">
              <button className="py-2 px-5 text-white text-sm rounded-full bg-blue-600">Arizani topshirish &#8594;</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
