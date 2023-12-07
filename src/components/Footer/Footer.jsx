import React, { useState } from "react";
import styles from "../../styles/Footer.module.scss";
import SendIcon from "@mui/icons-material/Send";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FaTiktok } from "react-icons/fa6";
import { Logo } from "@/constants/images";
import FacebookIcon from "@mui/icons-material/Facebook";
export default function Footer() {
  const contactInitialDetails = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [contactDetails, setContactDetails] = useState(contactInitialDetails);
  const onContactInputChange = (e) => {
    setContactDetails({ ...contactDetails, [e.target.name]: e.target.value });
  };
  const handleSubmitContact = () => {
    console.log(contactDetails);
    setContactDetails(contactInitialDetails);
  };

  const [newsletter, setNewsletter] = useState("");
  const handleSubmitEmail = () => {
    console.log(newsletter);
    setNewsletter("");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_details}>
        <img alt="logo" src={Logo} />
        <p>test@gmail.com</p>
        <p>Kathmandu,Nepal</p>
        <p>+977-9843-XXX-XXX</p>
      </div>
      <div className={styles.wrapper_contact}>
        <h2>Request product</h2>
        <table>
          <tr>
            <td>Name</td>
            <td>
              <input
                name="name"
                onChange={(e) => onContactInputChange(e)}
                value={contactDetails.name}
              />
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <input
                name="email"
                onChange={(e) => onContactInputChange(e)}
                value={contactDetails.email}
              />
            </td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>
              <input
                name="phone"
                onChange={(e) => onContactInputChange(e)}
                value={contactDetails.phone}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2} className={styles.wrapper_contact_messagebox}>
              <textarea
                placeholder="Leave your message"
                cols={30}
                rows={10}
                name="message"
                onChange={(e) => onContactInputChange(e)}
                value={contactDetails.message}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button onClick={handleSubmitContact}>Submit</button>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.wrapper_socialmedia}>
        <h2>Stay in touch</h2>
        <div className={styles.wrapper_socialmedia_icons}>
          <button>
            <FaTiktok />
          </button>
          <button>
            <InstagramIcon />
          </button>
          <button>
            <FacebookIcon />
          </button>
        </div>
        <h3>Subscribe to Newsletter</h3>
        <div className={styles.wrapper_socialmedia_searchbox}>
          <input
            placeholder="Know more about us"
            value={newsletter}
            onChange={(e) => setNewsletter(e.target.value)}
          />
          <button onClick={handleSubmitEmail}>
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
