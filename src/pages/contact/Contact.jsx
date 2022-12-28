
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

import './contact.css'

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis illum minima iure at voluptatum id!
      </Header>
      <section className="contact">
        <div className="container contact_container">
          <div className="contact_wrapper">
            <a href="mailto:bishalkhatri52@gmail.com" target="_blank" rel="noreferrer nopper"><MdEmail/></a>
            <a href="https://m.me/bishal.khatri.98/" target="_blank" rel="noreferrer nopper"><BsMessenger/></a>
            <a href="http://wa.me/+9779864743652" target="_blank" rel="noreferrer nopper"><IoLogoWhatsapp/></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact