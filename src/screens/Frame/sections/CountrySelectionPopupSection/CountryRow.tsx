import { CheckIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { CountryWithMeta } from "./types";

interface CountryRowProps {
  country: CountryWithMeta;
  isSelected: boolean;
  onSelect: (countryName: string) => void;
  showDivider?: boolean;
}

export function CountryRow({ country, isSelected, onSelect, showDivider = true }: CountryRowProps): JSX.Element {
  return (
    <Button
      variant="ghost"
      onClick={() => onSelect(country.name)}
      className="flex w-[430px] items-center justify-between pl-5 pr-3.5 py-3 relative flex-[0_0_auto] h-auto hover:bg-gray-50"
    >
      <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
        <div className="inline-flex items-center justify-center w-10 h-10 relative bg-white rounded-full overflow-hidden border border-solid border-[#20454433]">
          <img className="relative w-6 h-4" alt={`${country.name} flag`} src={country.flag} />
        </div>
        <div className="relative w-fit font-body-b-14-22-500 font-[number:var(--body-b-14-22-500-font-weight)] text-[#202523] text-[length:var(--body-b-14-22-500-font-size)] text-center tracking-[var(--body-b-14-22-500-letter-spacing)] leading-[var(--body-b-14-22-500-line-height)] whitespace-nowrap [font-style:var(--body-b-14-22-500-font-style)]">
          {country.name} ({country.code})
        </div>
      </div>
      {isSelected && (
        <div className="inline-flex flex-col items-center gap-2.5 p-[11px] relative flex-[0_0_auto]">
          <div className="inline-flex items-center justify-center gap-2.5 p-1 relative flex-[0_0_auto] bg-[#204544] rounded-[100px]">
            <CheckIcon className="w-4 h-4 text-white" />
          </div>
        </div>
      )}
      {showDivider && <div className="absolute left-5 right-5 bottom-0 h-px bg-[#2045441a]" />}
    </Button>
  );
}


