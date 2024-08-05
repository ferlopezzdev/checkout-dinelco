interface BackgroundImageProps {
    src: string;
    alt: string;
    className?: string;
}

const BackgroundImage = ({ src, alt, className }: BackgroundImageProps) => {
  return (
    <div className={`absolute ${className}`}>
        <img 
        src={src} 
        alt={alt} 
        className='w-auto h-auto max-w-full'
        />
    </div>
  )
}

export default BackgroundImage