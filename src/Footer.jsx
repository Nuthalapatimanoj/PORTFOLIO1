import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; {new Date().getFullYear()} Manoj. All rights reserved.</p>
      <div className="foot-end">
        <ul>
          <li>
            <a
              href="https://mail.google.com/mail/?view=cm&to=manojn8545@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoMail color="red" size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Nuthalapatimanoj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub color="red" size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/manojn30/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin color="red" size={20} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
