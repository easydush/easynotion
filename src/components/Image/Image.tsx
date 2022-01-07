interface ImageProps {
  src: string;
  alt: string;
}

export const Image = ({ src, alt }: ImageProps) => {
  return (
    <div className='object-cover h-96 w-96'>
      <img src={src} alt={alt} />
    </div>
  );
};
