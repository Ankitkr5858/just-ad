import { SearchIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { Input } from "../../../../components/ui/input";
import { CountryRow } from "./CountryRow";
import { allCountries as allCountriesData, preferredCountries } from "./data";
import { CountryWithMeta } from "./types";

interface CountrySelectionPopupSectionProps {
  onClose?: () => void;
  onCountrySelect?: (country: { name: string; code: string; flag: string }) => void;
}

export const CountrySelectionPopupSection = ({ onClose, onCountrySelect }: CountrySelectionPopupSectionProps): JSX.Element => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<CountryWithMeta | null>(preferredCountries[0]);

  const filteredPreferred = useMemo(() => {
    if (!query) return preferredCountries;
    const q = query.toLowerCase();
    return preferredCountries.filter(c => `${c.name} ${c.code}`.toLowerCase().includes(q));
  }, [query]);

  const filteredAll = useMemo(() => {
    if (!query) return allCountriesData;
    const q = query.toLowerCase();
    return allCountriesData.filter(c => `${c.name} ${c.code}`.toLowerCase().includes(q));
  }, [query]);

  const handleCountrySelect = (countryName: string) => {
    const country = [...preferredCountries, ...allCountriesData].find(c => c.name === countryName) || null;
    setSelected(country);
    if (country) onCountrySelect?.(country);
    onClose?.();
  };

  return (
    <div className="flex w-full h-full relative items-center justify-center">

      <div className="absolute top-0 left-0 w-full h-full bg-[#00000066]" />

      <div className="absolute top-[calc(50.00%_-_341px)] left-[calc(50.00%_-_215px)] w-[430px] h-[683px] rounded-[32px] overflow-hidden border-[none] shadow-[0px_-7px_18px_#2025230d,0px_8px_42px_#0000001a] backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(255,255,255,0.75)_0%,rgba(255,255,255,0.75)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[32px] before:[background:linear-gradient(143deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <header className="absolute top-[77px] left-[calc(50.00%_-_195px)] font-heading-h-26-26-600 font-[number:var(--heading-h-26-26-600-font-weight)] text-[#202523] text-[length:var(--heading-h-26-26-600-font-size)] tracking-[var(--heading-h-26-26-600-letter-spacing)] leading-[var(--heading-h-26-26-600-line-height)] whitespace-nowrap [font-style:var(--heading-h-26-26-600-font-style)]">
          Select a Country
        </header>

        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-5 left-5 z-10 w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-white/90"
        >
          <img className="w-[12px] h-[12px]" alt="Close" src="/vector.svg" />
        </button>

        <div className="flex w-[390px] h-12 items-center gap-3.5 p-4 absolute top-[126px] left-[calc(50.00%_-_195px)] bg-white rounded-[100px] border border-solid border-[#99a1b7]">
          <SearchIcon className="w-4 h-4 text-gray-80" />
          <Input
            placeholder="Search a country"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="relative flex-1 border-0 bg-transparent p-0 text-sm font-medium text-gray-600 placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
          />
        </div>

        <div className="absolute top-[174px] left-0 w-[430px] h-[450px] overflow-y-auto">
          <div className="flex flex-col items-start gap-1 px-0 py-2 relative w-full">
            {filteredPreferred.map((country, index) => (
              <CountryRow
                key={`country-${index}`}
                country={country}
                isSelected={selected?.name === country.name}
                onSelect={handleCountrySelect}
              />
            ))}
          </div>

          <div className="flex items-center gap-2.5 px-6 py-2.5 relative w-full">
            <div className="relative w-fit mt-[-1.00px] font-body-b-12-12-500 font-[number:var(--body-b-12-12-500-font-weight)] text-[#6b758a] text-[length:var(--body-b-12-12-500-font-size)] text-center tracking-[var(--body-b-12-12-500-letter-spacing)] leading-[var(--body-b-12-12-500-line-height)] whitespace-nowrap [font-style:var(--body-b-12-12-500-font-style)]">
              All Country
            </div>
          </div>

          <div className="flex flex-col items-start gap-1 px-0 py-2 relative w-full">
            {filteredAll.map((country, index) => (
              <CountryRow
                key={`all-country-${index}`}
                country={country}
                isSelected={selected?.name === country.name}
                onSelect={handleCountrySelect}
              />
            ))}
          </div>
        </div>

        {/* removed static scrollbar decoration */}
      </div>
    </div>
  );
};
