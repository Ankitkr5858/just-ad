import { ReactNode } from "react";
import { LogoIntro } from "./LogoIntro";

interface AuthScaffoldProps {
  leftArtworkImage: string;
  rightArtworkImage?: string;
  children: ReactNode;
}

export function AuthScaffold({ leftArtworkImage, rightArtworkImage, children }: AuthScaffoldProps): JSX.Element {
  return (
    <section className="flex w-full h-[982px] relative items-center justify-center bg-white rounded-[73.5px] overflow-hidden">
      <div className="flex w-[720px] items-center justify-center gap-2.5 px-0 py-10 relative h-full">
        <div className="flex flex-col items-start gap-[30px] p-12 relative flex-1 h-full bg-[#eaeee999] rounded-[32px] overflow-hidden">
          <div className="absolute top-0 left-[-230px] w-[450px] h-[407px]" />
          <div className="flex flex-col h-[513px] items-center gap-10 relative w-full">
            <LogoIntro />
          </div>
          <img className="absolute left-[calc(50.00%_-_360px)] bottom-0 w-[720px] h-[404px]" alt="Login bg" src={leftArtworkImage} />
        </div>

        <div className="flex flex-col w-[calc(100%_-_250px)] items-center gap-[30px] p-10 absolute top-[275px] left-[125px] bg-[#ffffff4c] rounded-[32px] overflow-hidden border-[none] shadow-[0px_-7px_18px_#20454408,0px_8px_42px_#2045440f] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[32px] before:[background:linear-gradient(143deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          {children}
        </div>
      </div>
    </section>
  );
}


