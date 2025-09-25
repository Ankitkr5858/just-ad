import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../../../../components/ui/input-otp";
import { AuthScaffold } from "../../components/AuthScaffold";

interface LoginOtpVerificationSectionProps {
  onVerifyOptions?: () => void;
}

export const LoginOtpVerificationSection = ({ onVerifyOptions }: LoginOtpVerificationSectionProps): JSX.Element => {
  const [otpValue, setOtpValue] = useState("");

  return (
    <AuthScaffold leftArtworkImage="/login-bg-1.png">
          <div className="flex flex-col items-start p-0 gap-10 w-[390px] h-[401px] relative flex-none order-0 flex-grow-0">
            {/* Header Section */}
            <div className="flex flex-col items-start justify-center gap-2 relative w-full flex-none order-0 flex-grow-0">
              <h1 className="relative w-full mt-[-1.00px] [font-family:'IBM_Plex_Sans',Helvetica] font-semibold text-[#202523] text-[26px] tracking-[-0.52px] leading-[31.2px]">
                Verify your account
              </h1>

              <div className="inline-flex flex-col items-start gap-2 relative flex-none order-1 flex-grow-0">
                <div className="inline-flex items-center gap-1.5 relative flex-none order-0 flex-grow-0">
                  <span className="font-body-b-18-25-600 font-[number:var(--body-b-18-25-600-font-weight)] text-[#202523] text-[length:var(--body-b-18-25-600-font-size)] tracking-[var(--body-b-18-25-600-letter-spacing)] leading-[var(--body-b-18-25-600-line-height)] [font-style:var(--body-b-18-25-600-font-style)]">
                    Enter the code from
                  </span>
                  <img
                    className="w-5 h-5"
                    alt="WhatsApp"
                    src="/fi-4423697.svg"
                  />
                  <span className="font-body-b-18-25-600 font-[number:var(--body-b-18-25-600-font-weight)] text-[#202523] text-[length:var(--body-b-18-25-600-font-size)] tracking-[var(--body-b-18-25-600-letter-spacing)] leading-[var(--body-b-18-25-600-line-height)] [font-style:var(--body-b-18-25-600-font-style)]">
                    WhatsApp
                  </span>
                </div>
                <p className="relative w-fit font-body-b-16-16-400 font-[number:var(--body-b-16-16-400-font-weight)] text-[#6b758a] text-[length:var(--body-b-16-16-400-font-size)] tracking-[var(--body-b-16-16-400-letter-spacing)] leading-[var(--body-b-16-16-400-line-height)] [font-style:var(--body-b-16-16-400-font-style)] flex-none order-1 flex-grow-0">
                  Sent to +971 56 5581 119, may come siltently.
                </p>
              </div>
            </div>

            {/* OTP Input Section */}
            <div className="flex flex-col items-center gap-5 relative w-full flex-none order-1 flex-grow-0">
              <div className="flex flex-row items-center p-0 gap-5 w-[390px] h-12 flex-none order-0 self-stretch flex-grow-0 justify-center">
                <InputOTP
                  maxLength={6}
                  value={otpValue}
                  onChange={(value) => setOtpValue(value)}
                  className="flex justify-center items-center gap-5 w-full"
                >
                  <InputOTPGroup className="flex gap-1">
                    <InputOTPSlot
                      index={0}
                      className="w-12 h-12 flex justify-center items-center text-center text-lg font-medium"
                    />
                    <InputOTPSlot
                      index={1}
                      className="w-12 h-12 flex justify-center items-center text-center text-lg font-medium"
                    />
                    <InputOTPSlot
                      index={2}
                      className="w-12 h-12 flex justify-center items-center text-center text-lg font-medium"
                    />
                  </InputOTPGroup>
                  <InputOTPGroup className="flex gap-1">
                    <InputOTPSlot
                      index={3}
                      className="w-12 h-12 flex justify-center items-center text-center text-lg font-medium"
                    />
                    <InputOTPSlot
                      index={4}
                      className="w-12 h-12 flex justify-center items-center text-center text-lg font-medium"
                    />
                    <InputOTPSlot
                      index={5}
                      className="w-12 h-12 flex justify-center items-center text-center text-lg font-medium"
                    />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <div className="flex flex-col items-center justify-center gap-2.5 relative w-full flex-none order-1 flex-grow-0">
                <div className="flex flex-col items-center justify-center gap-3.5 relative w-full flex-none order-0 flex-grow-0">
                  <div className="inline-flex items-center justify-center gap-1.5 relative flex-none order-0 flex-grow-0">
                    <span className="relative w-fit font-body-b-14-14-400 font-[number:var(--body-b-14-14-400-font-weight)] text-[#202523] text-[length:var(--body-b-14-14-400-font-size)] tracking-[var(--body-b-14-14-400-letter-spacing)] leading-[var(--body-b-14-14-400-line-height)] [font-style:var(--body-b-14-14-400-font-style)]">
                      Didn't receive it?
                    </span>
                    <Button
                      variant="ghost"
                      className="inline-flex h-[34px] items-center gap-2 px-0 py-[9px] relative flex-none order-1 flex-grow-0 bg-transparent hover:bg-transparent"
                    >
                      <span className="relative w-fit font-body-b-13-14-400 font-[number:var(--body-b-13-14-400-font-weight)] text-[#204544] text-[length:var(--body-b-13-14-400-font-size)] tracking-[var(--body-b-13-14-400-letter-spacing)] leading-[var(--body-b-13-14-400-line-height)] [font-style:var(--body-b-13-14-400-font-style)]">
                        Resend code
                      </span>
                    </Button>
                  </div>
                </div>

                <div className="inline-flex items-end gap-2 relative flex-none order-1 flex-grow-0">
                  <Button
                    variant="outline"
                    onClick={onVerifyOptions}
                    className="inline-flex h-[38px] items-center gap-2 px-5 py-[9px] relative flex-none order-0 flex-grow-0 mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] rounded-[100px] border border-solid border-[#20454433] bg-transparent hover:bg-[#20454408]"
                  >
                    <span className="relative w-fit font-body-b-13-14-400 font-[number:var(--body-b-13-14-400-font-weight)] text-[#204544] text-[length:var(--body-b-13-14-400-font-size)] tracking-[var(--body-b-13-14-400-letter-spacing)] leading-[var(--body-b-13-14-400-line-height)] [font-style:var(--body-b-13-14-400-font-style)]">
                      Choose how you want to Verify
                    </span>
                  </Button>
                </div>
              </div>
            </div>

            <Button className="flex h-[52px] items-center justify-center gap-2.5 px-4 py-[13px] relative w-full bg-[#204544] rounded-[1000px] overflow-hidden h-auto hover:bg-[#204544]/90 flex-none order-2 flex-grow-0">
              <span className="relative w-fit mt-[-0.50px] font-body-b-16-25-600 font-[number:var(--body-b-16-25-600-font-weight)] text-white text-[length:var(--body-b-16-25-600-font-size)] tracking-[var(--body-b-16-25-600-letter-spacing)] leading-[var(--body-b-16-25-600-line-height)] [font-style:var(--body-b-16-25-600-font-style)]">
                Login
              </span>
            </Button>
          </div>
    </AuthScaffold>
  );
};
