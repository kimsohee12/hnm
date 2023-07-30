import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <div style={{ marginTop:'60px'}}>
        <MDBFooter className='text-center text-white' style={{ backgroundColor: '#E6E6E6' }}>
            <MDBContainer className='p-4 pb-0'>
                <section className=''>
                <p className='d-flex justify-content-center align-items-center'style={{ flexDirection:'column' }}>
                    <div>
                        <span className='me-3'  style={{ color: 'black',fontSize:'14px' }}>H&M site clone</span>
                        <span className='me-3'  style={{ color: 'black',fontSize:'14px'}}>- kimsohee</span>
                    </div>
                    <span className='me-3'  style={{ color: 'black', marginTop:'10px',fontSize:'15px'}}>The content of this site is a project created by imitating the H&M site.</span>
                    <span className='me-3'  style={{ color: 'black', marginTop:'10px',fontSize:'15px'}}>Email : zz7854@naver.com</span>
                </p>
                <img  style={{width:'50px', margin:'15px' }} src="img/hm-logo-black-and-white.png" />
                </section>
            </MDBContainer>

        </MDBFooter>

    </div>
  )
}

export default Footer