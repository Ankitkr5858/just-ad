import { Button } from "../../../../components/ui/button";
import { VerificationMethod } from "./methods-data";

interface VerificationMethodItemProps {
  method: VerificationMethod;
  onClick: (title: string) => void;
}

export function VerificationMethodItem({ method, onClick }: VerificationMethodItemProps): JSX.Element {
  return (
    <Button
      variant="ghost"
      onClick={() => onClick(method.title)}
      className="flex items-center justify-start gap-5 px-0 py-2 relative w-full flex-[0_0_auto] rounded-none h-auto hover:bg-transparent"
    >
      <div className="flex w-[42px] h-[42px] items-center justify-center gap-2.5 relative rounded-[100px] overflow-hidden border border-solid border-[#20454433]">
        {method.icon.startsWith('/') ? (
          <img className="relative w-5 h-5" alt="Icon" src={method.icon} />
        ) : (
          <span className="text-lg">{method.icon}</span>
        )}
      </div>
      <div className={`flex flex-col items-start justify-center gap-1 ${method.hasBorder ? "pb-4 border-b border-solid border-[#2045441f]" : ""} relative flex-1 grow`}>
        <div className="relative w-fit mt-[-1.00px] [font-family:'IBM_Plex_Sans',Helvetica] font-semibold text-[#202523] text-base tracking-[0] leading-[25px] whitespace-nowrap">
          {method.title}
        </div>
        {method.description && (
          <div className="relative w-fit opacity-70 [font-family:'IBM_Plex_Sans',Helvetica] font-normal text-[#202523] text-[13px] tracking-[0] leading-[18px]">
            {method.description.split("\n").map((line, lineIndex) => (
              <div key={lineIndex}>{line}</div>
            ))}
          </div>
        )}
      </div>
    </Button>
  );
}


