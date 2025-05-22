function Header() {
  return (
    <div className="flex flex-col items-center w-full px-6 py-16 md:px-20 md:py-28 gap-10 bg-background text-center text-foreground">
      <div className="flex flex-col gap-5 items-center">
        <p className="px-4 py-1 border border-customBlue rounded-full text-sm text-customBlue font-medium">
          Available for freelance work
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white">
          Hi, I'm <span className="text-customBlue">Shaurya</span>
        </h1>

        <p className="text-lg md:text-xl font-medium text-gray-400">
          Web Developer | React & Java Enthusiast
        </p>

        <p className="text-sm md:text-lg max-w-2xl text-gray-400">
          I craft responsive, user-friendly web experiences with modern
          technologies. Passionate about clean code, intuitive UIs, and creating
          digital solutions that make a difference.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-5 items-center">
        <button className="bg-customBlue hover:bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold text-sm">
          View Projects
        </button>

        <a
          href="https://hackerrank-resume.s3.us-east-1.amazonaws.com/uploads/26823516/MjY4MjM1MTY=.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-black text-white px-6 py-2 border border-white rounded-xl font-semibold text-sm hover:bg-customorange"
        >
          <span>View Resume</span>
          <span>↓</span>
        </a>
      </div>
    </div>
  );
}

export default Header;
