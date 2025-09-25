import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Alert, AlertDescription } from "../../../../components/ui/alert";
import { Label } from "../../../../components/ui/label";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";
import { AuthScaffold } from "../../components/AuthScaffold";

interface LoginPhoneInputSectionProps {
  onCountryClick?: () => void;
  onFormSubmit?: () => void;
  phoneNumber: string;
  setPhoneNumber: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  selectedCountry: { name: string; code: string; flag: string };
}

export const LoginPhoneInputSection = ({ 
  onCountryClick, 
  onFormSubmit,
  phoneNumber,
  setPhoneNumber,
  password,
  setPassword,
  selectedCountry
}: LoginPhoneInputSectionProps): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState<'phone' | 'email'>('phone');
  const [email, setEmail] = useState("ahmed@themar.net");
  const [forceHidePlaceholder, setForceHidePlaceholder] = useState(false);

  // Reset placeholder visibility override when tab changes or user types a password
  useEffect(() => {
    setForceHidePlaceholder(false);
  }, [activeTab, password]);
  const handleSubmit = () => {
    const isValidPrimary =
      activeTab === 'phone' ? phoneNumber.trim() : email.trim();
    if (isValidPrimary && password.trim()) {
      onFormSubmit?.();
    }
  };

  return (
    <AuthScaffold leftArtworkImage="/login-bg.png">
          <div className="flex flex-col w-[390px] items-start gap-5 relative p-0">
            <header className="flex flex-col items-start justify-center gap-2 relative w-full flex-[0_0_auto]">
              <h1 className="relative w-full mt-[-1.00px] [font-family:'IBM_Plex_Sans',Helvetica] font-semibold text-[#202523] text-[26px] tracking-[-0.52px] leading-[31.2px]">
                Welcome back 👋
              </h1>

              <p className="relative w-fit opacity-70 [font-family:'IBM_Plex_Sans',Helvetica] font-normal text-[#202523] text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                Hello there, Please login to Get Started Now!
              </p>
            </header>

            <ToggleGroup
              type="single"
              value={activeTab}
              onValueChange={(v) => v && setActiveTab(v as 'phone' | 'email')}
              className="rounded-[100px] flex w-[390px] items-start gap-1 p-1 relative flex-[0_0_auto] bg-[#eaeee999]"
            >
              <ToggleGroupItem
                value="phone"
                className="flex h-12 items-center justify-center gap-2.5 p-2.5 relative flex-1 grow rounded-[100px] data-[state=on]:bg-white data-[state=on]:shadow-[0px_4px_16px_#667b9026]"
              >
                <span className="relative w-fit font-body-b-16-16-500 font-[number:var(--body-b-16-16-500-font-weight)] text-[#202523] text-[length:var(--body-b-16-16-500-font-size)] tracking-[var(--body-b-16-16-500-letter-spacing)] leading-[var(--body-b-16-16-500-line-height)] whitespace-nowrap [font-style:var(--body-b-16-16-500-font-style)]">
                  Phone Number
                </span>
              </ToggleGroupItem>

              <ToggleGroupItem
                value="email"
                className="flex h-12 items-center justify-center gap-2.5 p-2.5 relative flex-1 grow rounded-[100px] data-[state=on]:bg-white data-[state=on]:shadow-[0px_4px_16px_#667b9026]"
              >
                <span className="relative w-fit font-body-b-16-16-500 font-[number:var(--body-b-16-16-500-font-weight)] text-[#202523] text-[length:var(--body-b-16-16-500-font-size)] tracking-[var(--body-b-16-16-500-letter-spacing)] leading-[var(--body-b-16-16-500-line-height)] whitespace-nowrap [font-style:var(--body-b-16-16-500-font-style)]">
                  Email Address
                </span>
              </ToggleGroupItem>
            </ToggleGroup>

            {activeTab === 'email' && (
              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <Alert className="flex items-start gap-[15px] p-[15px] relative self-stretch w-full flex-[0_0_auto] rounded-2xl bg-[linear-gradient(0deg,rgba(168,32,13,0.08)_0%,rgba(168,32,13,0.08)_100%)] border-none">
                  <img className="relative w-8 h-8" alt="Frame" src="/frame-272.svg" />
                  <AlertDescription className="relative w-[272px] mt-[-1.00px] font-body-b-15-24-400 font-[number:var(--body-b-15-24-400-font-weight)] text-[#202523] text-[length:var(--body-b-15-24-400-font-size)] tracking-[var(--body-b-15-24-400-letter-spacing)] leading-[var(--body-b-15-24-400-line-height)] [font-style:var(--body-b-15-24-400-font-style)]">
                    Sorry, your email or password could not be verified!
                  </AlertDescription>
                  <img className="absolute top-3.5 right-3.5 w-3 h-3" alt="Close" src="/vector.svg" />
                </Alert>
              </div>
            )}

            {activeTab === 'phone' ? (
              <div className="flex flex-col items-start gap-2 relative w-full flex-[0_0_auto]">
                <Label className="w-full mt-[-1.00px] font-[number:var(--body-b-16-25-600-font-weight)] leading-[var(--body-b-16-25-600-line-height)] relative font-body-b-16-25-600 text-[#202523] text-[length:var(--body-b-16-25-600-font-size)] tracking-[var(--body-b-16-25-600-letter-spacing)] [font-style:var(--body-b-16-25-600-font-style)]">
                  Phone Number
                </Label>

                <div className="flex h-12 items-center gap-3 pl-1 pr-3 py-1 relative w-full bg-white rounded-[10px] overflow-hidden border border-solid border-[#204544]">
                  <div 
                    className="flex w-10 items-center justify-center gap-2.5 relative h-full bg-[#2045441f] rounded-md cursor-pointer"
                    onClick={onCountryClick}
                  >
                    <img
                      className="relative w-6 h-6"
                      alt={selectedCountry.name}
                      src={selectedCountry.flag}
                    />
                  </div>

                  <div 
                    className="inline-flex items-center gap-1.5 relative flex-[0_0_auto] cursor-pointer"
                    onClick={onCountryClick}
                  >
                    <span className="relative w-fit mt-[-1.00px] font-body-b-15-16-400 font-[number:var(--body-b-15-16-400-font-weight)] text-[#202523] text-[length:var(--body-b-15-16-400-font-size)] tracking-[var(--body-b-15-16-400-letter-spacing)] leading-[var(--body-b-15-16-400-line-height)] whitespace-nowrap [font-style:var(--body-b-15-16-400-font-style)]">
                      {selectedCountry.code}
                    </span>

                    <div className="relative w-px h-4 bg-[#204544]" />
                  </div>

                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter phone number"
                    className="flex-1 bg-transparent border-none outline-none text-[#202523] font-body-b-15-16-400 cursor-text"
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-start gap-2 relative w-full flex-[0_0_auto]">
                <Label className="w-full mt-[-1.00px] font-[number:var(--body-b-16-25-600-font-weight)] leading-[var(--body-b-16-25-600-line-height)] relative font-body-b-16-25-600 text-[#202523] text-[length:var(--body-b-16-25-600-font-size)] tracking-[var(--body-b-16-25-600-letter-spacing)] [font-style:var(--body-b-16-25-600-font-style)]">
                  Your Email Address
                </Label>
                <div className="flex h-12 items-center gap-3 pl-4 pr-10 py-1 relative w-full bg-white rounded-[10px] overflow-hidden border border-solid border-[#204544]">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    className="flex-1 bg-transparent border-none outline-none text-[#202523] font-body-b-15-16-400 text-left"
                  />
                  <button
                    type="button"
                    aria-label="Clear email"
                    onClick={() => setEmail("")}
                    className="absolute right-3.5 inset-y-0 flex items-center"
                  >
                    <img className="w-3 h-3" alt="Clear" src="/vector.svg" />
                  </button>
                </div>
              </div>
            )}

            <div className="flex flex-col items-start gap-2 relative w-full flex-[0_0_auto]">
              <Label className="relative w-full mt-[-1.00px] font-body-b-16-25-600 font-[number:var(--body-b-16-25-600-font-weight)] text-[#202523] text-[length:var(--body-b-16-25-600-font-size)] tracking-[var(--body-b-16-25-600-letter-spacing)] leading-[var(--body-b-16-25-600-line-height)] [font-style:var(--body-b-16-25-600-font-style)]">
                Password
              </Label>

              <div className="justify-end gap-[15px] px-[15px] py-[13px] w-full bg-white rounded-[10px] border border-solid border-[#99a1b7] flex h-12 items-center relative">
                {(() => {
                  const isPlaceholder = activeTab === 'email' && !password;
                  const isVisible = (isPlaceholder && !forceHidePlaceholder) || showPassword;
                  const toggle = () => {
                    if (isPlaceholder) {
                      setForceHidePlaceholder(v => !v);
                    } else {
                      setShowPassword(v => !v);
                    }
                  };
                  return (
                    <>
                      <input
                        type={isVisible ? "text" : "password"}
                        value={activeTab === 'email' ? (password || "38KG39HS4") : password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        className="flex-1 bg-transparent border-none outline-none text-[#202523] font-body-b-15-16-400"
                      />
                      <button
                        type="button"
                        aria-label={isVisible ? "Hide password" : "Show password"}
                        onClick={toggle}
                        className="absolute top-[calc(50.00%_-_12px)] right-3.5"
                      >
                        <img
                          className="w-6 h-6"
                          alt={isVisible ? "Hide password" : "Show password"}
                          src={isVisible ? "/fi-16118447-2.svg" : "/fi-16118447.svg"}
                        />
                      </button>
                    </>
                  );
                })()}
              </div>
            </div>

            <div className="flex flex-col items-start gap-2.5 relative w-full flex-[0_0_auto]">
              <Button 
                type="button"
                onClick={handleSubmit}
                disabled={!(activeTab === 'phone' ? phoneNumber.trim() : email.trim()) || !password.trim()}
                className="flex h-[52px] items-center justify-center gap-2.5 px-4 py-[13px] relative w-full bg-[#204544] rounded-[1000px] overflow-hidden h-auto hover:bg-[#204544]/90"
              >
                <span className="relative w-fit mt-[-0.50px] font-body-b-16-25-600 font-[number:var(--body-b-16-25-600-font-weight)] text-white text-[length:var(--body-b-16-25-600-font-size)] tracking-[var(--body-b-16-25-600-letter-spacing)] leading-[var(--body-b-16-25-600-line-height)] whitespace-nowrap [font-style:var(--body-b-16-25-600-font-style)]">
                  Login
                </span>
              </Button>

              <div className="flex items-center justify-center gap-2.5 pt-2 pb-0 px-0 relative w-full flex-[0_0_auto]">
                <button className="relative w-fit mt-[-1.00px] font-body-b-13-14-400 font-[number:var(--body-b-13-14-400-font-weight)] text-[#204544] text-[length:var(--body-b-13-14-400-font-size)] tracking-[var(--body-b-13-14-400-letter-spacing)] leading-[var(--body-b-13-14-400-line-height)] whitespace-nowrap [font-style:var(--body-b-13-14-400-font-style)] hover:underline">
                  Forgot your password?
                </button>
              </div>
            </div>
          </div>
    </AuthScaffold>
  );
};
