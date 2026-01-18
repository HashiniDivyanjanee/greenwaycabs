import React, { useState, useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';

const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User installed the app');
    }

    setDeferredPrompt(null);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleInstallClick}
        className="flex items-center gap-3 bg-yellow-500 text-black font-black px-6 py-4 rounded-2xl shadow-2xl hover:bg-yellow-600 transition-all active:scale-95 animate-bounce uppercase text-xs tracking-widest"
      >
        <FaDownload className="text-lg" />
        Install App
      </button>
    </div>
  );
};

export default InstallButton;