'use client'
import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [backendStatus, setBackendStatus] = useState(null);

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/health`);
        if (response.ok) {
          const data = await response.json();
          setBackendStatus(data.message);
        } else {
          setBackendStatus('Backend is not responding.');
        }
      } catch (error) {
        setBackendStatus('Error connecting to the backend.');
        console.error('Fetch error:', error);
      }
    };

    checkBackend();
  }, []);

  return (
    <div>
      <h1>Welcome to the Attendance App</h1>
      <p>This is the home page.</p>
      <p>Backend Status: {backendStatus || 'Checking...'}</p>
    </div>
  );
};

export default HomePage;