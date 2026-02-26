'use client';

import React, { useState } from 'react';

function Downloads() {
  const [downloading, setDownloading] = useState<string | null>(null);
  const [error, setError] = useState<string>('');

  const handleDownload = async (type: 'mobile' | 'desktop') => {
    setDownloading(type);
    setError('');

    try {
      const endpoints = {
        mobile: 'https://api.kmldigital.xyz/downloads/mobile',
        desktop: 'https://api.kmldigital.xyz/downloads/desktop'
      };

      const response = await fetch(endpoints[type]);

      if (response.ok) {
        // Create a blob from the response
        const blob = await response.blob();

        // Create a temporary URL for the blob
        const url = window.URL.createObjectURL(blob);

        // Create a temporary anchor element and trigger download
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;

        // Set filename based on type
        const filenames = {
          mobile: 'dat-go-mobile.apk',
          desktop: 'dat-go-desktop.exe'
        };
        a.download = filenames[type];

        document.body.appendChild(a);
        a.click();

        // Clean up
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        const errorData = await response.json();
        setError(errorData.message || `Failed to download ${type} app`);
      }
    } catch (err) {
      setError(`Network error while downloading ${type} app. Please try again.`);
    } finally {
      setDownloading(null);
    }
  };

  const handleExtensionLink = () => {
    // Replace this URL with your actual Chrome Web Store extension URL
    const chromeWebStoreUrl = 'https://chrome.google.com/webstore/detail/dat-go-extension/YOUR_EXTENSION_ID';
    window.open(chromeWebStoreUrl, '_blank');
  };

  const downloadOptions = [
    {
      type: 'mobile' as const,
      title: 'Mobile App (APK)',
      description: 'Download the Android APK for mobile devices',
      icon: '📱',
      buttonText: 'Download APK'
    },
    {
      type: 'desktop' as const,
      title: 'Desktop App',
      description: 'Download the Windows desktop application',
      icon: '💻',
      buttonText: 'Download Desktop App'
    },
    {
      type: 'extension' as const,
      title: 'Browser Extension',
      description: 'Get the browser extension from Chrome Web Store for enhanced functionality',
      icon: '🔌',
      buttonText: 'Open in Chrome Web Store'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <img
            className="mx-auto h-20 w-20 mb-6"
            src="./logo.png"
            alt="DAT GO"
          />
          <h1 className="text-4xl font-bold text-white mb-4">
            Download DAT GO Apps
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get the DAT GO applications for all your devices. Choose from our mobile app, desktop application, or browser extension.
          </p>
        </div>

        {error && (
          <div className="mb-8 rounded-md bg-red-900/50 border border-red-500 p-4">
            <div className="text-sm text-red-400 text-center">{error}</div>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {downloadOptions.map((option) => (
            <div
              key={option.type}
              className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-gray-600 transition-colors duration-200"
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {option.description}
                </p>
              </div>

              <button
                onClick={() => option.type === 'extension' ? handleExtensionLink() : handleDownload(option.type)}
                disabled={downloading !== null}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 flex items-center justify-center"
              >
                {downloading === option.type ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Downloading...
                  </div>
                ) : (
                  option.buttonText
                )}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-2">
              Need Help?
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Having trouble with downloads or need installation instructions?
            </p>
            <a
              href="/support"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-400 bg-indigo-900/20 hover:bg-indigo-900/40 transition-colors duration-200"
            >
              Contact Support
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/"
            className="text-indigo-400 hover:text-indigo-300 text-sm"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default Downloads;
