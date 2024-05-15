import { useState } from 'react'

const PromptBar = ({onInputEnter}) => {
  const [prompt, setPrompt] = useState('');

  const sendChat = (e) => {
    if (e.key === 'Enter') {
      onInputEnter(prompt)
    }
  } 

  const onPromptValueChanges = (e) => {
    setPrompt(e.target.value)
  }

  return (
    <div className='flex items-center justify-center h-[64px] bg-[#DFED6E] rounded-[32px]'>
      <input onKeyDown={sendChat} onChange={onPromptValueChanges} className='rounded-[32px] h-[40px] text-center' type="text" placeholder='Type some words' />
    </div>
  )
}


export default PromptBar