import React from 'react'
import { useSelector } from 'react-redux'
import QuestionCard from '../components/QuestionCard'

const Question = () => {
	const {fliterQuestions}=useSelector((state)=>state.QuestionData)
  return (
    
<div class="max-w-screen-xl mx-auto px-5 bg-white min-h-screen">
	<div class="flex flex-col items-center">
		<h2 class="font-bold text-5xl mt-5 tracking-tight">
			HTML5 Question 
		</h2>
		<p class="text-neutral-500 text-xl mt-3">
			Frequenty asked questions in Interview
		</p>
    <button class="text-white bg-[crimson] text-xl p-2 rounded mt-3 animate-bounce">take  a quiz in html</button>
	</div>
	<div class="grid divide-y divide-neutral-200 max-w-[100%] mx-auto mt-8">
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