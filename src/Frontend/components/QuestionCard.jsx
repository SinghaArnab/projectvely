import React from 'react'

const QuestionCard = ({ x, no }) => {
  return (

    <div className="py-5 transition-all">
      <details className="group ">
        <summary className="flex bg-black text-white rounded justify-between items-center font-medium cursor-pointer list-none">
          <span className=' text-lg p-3'>{no + 1}.  {x.question}</span>
          <span className="transition group-open:rotate-180">
            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <div className=" bg-[#472183] text-white transition ease-in-out delay-150">
          <p className=" mt-3 group-open:animate-fadeIn transition duration-300 delay-150 ease-in-out text-lg p-3">
            {x.answer}
          </p>
        </div>
      </details>
    </div>
  )
}

export default QuestionCard