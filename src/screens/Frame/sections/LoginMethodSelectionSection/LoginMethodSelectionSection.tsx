import { AuthScaffold } from "../../components/AuthScaffold";
import { VerificationMethodItem } from "./VerificationMethodItem";
import { verificationMethods } from "./methods-data";

interface LoginMethodSelectionSectionProps {
  onBack?: () => void;
}

export const LoginMethodSelectionSection = ({ onBack }: LoginMethodSelectionSectionProps): JSX.Element => {
  return (
    <AuthScaffold leftArtworkImage="/login-bg-2.png">
      <button
        type="button"
        aria-label="Close"
        onClick={onBack}
        className="absolute top-5 left-5 z-10 w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-white/90"
      >
        <img className="w-6 h-6" alt="Back" src="/back.svg" />
      </button>
      <div className="flex flex-col items-start p-0 gap-6 w-[390px] h-auto relative flex-none order-0 flex-grow-0">
        <div className="flex flex-col items-start justify-center gap-2 relative w-full flex-none order-0 flex-grow-0">
          <h1 className="relative w-[355px] mt-10 [font-family:'IBM_Plex_Sans',Helvetica] font-semibold text-[#202523] text-[26px] tracking-[-0.02em] leading-[26px] ">
            Choose how you want to Verify
          </h1>
        </div>
        <div className="flex flex-col items-start gap-0 relative w-full flex-none order-1 flex-grow-0">
          {verificationMethods.map((method, index) => (
            <VerificationMethodItem key={index} method={method} onClick={() => {}} />
          ))}
        </div>
      </div>
    </AuthScaffold>
  );
};