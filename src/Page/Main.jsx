import React from 'react'
import ProductAll from './ProductAll'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from './Footer';

const Main = () => {
  return (
    <div >
        <div>
            <span className='discountTxt'>회원 혜택: 3만원 이상 무료배송 & 첫 구매 10% 할인</span>
        </div>
        <a href="#" className='discountTxtBox'>
            <div class="discountTxt_container">
                <h1>10% off sitewide! No code required</h1>
            </div>
        </a>
        <a href="#">
            <div class="discountTxt2_container">
                <img src='https://www.coca-cola.co.kr/content/dam/journey/kr/ko/stories/brand-story/40-coca-cola-hm-collaboration/coca-cola-HM-collaboration-03.jpg'/>
            </div>
            </a>
        <ProductAll/>
        <div className='card_container'>
            <div className='card_containerTxt' >
                <h1>MAGAZINE</h1>
                <a href="#"style={{ textDecoration:'none', color:'black', textAlign:'center'}}>READ H&M MAGAZINE</a>
            </div>
            <div className='magazine_card'>
                <Card className='mCard' style={{ width: '18rem' , marginRight : '20px'}}>
                    <Card.Img variant="top" src="https://www2.hm.com/content/dam/hm-magazine-2023/june_2023/4018-lakwena-hm/4018-Magazine-TOP-1688x1126.jpg" />
                    <Card.Body>
                        <Card.Text style={{ fontSize:'12px', marginBottom:'30px',textAlign:'center'}}>
                        INSIDE H&M
                        </Card.Text >
                        <Card.Title  style={{ fontSize:'16px', marginBottom:'50px',textAlign:'center'}}>LAKWENA X H&M 콜라보 컬렉션으로 이번 여름을 행복하게 즐기세요</Card.Title>
                        <a href='#' style={{ textDecoration:'none', color:'black'}}>Read The Story 🔜</a>
                    </Card.Body>
                </Card>
                <Card className='mCard' style={{ width: '18rem' , marginRight : '20px' }}>
                    <Card.Img variant="top" src="https://image.hm.com/content/dam/hm-magazine-2023/july_2023/coachella-member-event/Magazine-Coachella-Teaser-image-1688x1126px.jpg?imwidth=384" />
                    <Card.Body>
                        <Card.Text style={{ fontSize:'12px', marginBottom:'30px',textAlign:'center'}}>
                        INSIDE H&M
                        </Card.Text >
                        <Card.Title  style={{ fontSize:'16px', marginBottom:'50px',textAlign:'center'}}>Coachella에 함께한 두 명의 H&M 멤버</Card.Title>
                        <a href='#' style={{ textDecoration:'none', color:'black'}}>Read The Story 🔜</a>
                    </Card.Body>
                </Card>
                <Card className='mCard' style={{ width: '18rem' , marginRight : '20px'}}>
                    <Card.Img variant="top" src="https://image.hm.com/content/dam/hm-magazine-2023/june_2023/disney100-x-trevor-andrew/Magazine-3008-Disney-Topimage-1688x1126px-72ppi.jpg?imwidth=384" />
                    <Card.Body>
                        <Card.Text style={{ fontSize:'12px', marginBottom:'30px',textAlign:'center'}}>
                        INSIDE H&M
                        </Card.Text >
                        <Card.Title  style={{ fontSize:'16px', marginBottom:'50px',textAlign:'center'}}>Disney100 x H&M</Card.Title>
                        <a href='#' style={{ textDecoration:'none', color:'black'}}>Read The Story 🔜</a>
                    </Card.Body>
                </Card>
            </div>
        </div>
        
    </div>
  )
}

export default Main