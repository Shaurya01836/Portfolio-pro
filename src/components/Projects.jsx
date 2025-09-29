import Cards from "./Cards";
import Cryptify from "../assets/Cryptify.png";
import AcheWaleBhaiya from "../assets/Ache_Wale_bhaiya.png";

function Projects() {
  return (
    <div className="flex flex-col items-center w-full px-8 py-20 gap-10 text-black">
      {/* Section Header */}
      <div className="">
        <h1 className="font-bold text-3xl lg:text-4xl">Recent Projects</h1>
      </div>

      {/* Uniform Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        {/* All projects now have the same size */}
        <Cards
          title="Cryptify"
          description="A next-gen Web3 payment dApp for secure crypto transfers with personalized usernames and smart work commitments."
          techStack={["React", "Tailwind CSS", "Solidity"]}
          liveDemo="https://cryptify-defi.vercel.app/"
          image={Cryptify}
        />
        <Cards
          title="PayPact"
          description="A decentralized dApp on Solana that simplifies and secures group payments using on-chain 'pacts' for transparency."
          techStack={["Solana", "Web3Auth", "React"]}
          liveDemo="https://github.com/dhruv457457/paypact"
          image="https://i.imgur.com/A607K5L.png"
        />
        <Cards
          title="Devora"
          description="A comprehensive hackathon management system designed to streamline event organization and participation."
          techStack={["MERN Stack", "Socket.io"]}
          liveDemo="https://github.com/Nitinjainn/Devora"
          image="https://i.imgur.com/i1OFyLh.png"
        />
        <Cards
          title="Virtual Herbal Garden"
          description="A web app helping users explore a variety of herbs, their uses, and benefits, built with React and Firebase."
          techStack={["React", "Firebase", "MongoDB"]}
          liveDemo="https://ayurherb.vercel.app/"
          image="https://i.ibb.co/prKX52Sw/Screenshot-194.png"
        />
        {/* <Cards
          title="Ache Wale Bhaiya"
          description="An e-commerce platform for new and second-hand tech gadgets, featuring a clean interface and robust backend."
          techStack={["React", "Firebase", "Tailwind CSS"]}
          liveDemo="https://ache-wale-bhaiya.vercel.app/"
          image={AcheWaleBhaiya}
        /> */}
      </div>
    </div>
  );
}

export default Projects;