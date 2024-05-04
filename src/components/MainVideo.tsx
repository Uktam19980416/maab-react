import {FC} from 'react'

const MainVideo: FC = () => {
  const aspectRatio = 16 / 20
  return (
    <div className="w-full flex justify-center mt-10 relative">
      <iframe
        width="95%"
        height={
          window.innerHeight * (aspectRatio || 1)
        }
        className="rounded-3xl shadow-2xl"
        src="https://www.youtube.com/embed/0S-X0WHYB0U?si=qPA0NiQNQGlyZE2V"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <p className="absolute z-40 text-orange-500 right-10 bottom-10 text-4xl">Grant sohibi bo'ling!</p>
    </div>
  )
}

export default MainVideo