import { useEffect, useState } from 'react';

import { settingIcon, layoutToggleIcon } from './assets/assets';
import { coffee, health, entertainment, pastry } from './assets/assets';

import Card from './components/Card';
import PromptBar from './components/PromptBar';

const recentTopics = [
  {
    img: coffee,
    title: 'Coffee',
    subtitle: '23 Conversations'
  },
  {
    img: health,
    title: 'Health',
    subtitle: '66 Conversations'
  },
  { 
    img: entertainment,
    title: 'Entertainment',
    subtitle: '46 Conversations'
  },
  {
    img: pastry,
    title: 'Pastry',
    subtitle: '52 Conversations'
  },
];


function App() {
  const [chat, setChat] = useState('Hi');
  const [disable, setDisable] = useState(false);

  async function sendPrompt() {
    const response = await fetch("http://localhost:8000/chat", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: chat }),
    });
    const res = await response.json();
    console.log(res);
  }
  
  const getPromptValue = (prompt) => {
    setChat(prompt)
  }

  const sentChatToServer = () => {
    sendPrompt(chat);
  }

  useEffect(() => {
    sentChatToServer();
  }, [chat])

  return (
    <div className='container relative flex flex-col gap-7 mx-auto max-w-[475px] min-h-[100vh] px-9 pt-[72px] bg-three-color-gradient'>
      <div className='flex gap-2 justify-between items-center'>
        <div className='text-white'>
          <p className='text-4 leading-[160%]'>Hello Yume,</p>
          <h3 className='text-[24px] font-bold leading-[140%]'>Let’s Walk The Talk!</h3>
        </div>
        <img className='w-[36px] h-[36px]' src={settingIcon} alt="setting icon"/>
      </div>
      <div className='rounded-[24px] bg-white w-full h-[100px]'>

      </div>
      <div className='flex flex-col gap-[18px] text-white'>
        <div className='flex justify-between items-center'>
          <p className='font-semibold'>Your recent topic</p>
          <img className='w-[36px] h-[36px]' src={layoutToggleIcon} alt="layout toggle icon" />
        </div>
        <div className='flex flex-wrap gap-3'>
          {recentTopics.map((it, index) => {
            return <Card key={index} img={it.img} title={it.title} subtitle={it.subtitle}/>
          })}
        </div>
      </div>
      {/* <div className='absolute left-10 right-10 bottom-10'> */}
      <div className='mt-12'>
        <PromptBar onInputEnter={getPromptValue}  />
      </div>
    </div>
  );
}

export default App;
