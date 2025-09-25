import React, { useState } from "react";
import { LoginPhoneInputSection } from "./sections/LoginPhoneInputSection/LoginPhoneInputSection";
import { LoginEmailInputSection } from "./sections/LoginEmailInputSection/LoginEmailInputSection";
import { CountrySelectionPopupSection } from "./sections/CountrySelectionPopupSection/CountrySelectionPopupSection";
import { LoginOtpVerificationSection } from "./sections/LoginOtpVerificationSection/LoginOtpVerificationSection";
import { LoginMethodSelectionSection } from "./sections/LoginMethodSelectionSection/LoginMethodSelectionSection";

type LoginStep = 'welcome' | 'email-error' | 'country-selection' | 'otp-verification' | 'method-selection';

export const Frame = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState<LoginStep>('welcome');
  const [showCountryPopup, setShowCountryPopup] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [selectedCountry, setSelectedCountry] = useState({
    name: "United Arab Emirates",
    code: "+971",
    flag: "/united-arab-emirates-.svg"
  });

  const handleCountrySelection = () => {
    // When user clicks on country code
    setShowCountryPopup(true);
  };

  const handleCountrySelected = (country: { name: string; code: string; flag: string }) => {
    // When user selects a country
    setSelectedCountry(country);
    setShowCountryPopup(false);
  };

  const handleFormSubmit = () => {
    // When user fills phone number and password and submits
    setCurrentStep('otp-verification');
  };

  const handleVerifyOptions = () => {
    // When user clicks on "Choose how you want to Verify"
    setCurrentStep('method-selection');
  };

  const handleBackToWelcome = () => {
    setCurrentStep('welcome');
    setShowCountryPopup(false);
  };

  const renderCurrentScreen = () => {
    switch (currentStep) {
      case 'welcome':
        return (
          <LoginPhoneInputSection 
            onCountryClick={handleCountrySelection}
            onFormSubmit={handleFormSubmit}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            password={password}
            setPassword={setPassword}
            selectedCountry={selectedCountry}
          />
        );
      
      case 'email-error':
        return (
          <LoginEmailInputSection 
            onBackToPhone={() => setCurrentStep('welcome')}
          />
        );
      
      case 'otp-verification':
        return (
          <LoginOtpVerificationSection 
            onVerifyOptions={handleVerifyOptions}
          />
        );
      
      case 'method-selection':
        return (
          <LoginMethodSelectionSection 
            onBack={() => setCurrentStep('otp-verification')}
          />
        );
      
      default:
        return (
          <LoginPhoneInputSection 
            onCountryClick={handleCountrySelection}
            onFormSubmit={handleFormSubmit}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            password={password}
            setPassword={setPassword}
            selectedCountry={selectedCountry}
          />
        );
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 relative">
      {renderCurrentScreen()}
      
      {/* Country Selection Popup - shows over current screen */}
      {showCountryPopup && (
        <div className="absolute inset-0 z-50">
          <CountrySelectionPopupSection 
            onClose={() => setShowCountryPopup(false)}
            onCountrySelect={handleCountrySelected}
          />
        </div>
      )}
    </div>
  );
};