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
    <div style={{ marginTop:'50px'}}>
        <MDBFooter className='text-center text-white' style={{ backgroundColor: '#E6E6E6' }}>
            <MDBContainer className='p-4 pb-0'>
                <section className=''>
                <p className='d-flex justify-content-center align-items-center'>
                    <span className='me-3'  style={{ color: 'black' }}>H&M site clone</span>
                    <span className='me-3'  style={{ color: 'black' }}>- kimsohee</span>
                    <span className='me-3'  style={{ color: 'black' }}>- kimsohee</span>
                </p>
                <img  style={{width:'50px' }} src="img/hm-logo-black-and-white.png" />
                </section>
            </MDBContainer>

        </MDBFooter>

    </div>
  )
}

export default Footer