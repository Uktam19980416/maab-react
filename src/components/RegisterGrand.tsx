import { FC } from 'react'
import award from '../images/award.png'

const RegisterGrand: FC = () => {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-orange-500 via-orange-400 to-orange-300 px-10 max-2xl:py-10 max-md:px-5">
      <div className="flex items-center justify-between gap-5 max-md:flex-col">
        <div className="w-2/3 flex flex-col gap-5 max-md:w-full">
          <h1 className="text-3xl font-semibold text-white max-sm:text-xl">
            Grantni qo'lga kiritish
          </h1>
          <p className="text-white max-sm:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            illo provident eius id repellat dignissimos dolore reiciendis
            distinctio sed, maxime eum ratione doloremque saepe laborum eos
            ipsum. Debitis nostrum laudantium aliquam ea, tenetur nobis aliquid
            eveniet doloremque explicabo vitae officia eligendi praesentium
            porro possimus impedit accusamus laboriosam enim eum maiores.
          </p>
          <div className="">
            <button className="bg-transparent border-2 border-white py-2 px-10 rounded-full text-white">
              Ro'yxatdan o'ting
            </button>
          </div>
        </div>
        <div className="w-full h-full object-cover">
          <img src={award} alt="Grant" />
        </div>
      </div>
    </div>
  )
}

export default RegisterGrand
