import BentoCard from "./BentoCard";

// Logos
const githubLogoUrl =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg";
const leetcodeLogoUrl =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leetcode/leetcode-original.svg";
const gfgLogoUrl =
  "https://media.geeksforgeeks.org/wp-content/uploads/20230403183704/gfg_logo.png";
const hackerrankLogoUrl =
  "https://cdn-1.webcatalog.io/catalog/hackerrank/hackerrank-icon.png";
const resumeUrl =
  "https://media.licdn.com/dms/image/v2/D562DAQHbpZH_5T8L3w/profile-treasury-image-shrink_800_800/B56ZlH.z9YIAAY-/0/1757849273848?e=1759773600&v=beta&t=4-vUpROOgpYyF2VpolMNSBVo_b4iyfrVZhXw-AXTOIk";

const Header = () => {
  return (
    <div className="p-4 md:p-8 text-black lg:min-h-screen flex items-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {/* Location Card */}
        <BentoCard className="col-span-2 h-48 p-0">
          <img
            src="https://i.ibb.co/hF4P8c3v/Screenshot-2025-09-29-232503.png"
            alt="Map of Jaipur"
            className="w-full h-full object-cover rounded-2xl"
          />
        </BentoCard>

        {/* CRT Presentation Card */}
        <BentoCard className="h-48 p-0">
          <img
            src="https://i.ibb.co/HDG54N2Q/1747907083945.jpg" // Replace with a real image URL
            alt="CRT Presentation"
            className="w-full h-full object-cover rounded-2xl"
          />
        </BentoCard>

        {/* --- Updated Centered Link Cards --- */}
        <BentoCard className="h-48 p-4">
          <a
            href="https://hackerrank-resume.s3.us-east-1.amazonaws.com/uploads/26823516/MjY4MjM1MTY=.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="h-full w-full flex flex-col items-center justify-center text-center gap-2"
          >
            <img src={resumeUrl} alt="GitHub Logo" className="w-10 h-10" />
            <div>
              <h2 className="font-semibold text-lg">Resume</h2>
              <p className="text-gray-500 text-sm">shaurya.resume</p>
            </div>
          </a>
        </BentoCard>

        <BentoCard className="h-48 p-4">
          <a
            href="https://github.com/Shaurya01836"
            target="_blank"
            rel="noopener noreferrer"
            className="h-full w-full flex flex-col items-center justify-center text-center gap-2"
          >
            <img src={githubLogoUrl} alt="GitHub Logo" className="w-10 h-10" />
            <div>
              <h2 className="font-semibold text-lg">GitHub Profile</h2>
              <p className="text-gray-500 text-sm">github.com</p>
            </div>
          </a>
        </BentoCard>

        <BentoCard className="h-48 p-4">
          <a
            href="https://leetcode.com/u/shaurya01836/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-full w-full flex flex-col items-center justify-center text-center gap-2"
          >
            <img
              src={leetcodeLogoUrl}
              alt="LeetCode Logo"
              className="w-10 h-10"
            />
            <div>
              <h2 className="font-semibold text-lg">LeetCode Profile</h2>
              <p className="text-gray-500 text-sm">leetcode.com</p>
            </div>
          </a>
        </BentoCard>

        <BentoCard className="h-48 p-4">
          <a
            href="https://www.geeksforgeeks.org/user/shaurya3ms8/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-full w-full flex flex-col items-center justify-center text-center gap-2"
          >
            <img
              src={gfgLogoUrl}
              alt="GeeksForGeeks Logo"
              className="w-10 h-10"
            />
            <div>
              <h2 className="font-semibold text-lg">Geeks for Geeks</h2>
              <p className="text-gray-500 text-sm">geeksforgeeks.org</p>
            </div>
          </a>
        </BentoCard>

        <BentoCard className="h-48 p-4">
          <a
            href="https://www.hackerrank.com/profile/shaurya01836"
            target="_blank"
            rel="noopener noreferrer"
            className="h-full w-full flex flex-col items-center justify-center text-center gap-2"
          >
            <img
              src={hackerrankLogoUrl}
              alt="HackerRank Logo"
              className="w-10 h-10"
            />
            <div>
              <h2 className="font-semibold text-lg">HackerRank Profile</h2>
              <p className="text-gray-500 text-sm">hackerrank.com</p>
            </div>
          </a>
        </BentoCard>
      </div>
    </div>
  );
};

export default Header;
