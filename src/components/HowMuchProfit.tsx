import { FC } from 'react'

const HowMuchProfit: FC = () => {
  return (
    <div className="bg-slate-200 rounded-3xl my-20 p-10">
      <h1 className="text-center text-3xl uppercase text-blue-600 font-semibold max-md:text-xl">
        BI Mutaxassislarining Daromadi Qancha?
      </h1>
      <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        <div className="card rounded-md bg-slate-100 text-center border-2 border-neutral-500 py-4">
          <p className="text-2xl text-orange-600">2 000 000+</p>
          <p>Dunyo bo'ylab bo'sh ish o'rinlari</p>
        </div>

        <div className="card rounded-md bg-slate-100 text-center border-2 border-neutral-500 py-4">
          <p className="text-2xl text-orange-600">400$ - 2000$+</p>
          <p>O'zbekistondagi maoshlar</p>
        </div>

        <div className="card rounded-md bg-slate-100 text-center border-2 border-neutral-500 py-4">
          <p className="text-2xl text-orange-600">6000$+</p>
          <p>AQSHdagi boshlang'ich maoshlar</p>
        </div>
      </div>
    </div>
  )
}

export default HowMuchProfit
