import React from "react";
import { Alert, AlertDescription } from "../../../../components/ui/alert";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";

interface LoginEmailInputSectionProps {
  onBackToPhone?: () => void;
}

export const LoginEmailInputSection = ({ onBackToPhone }: LoginEmailInputSectionProps): JSX.Element => {
  return (
    <div className="flex w-full h-auto relative items-center justify-center bg-white rounded-[73.5px] overflow-hidden">
      <div className="flex w-full max-w-[720px] items-center justify-center gap-2.5 px-0 py-10 relative">
        <div className="flex flex-col items-start gap-[30px] p-12 relative flex-1 bg-[#eaeee999] rounded-[32px] overflow-hidden">
          <div className="absolute top-0 left-[-230px] w-[450px] h-[407px]" />

          <div className="flex flex-col h-[513px] items-center gap-10 relative self-stretch w-full">
            <div className="inline-flex flex-col items-center gap-2.5 relative flex-[0_0_auto]">
              <img
                className="relative flex-[0_0_auto]"
                alt="Logo v"
                src="/logo-v.svg"
              />

              <div className="relative w-[218px] [font-family:'IBM_Plex_Sans',Helvetica] font-light text-[#6b758a] text-sm text-center tracking-[0] leading-[18px]">
                The biggest thing to happen to ads since counting impressions!
              </div>
            </div>
          </div>

          <img
            className="absolute left-[calc(50.00%_-_360px)] bottom-[-745px] w-[720px] h-[394px]"
            alt="Bg"
            src="/bg.svg"
          />
        </div>

        <div className="flex flex-col w-[calc(100%_-_250px)] items-center gap-[30px] p-10 absolute top-[275px] left-[125px] bg-[#ffffff4c] rounded-[32px] overflow-hidden border-[none] shadow-[0px_-7px_18px_#20454408,0px_8px_42px_#2045440f] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[32px] before:[background:linear-gradient(143deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <div className="flex flex-col w-[390px] items-start gap-5 relative flex-[0_0_auto]">
            <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <h1 className="relative self-stretch mt-[-1.00px] [font-family:'IBM_Plex_Sans',Helvetica] font-semibold text-[#202523] text-[26px] tracking-[-0.52px] leading-[31.2px]">
                Welcome back 👋
              </h1>

              <p className="relative w-fit opacity-70 [font-family:'IBM_Plex_Sans',Helvetica] font-normal text-[#202523] text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                Hello there, Please login to Get Started Now!
              </p>
            </div>

            <ToggleGroup
              type="single"
              defaultValue="email"
              className="flex w-[390px] items-start gap-1 p-1 relative flex-[0_0_auto] bg-[#eaeee999] rounded-[200px]"
            >
              <ToggleGroupItem
                value="phone"
                className="flex h-12 items-center justify-center gap-2.5 p-2.5 relative flex-1 grow rounded-lg data-[state=on]:bg-white data-[state=on]:shadow-[0px_4px_16px_#667b9026]"
              >
                <span className="w-fit font-[number:var(--body-b-16-16-500-font-weight)] leading-[var(--body-b-16-16-500-line-height)] whitespace-nowrap relative font-body-b-16-16-500 text-[#202523] text-[length:var(--body-b-16-16-500-font-size)] tracking-[var(--body-b-16-16-500-letter-spacing)] [font-style:var(--body-b-16-16-500-font-style)]">
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

            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <Alert className="flex items-start gap-[15px] p-[15px] relative self-stretch w-full flex-[0_0_auto] rounded-2xl bg-[linear-gradient(0deg,rgba(168,32,13,0.08)_0%,rgba(168,32,13,0.08)_100%)] border-none">
                <img
                  className="relative w-8 h-8"
                  alt="Frame"
                  src="/frame-272.svg"
                />

                <AlertDescription className="relative w-[272px] mt-[-1.00px] font-body-b-15-24-400 font-[number:var(--body-b-15-24-400-font-weight)] text-[#202523] text-[length:var(--body-b-15-24-400-font-size)] tracking-[var(--body-b-15-24-400-letter-spacing)] leading-[var(--body-b-15-24-400-line-height)] [font-style:var(--body-b-15-24-400-font-style)]">
                  Sorry, your email or password could not be verified!
                </AlertDescription>

                <img
                  className="absolute top-3.5 right-3.5 w-3 h-3"
                  alt="Vector"
                  src="/vector.svg"
                />
              </Alert>

              <Label className="relative self-stretch font-body-b-16-25-600 font-[number:var(--body-b-16-25-600-font-weight)] text-[#202523] text-[length:var(--body-b-16-25-600-font-size)] tracking-[var(--body-b-16-25-600-letter-spacing)] leading-[var(--body-b-16-25-600-line-height)] [font-style:var(--body-b-16-25-600-font-style)]">
                Your Email Address
              </Label>

              <div className="gap-3 pl-5 pr-3 py-1 self-stretch w-full bg-white rounded-[10px] overflow-hidden border border-solid border-[#99a1b7] flex h-12 items-center relative">
                <img
                  className="absolute top-[calc(50.00%_-_6px)] right-3.5 w-3 h-3"
                  alt="Image"
                  src="/-.svg"
                />

                <Input
                  defaultValue="ahmed@themar.net"
                  className="relative w-fit font-body-b-15-16-400 font-[number:var(--body-b-15-16-400-font-weight)] text-[#202523] text-[length:var(--body-b-15-16-400-font-size)] tracking-[var(--body-b-15-16-400-letter-spacing)] leading-[var(--body-b-15-16-400-line-height)] whitespace-nowrap [font-style:var(--body-b-15-16-400-font-style)] border-none bg-transparent p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <Label className="relative self-stretch mt-[-1.00px] font-body-b-16-25-600 font-[number:var(--body-b-16-25-600-font-weight)] text-[#202523] text-[length:var(--body-b-16-25-600-font-size)] tracking-[var(--body-b-16-25-600-letter-spacing)] leading-[var(--body-b-16-25-600-line-height)] [font-style:var(--body-b-16-25-600-font-style)]">
                Password
              </Label>

              <div className="gap-[15px] px-[15px] py-[13px] self-stretch w-full bg-white rounded-[10px] border border-solid border-[#99a1b7] flex h-12 items-center relative">
                <Input
                  type="password"
                  defaultValue="38KG39HS4"
                  className="relative w-fit font-body-b-15-16-400 font-[number:var(--body-b-15-16-400-font-weight)] text-[#202523] text-[length:var(--body-b-15-16-400-font-size)] tracking-[var(--body-b-15-16-400-letter-spacing)] leading-[var(--body-b-15-16-400-line-height)] whitespace-nowrap [font-style:var(--body-b-15-16-400-font-style)] border-none bg-transparent p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
                />

                <img
                  className="absolute top-[calc(50.00%_-_12px)] right-3.5 w-6 h-6"
                  alt="Fi"
                  src="/fi-16118447-2.svg"
                />
              </div>
            </div>

            <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <Button className="flex h-[52px] items-center justify-center gap-2.5 px-4 py-[13px] relative self-stretch w-full bg-[#204544] rounded-[1000px] overflow-hidden h-auto hover:bg-[#204544]/90">
                <span className="relative w-fit mt-[-0.50px] font-body-b-16-25-600 font-[number:var(--body-b-16-25-600-font-weight)] text-white text-[length:var(--body-b-16-25-600-font-size)] tracking-[var(--body-b-16-25-600-letter-spacing)] leading-[var(--body-b-16-25-600-line-height)] whitespace-nowrap [font-style:var(--body-b-16-25-600-font-style)]">
                  Login
                </span>
              </Button>

              <div className="flex items-center justify-center gap-2.5 pt-2 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
                <button className="relative w-fit mt-[-1.00px] font-body-b-13-14-400 font-[number:var(--body-b-13-14-400-font-weight)] text-[#204544] text-[length:var(--body-b-13-14-400-font-size)] tracking-[var(--body-b-13-14-400-letter-spacing)] leading-[var(--body-b-13-14-400-line-height)] whitespace-nowrap [font-style:var(--body-b-13-14-400-font-style)] bg-transparent border-none cursor-pointer hover:underline">
                  Forgot your password?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
