import React from 'react';

export default function VerticalSpacer({ height }) {
  const heightClass = `h-${height}`;

  return <div className={heightClass}></div>;
}
