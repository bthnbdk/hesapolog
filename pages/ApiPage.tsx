import React from 'react';
import { getAllTools } from '../data/tools';

export const ApiPage: React.FC = () => {
  const tools = getAllTools();
  
  // This component will be rendered without the main layout,
  // so we just output the JSON inside a <pre> tag.
  return (
    <pre style={{ 
      wordWrap: 'break-word', 
      whiteSpace: 'pre-wrap', 
      margin: 0, 
      fontFamily: 'monospace' 
    }}>
      {JSON.stringify(tools, null, 2)}
    </pre>
  );
};