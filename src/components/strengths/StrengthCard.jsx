const StrengthCard = ({ strength }) => {
    const { name, icon: Icon, color, description } = strength;
  
    return (
      <div className='flex flex-col items-center px-6 py-4 shadow-lg bg-white rounded hover:shadow-xl shadow-[#2F36AC]/60 cursor-default transition-all duration-300'>
        <Icon className='text-7xl' style={{ color }} />
        <p className='text-[20px] font-semibold my-4 text-[#2F36AC]'>{name}</p>
        <p className='text-sm'>{description}</p>
      </div>
    );
  };
  
  export default StrengthCard;
  