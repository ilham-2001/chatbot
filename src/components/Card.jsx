

const Card = ({img, title, subtitle}) => {
  return (
    <div className='flex flex-col flex-1 gap-7 py-4 px-4 rounded-[24px] bg-white min-w-[145.5px] items-center  text-center'>
      <img className='w-[55px] h-[87px]' src={img} alt="icon image" />
      <div className='flex flex-col gap-1 text-black'>
        <h4 className='leading-[160%] text-[14px] font-medium'>{title}</h4>
        <p className='leading-[160%] text-[12px] text-[#A1A1AA]'>{subtitle}</p>
      </div>
    </div>
  )
};

export default Card;