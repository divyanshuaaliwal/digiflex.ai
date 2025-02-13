import { motion } from "framer-motion";
import { Wallet, Shield, Globe, Layers, Coins, Database, Lock, Server, KeyRound } from "lucide-react";
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";

const services = [
  { title: "White Label Crypto Wallet Development", icon: <Wallet />, description: "Develop pre-engineered & launch-ready platform to save time and budget." },
  { title: "DeFi Wallet Development", icon: <Shield />, description: "Offer complete asset authority & DeFi protocol access for users." },
  { title: "Web3 Wallet Development", icon: <Globe />, description: "Empower users with asset authority & streamline onboarding processes." },
  { title: "Wallet-as-a-Service (WaaS)", icon: <Layers />, description: "Leverage scalable infrastructure to build secure digital wallets." },
  { title: "MPC Wallet Development", icon: <Lock />, description: "Safeguard private keys by division & distributing among multiple parties." },
  { title: "Multi-Chain Wallet Development", icon: <Server />, description: "Streamline multi-asset management across different chains." },
  { title: "Coin-Based Wallet Development", icon: <Coins />, description: "Store proprietary tokens securely with seamless access." },
  { title: "Centralized Wallet Development", icon: <Database />, description: "Manage digital assets with instant transactions & whitelisting." },
  { title: "TRON Wallet Development", icon: <KeyRound />, description: "Secure TRX storage & transfers within the TRON blockchain." },
];

const WalletServices = () => {
  return (
    <WrapperContainer>
      <div className="container min-h-screen mx-auto py-10 lg:w-[80vw] md:w-[80vw] px-4 sm:px-6">
        <Heading>
          <h1>
            Cryptocurrency Wallet Development Services
          </h1>
        </Heading>

        {/* Responsive Grid with Centering and Left/Right Gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-start gap-2 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="text-[#1E3A8A]">{service.icon}</div>
              <h2 className="text-lg font-semibold text-[#1E3A8A]">{service.title}</h2>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default WalletServices;
