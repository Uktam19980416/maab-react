import { FC } from 'react'

const GrantCards: FC = () => {
  return (
    <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
      <div className="card rounded-3xl bg-slate-200 p-5 h-[300px] overflow-hidden">
        <div className="bg-slate-100 rounded-lg text-center py-8">
          <p className="text-3xl font-semibold text-orange-600">
            Shartnoma asosida
          </p>
        </div>
        <div className="px-5 max-lg:px-0">
          <p className="text-center mt-5 lg:mt-5">
            10 oylik kursni shartnoma asosida o'qishingiz mumkin
          </p>
        </div>
      </div>

      <div className="card rounded-3xl bg-slate-200 p-5 h-[300px] overflow-hidden">
        <div className="bg-slate-100 rounded-lg text-center py-8">
          <p className="text-3xl font-semibold text-orange-600">
            Shartli Grant
          </p>
        </div>
        <div className="px-5 max-lg:px-0">
          <p className="text-center mt-5">
            Talant dasturi doirasida bepul o'qib kurs pulini shu soha bo'yicha
            ishga kirganingizdan so'ng, oyligingizning bir qismidan to'lashingiz
            mumkin.
          </p>
        </div>
      </div>

      <div className="card rounded-3xl bg-slate-200 p-5 h-[300px] overflow-hidden">
        <div className="bg-slate-100 rounded-lg text-center py-8">
          <p className="text-3xl font-semibold text-orange-600">100% Grant</p>
        </div>
        <div className="px-5 max-lg:px-0">
          <p className="text-center mt-5">
            Imtihonlardan kerakli ballarni to'plashingiz bilan, o'qib kursini
            bepul o'qish imkoniyatiga ega bo'lasiz
          </p>
        </div>
      </div>
    </div>
  )
}

export default GrantCards
