import React from 'react'
import { Row } from 'react-bootstrap'

function YokoFooter() {
  return (
    <footer className='footer-container
    
    flex justify-center py-4'>
        <div className='footer-layer'>
            <strong className='lilita-one-regular'>Information</strong>
            <small className='text-footer-p'>
                company.요코{`(Yoko)`}
            <br/>
            business no.233-34-00010
            <br/>
            adress.{`[xxxxx]`} 서울특별시 
            <br/>
            정릉로 3길 46 정릉빌딩 4층
            </small>
            <small className='text-footer-p mt-14'>
            * 반품시 위 주소로 상품을 보내주시면 됩니다
            </small>

        </div>
        <div className='footer-layer'>
        <strong className='lilita-one-regular'>CUSTOMER CENTER</strong>
        <strong>070-0000-0000</strong>
        <small className='text-footer-p'>
            Mon-Fri PM13:00 ~ PM17:00
            <br/>
        {`(주말,공휴일 휴무)`}
        </small>
        <small className='text-footer-p mt-14'>
        * 통화량이 많아 상담연결이 어려울 경우<br/>
        게시판으로 문의 이용해주세요.
        </small>

        </div>
        <div className='footer-layer'>
        <strong className='lilita-one-regular'>RETURN/EXCHANGE</strong>
        <small className='text-footer-p'>
        {`[교환/반품 주소지]`}<br/>
        서울 성북구 정릉로 정릉빌딩 406호
            <br/>
            CJ대한통운 고객센터 : 1588-1255
        </small>
        <small className='text-footer-p mt-5'>
        * 무통장거래시 주문자와 입금자가 <br/>
        다를 경우 입금 확인이 지연될 수 <br/>
        있습니다.
        </small>
        </div>
        <div className='footer-layer'>
        <strong className='lilita-one-regular'>COMMUNITY</strong>
        <div className='footer-bttn-table'>
            <div className='flex mb-2 w-full'>
            <a className='mr-1'>NOTICE</a>
            <a className='px-4 '>FAQ</a>
            </div>
            <div className='flex w-full mb-5'>
            <a className='mr-1 px-3'>Q&A</a>
            <a>REVIEW</a>
            </div>
            <small className='text-footer-p'>
            * 공지사항 및 이용안내를 참고하여<br/>
            지정택배사로 반품요청해주세요.
            </small>
        </div>
        </div>

    </footer>
  )
}

export default YokoFooter
