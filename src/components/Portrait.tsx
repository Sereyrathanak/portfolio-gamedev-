import { useEffect, useMemo, useState } from 'react';

interface PortraitProps {
  src: string;
  name: string;
  className?: string;
}

export function Portrait({ src, name, className = '' }: PortraitProps) {
  const [failed, setFailed] = useState(false);
  const initials = useMemo(
    () => name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join('').toUpperCase() || 'YN',
    [name],
  );

  useEffect(() => setFailed(false), [src]);

  return (
    <div className={`portrait-frame ${className}`}>
      {!failed ? (
        <img src={src} alt={`Portrait of ${name}`} onError={() => setFailed(true)} />
      ) : (
        <div className="portrait-placeholder" role="img" aria-label="Portrait placeholder">
          <strong>{initials}</strong>
          <span>Add portrait.png</span>
        </div>
      )}
    </div>
  );
}
