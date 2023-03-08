import React from 'react'
import { useSelector } from 'react-redux'
import QuestionCard from '../components/QuestionCard'

const Question = () => {
	const {fliterQuestions}=useSelector((state)=>state.QuestionData)
  return (
    
<div className="max-w-screen-xl mx-auto px-5 bg-white min-h-screen">
	<div className="flex flex-col items-center">
		<h2 className="font-bold text-5xl mt-5 tracking-tight">
			HTML5 Question 
		</h2>
		<p className="text-neutral-500 text-xl mt-3">
			Frequenty asked questions in Interview
		</p>
    <button className="text-white bg-[crimson] text-xl p-2 rounded mt-3 animate-bounce">take  a quiz in html</button>
	</div>
	<div className="grid divide-y divide-neutral-200 max-w-[100%] mx-auto mt-8 transition-all">
	{
		fliterQuestions.map((x,index)=>{
			return(
				<QuestionCard x={x} key={index} no={index}/>
			)
		})
	}
	
		
	</div>
</div>
  )
}

export default Question