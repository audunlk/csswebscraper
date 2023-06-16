import Link from 'next/link';
import { getLocalStorage, setLocalStorage } from '../lib/StorageHelper';
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(() => {
    const storedCookieConsent = getLocalStorage('cookie_consent', null);
    return storedCookieConsent !== null ? storedCookieConsent : false;
  });

  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied';

    window.gtag('consent', 'update', {
      'analytics_storage': newValue,
    });

    setLocalStorage('cookie_consent', cookieConsent);
    console.log('Cookie Consent:', cookieConsent);
  }, [cookieConsent]);

  if (cookieConsent) {
    return null; // Hide the banner if consent is given
  }

  return (
    <div
      className={`flex my-10 mx-auto max-w-max md:max-w-screen-sm fixed bottom-0 left-0 right-0 px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4 bg-blue-800 rounded-lg shadow`}
    >
      <div className="text-center text-white">
        <Link href="/info/cookies">
          <p>
            We use <span className="font-bold text-orange-600">cookies</span>{' '}
            on our site.
          </p>
        </Link>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setCookieConsent(false)}
          className="px-5 py-2 text-white rounded-md border-gray-900"
        >
          Decline
        </button>
        <button
          onClick={() => setCookieConsent(true)}
          className="bg-orange-600 px-5 py-2 text-white rounded-lg"
        >
          Allow Cookies
        </button>
      </div>
    </div>
  );
}