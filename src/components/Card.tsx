interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'small' | 'medium';
}

function Card({ children, className = '', variant = 'default' }: CardProps) {
  const variants = {
    default: 'bg-[var(--bg-card)]',
    small: 'bg-[var(--bg-small-card)]',
    medium: 'bg-[var(--bg-medium-card)]'
  };

  return (
    <div className={`p-6 rounded-lg shadow-md ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}

export default Card;
