import React from 'react'

const QuestionCard = ({x,no}) => {
  return (
    
    <div class="py-5 ">
    <details class="group ">
        <summary class="flex bg-violet-500 text-white rounded justify-between items-center font-medium cursor-pointer list-none">
            <span className=' text-lg p-3'>{no+1}.  {x.question}</span>
            <span class="transition group-open:rotate-180">
        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
      </span>
        </summary>
        <div className=" bg-[#472183] text-white ">
        <p class=" mt-3 group-open:animate-fadeIn text-lg p-3">
           {x.answer}
        </p>
        </div>
    </details>
</div>
  )
}

export default QuestionCard