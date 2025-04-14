const Button = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return <button className={`px-4 py-2 rounded ${className}`}>{children}</button>;
};

export default Button;
