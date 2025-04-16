const Footer = ({ darkMode }) => {
    return (
      <footer
        className={`text-center py-4 mt-10 border-t ${
          darkMode ? "bg-gray-800 text-white border-gray-700" : "bg-white text-gray-600 border-gray-300"
        }`}
      >
        © {new Date().getFullYear()} Naukri Clone. Built for learning purpose.
      </footer>
    );
  };
  
  export default Footer;
  