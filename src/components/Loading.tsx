import React from 'react';

interface LoadingProps {
  message: string; 
}

const Loading: React.FC<LoadingProps> = ({ message }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="spinner-border text-primary" role="status" style={{ width: '4rem', height: '4rem' }}></div>
      <h2 className="mt-4">{message}</h2>
    </div>
  );
};

export default Loading;
