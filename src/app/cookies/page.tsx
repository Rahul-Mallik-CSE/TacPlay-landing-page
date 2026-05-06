/** @format */

"use client";

import Link from "next/link";
import React, { useState } from "react";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

const CookieSettings = () => {
  const [cookies, setCookies] = useState<CookiePreferences>({
    necessary: true,
    analytics: true,
    marketing: false,
    preferences: true,
  });

  const handleToggle = (key: keyof CookiePreferences) => {
    if (key !== "necessary") {
      setCookies((prev) => ({
        ...prev,
        [key]: !prev[key],
      }));
    }
  };

  const handleSave = () => {
    localStorage.setItem("cookiePreferences", JSON.stringify(cookies));
    alert("Cookie preferences saved successfully!");
  };

  const handleRejectAll = () => {
    const preferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setCookies(preferences);
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
    alert("Cookie preferences updated!");
  };

  const handleAcceptAll = () => {
    const preferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setCookies(preferences);
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
    alert("All cookies accepted!");
  };

  return (
    <main className="min-h-screen bg-black">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link href="#" className="text-primary hover:text-primary/80 mb-6 inline-block">
            ← Back
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">Cookie Settings</h1>
          <p className="text-secondary">Manage your cookie preferences</p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <section className="text-secondary">
            <h2 className="text-2xl font-bold text-white mb-4">What are Cookies?</h2>
            <p>
              Cookies are small files stored on your device that help us provide a better experience. We use different types of cookies for various purposes.
            </p>
          </section>

          {/* Cookie Categories */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Cookie Categories</h2>

            {/* Necessary Cookies */}
            <div className="p-6 rounded-lg border border-background/60 bg-background/40">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">Necessary Cookies</h3>
                  <p className="text-sm text-secondary">
                    Essential for the website to function. These cookies are required for security, account management, and basic functionality. Cannot be disabled.
                  </p>
                </div>
                <div className="ml-4">
                  <input
                    type="checkbox"
                    checked={cookies.necessary}
                    disabled
                    className="w-6 h-6 accent-primary cursor-not-allowed"
                  />
                </div>
              </div>
              <div className="text-xs text-secondary/60 bg-black/30 p-3 rounded">
                <p><strong>Examples:</strong> Session tokens, authentication, security</p>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="p-6 rounded-lg border border-background/60 bg-background/40 hover:border-primary/30 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">Analytics Cookies</h3>
                  <p className="text-sm text-secondary">
                    Help us understand how you use TACPLAY, including page visits, user flows, and performance metrics. This helps us improve your experience.
                  </p>
                </div>
                <div className="ml-4">
                  <input
                    type="checkbox"
                    checked={cookies.analytics}
                    onChange={() => handleToggle("analytics")}
                    className="w-6 h-6 accent-primary cursor-pointer"
                  />
                </div>
              </div>
              <div className="text-xs text-secondary/60 bg-black/30 p-3 rounded">
                <p><strong>Examples:</strong> Google Analytics, page load times, user interactions</p>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="p-6 rounded-lg border border-background/60 bg-background/40 hover:border-primary/30 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">Marketing Cookies</h3>
                  <p className="text-sm text-secondary">
                    Track your activity to show you personalized ads and marketing content relevant to your interests on TACPLAY and partner sites.
                  </p>
                </div>
                <div className="ml-4">
                  <input
                    type="checkbox"
                    checked={cookies.marketing}
                    onChange={() => handleToggle("marketing")}
                    className="w-6 h-6 accent-primary cursor-pointer"
                  />
                </div>
              </div>
              <div className="text-xs text-secondary/60 bg-black/30 p-3 rounded">
                <p><strong>Examples:</strong> Facebook Pixel, conversion tracking, retargeting</p>
              </div>
            </div>

            {/* Preference Cookies */}
            <div className="p-6 rounded-lg border border-background/60 bg-background/40 hover:border-primary/30 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">Preference Cookies</h3>
                  <p className="text-sm text-secondary">
                    Remember your preferences and settings (language, theme, login information) to personalize your experience on TACPLAY.
                  </p>
                </div>
                <div className="ml-4">
                  <input
                    type="checkbox"
                    checked={cookies.preferences}
                    onChange={() => handleToggle("preferences")}
                    className="w-6 h-6 accent-primary cursor-pointer"
                  />
                </div>
              </div>
              <div className="text-xs text-secondary/60 bg-black/30 p-3 rounded">
                <p><strong>Examples:</strong> Language preference, theme selection, user settings</p>
              </div>
            </div>
          </section>

          {/* Action Buttons */}
          <section className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-background/60">
            <button
              onClick={handleRejectAll}
              className="flex-1 px-6 py-3 rounded-lg border border-secondary text-secondary hover:border-primary hover:text-primary transition-colors"
            >
              Reject All
            </button>
            <button
              onClick={handleAcceptAll}
              className="flex-1 px-6 py-3 rounded-lg bg-primary text-black font-semibold hover:bg-primary/90 transition-colors"
            >
              Accept All
            </button>
            <button
              onClick={handleSave}
              className="flex-1 px-6 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 border border-white/20 font-semibold transition-colors"
            >
              Save Preferences
            </button>
          </section>

          {/* Additional Information */}
          <section className="space-y-4 text-secondary mt-8 pt-8 border-t border-background/60">
            <h2 className="text-2xl font-bold text-white">More Information</h2>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">How to Manage Cookies</h3>
              <p>
                You can manage and delete cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent. Visit your browser&apos;s help section for more information.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Cookie Retention</h3>
              <p>
                Most cookies are automatically deleted after a set period (typically 1-2 years). Session cookies are deleted when you close your browser.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Third-Party Cookies</h3>
              <p>
                Some cookies are set by third parties (like analytics providers and advertisers). We do not control these cookies directly, but we require all third parties to comply with privacy regulations.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Privacy & GDPR</h3>
              <p>
                TACPLAY complies with GDPR and ePrivacy regulations. We only store non-essential cookies with your explicit consent. For more details, see our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>
            </div>

            <div className="mt-8 p-6 bg-background/40 rounded-lg border border-background/60">
              <h3 className="text-lg font-semibold text-white mb-2">Questions?</h3>
              <p>
                If you have questions about our cookie practices, contact us at{" "}
                <a href="mailto:privacy@tacplay.eu" className="text-primary hover:underline">
                  privacy@tacplay.eu
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default CookieSettings;
