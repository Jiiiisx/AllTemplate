import { useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export const OptimizedImage = ({ src, alt, className, priority = false }: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className} bg-surface`}>
      <motion.img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        onLoad={() => setIsLoaded(true)}
        className={`h-full w-full object-cover ${className}`}
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-surface">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-secondary/20 border-t-secondary" />
        </div>
      )}
    </div>
  );
};
