const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8 px-6 text-center">
      <p className="text-white font-black text-lg mb-1">
        Obisco<span className="text-orange-500">Dev</span>
      </p>
      <p className="text-gray-500 text-sm mb-4">
        Full Stack Developer & Tech Entrepreneur
      </p>
      <div className="flex justify-center gap-6 mb-6">
        <a
          href="https://github.com/obiscolmt-pixel"
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 hover:text-orange-500 transition text-sm"
        >
          GitHub
        </a>
        <a
          href="mailto:obiscolmt@gmail.com"
          className="text-gray-500 hover:text-orange-500 transition text-sm"
        >
          Email
        </a>
        <a
          href="https://wa.me/2349049863067"
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 hover:text-orange-500 transition text-sm"
        >
          WhatsApp
        </a>
      </div>
      <p className="text-gray-600 text-xs">
        © 2026 Ariogba Patrick Obinna. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
