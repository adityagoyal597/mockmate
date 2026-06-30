import Button from "../common/Button";

const navLinks = [
  "Features",
  "Pricing",
  "Login",
];

function Navbar() {
  return (
    <nav className="h-20 border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
            M
          </div>

          <h1 className="text-3xl font-bold">
            Mock<span className="text-blue-600">Mate</span>
          </h1>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8">

          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-700 font-medium hover:text-blue-600 transition duration-200"
            >
              {link}
            </a>
          ))}

          <Button>

Get Started

</Button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;