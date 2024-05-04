import {FC} from 'react'

const Courses: FC = () => {
  return (
    <div className="my-10 px-10">
      <div className="text-center">
        <h1 className="uppercase text-2xl font-bold text-blue-600">
          Maab akademiyasida BI imkoniyatlarini oching
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          veniam alias illum laborum molestias quod ut perspiciatis explicabo
          hic neque? Incidunt consequatur cumque ratione tempora error.
        </p>
      </div>

      <div className="cards grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
        <div className="card bg-slate-200 py-5">
          <div className="px-4">
            <h1 className="text-2xl uppercase font-bold text-blue-600">
              data analytics
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              doloribus accusantium voluptatum dolores, cum nesciunt distinctio
              nobis officiis esse possimus.
            </p>
          </div>
          <div className="px-4 bg-white py-3 mt-5">
            <p className="text-xs">Kurs narxi:</p>
            <p className="text-black font-semibold">23,975,000 so'm</p>
          </div>
        </div>

        <div className="card bg-slate-200 py-5">
          <div className="px-4">
            <h1 className="text-2xl uppercase font-bold text-blue-600">
              data engeenering
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              doloribus accusantium voluptatum dolores, cum nesciunt distinctio
              nobis officiis esse possimus.
            </p>
          </div>
          <div className="px-4 bg-white py-3 mt-5">
            <p className="text-xs">Kurs narxi:</p>
            <p className="text-black font-semibold">23,975,000 so'm</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses