const Card = ({ 
  children, 
  className = '', 
  hover = true,
  padding = true,
  ...props 
}) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-lg ${hover ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : ''} ${padding ? 'p-6' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;