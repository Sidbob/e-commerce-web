import { BsFacebook } from 'react-icons/bs'
import { FaTwitter} from 'react-icons/fa'
import { ImGoogle3} from 'react-icons/im'
import { SiInstagram} from 'react-icons/si'
import { BsLinkedin} from 'react-icons/bs'
import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
      <MDBContainer className='pt-4'>
        <section className='mb-4'>
          <a
            className='btn btn-link btn-floating btn-lg text-dark m-1'
            href='https://www.facebook.com'
            role='button'
            data-mdb-ripple-color='dark'
          >
            <BsFacebook fab className='fab fa-facebook-f' />
          </a>

          <a
            className='btn btn-link btn-floating btn-lg text-dark m-1'
            href='https://twitter.com/'
            role='button'
            data-mdb-ripple-color='dark'
          >
            <FaTwitter fab className='fa-twitter' />
          </a>

          <a
            className='btn btn-link btn-floating btn-lg text-dark m-1'
            href='https://www.google.com/'
            role='button'
            data-mdb-ripple-color='dark'
          >
            <ImGoogle3 fab className='fa-google' />
          </a>

          <a
            className='btn btn-link btn-floating btn-lg text-dark m-1'
            href='https://www.instagram.com/'
            role='button'
            data-mdb-ripple-color='dark'
          >
            <SiInstagram fab className='fa-instagram' />
          </a>

          <a
            className='btn btn-link btn-floating btn-lg text-dark m-1'
            href='https://www.linkedin.com/'
            role='button'
            data-mdb-ripple-color='dark'
          >
            <BsLinkedin fab className='fa-linkedin' />
          </a>

         
        </section>
      </MDBContainer>

      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-dark' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}