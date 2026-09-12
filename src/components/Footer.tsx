import footerLogo from "../assets/logo-text.png";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="container mx-auto px-6 pt-16 pb-12 border-t-2 border-gray-200">
      <div className="flex justify-between mb-12 md:gap-8 lg:justify-between ">
        {/* Left content */}
        <div className="space-y-3 flex flex-col justify-center items-center md:justify-start md:items-start ">
          <img src={footerLogo} alt="" />
          <p className="text-[#64748b] text-center md:text-left max-w-137.5">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <ul className="flex gap-8 md:gap-3  font-semibold">
            <li>Github</li>
            <li className="list-disc md:list-none">Twitter</li>
            <li className="list-disc md:list-none">Linkedin</li>
          </ul>
        </div>
        {/* left middel */}
        <div className="hidden md:block">
          <h1 className="mb-4 font-bold">PRODUCT</h1>
          <ul className="space-y-2.5 text-[#64748b]">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
          </ul>
        </div>
        {/* right middel */}
        <div className="hidden md:block">
          <h1 className="mb-4 font-bold">COMPANY</h1>
          <ul className="space-y-2.5 text-[#64748b]">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>
        {/* Rgiht content*/}
        <div className="hidden md:block">
          <h1 className="mb-4 font-bold">LEGAL</h1>
          <ul className="space-y-2.5 text-[#64748b]">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex flex-col items-center gap-2 md:justify-between md:flex-row mt-8">
        <p className="text-[#94a3b8] text-base ">
          © 2026 Dev Stack. All rights reserved.
        </p>
        <ul className="flex gap-4 text-base  text-[#94a3b8]">
          <li>Privacy</li>
          <li>Terms</li>
        </ul>
      </div>
    </div>
  );
}
