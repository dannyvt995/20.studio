import React from 'react'

export default function Contact() {
  return (
    <>
        <div className=' contact-section'>
                <div className='title'>
                <h2>LET’S HAVE A CHAT</h2>
                </div>
                <div className='detail'>
                    <div className='info'>
                        <span>20studio@contact.com</span>
                        <span>+84 354 202 200</span>
                        <span>62/193 Ly Chinh Thang, P.8, Q.3, HCMC.</span>
                    </div>
                    <form>
                        <div className='nor'>
                            <input type="text" name="name" defaultValue="" placeholder='Contact name' />
                        </div>
                        <div className='spec'>
                            <input type="text" name="email" defaultValue="" placeholder='Email' />
                            <input type="text" name="phone" defaultValue="" placeholder='Phone Number' />
                        </div>
                        <div  className='nor'>
                            <select placeholder='Chọn dịch vụ'>
                                <option defaultValue="" disabled selected>Select services</option>
                                <option defaultValue="1">May</option>
                                <option defaultValue="2">Vá</option>
                                <option defaultValue="3">Rập</option>
                            </select>
                        </div>
                        <div className='nor'>
                            <textarea rows="10" defaultValue="Notes"></textarea>
                        </div>
                        <div  className='nor'>
                        <button type='submit'>Send</button>
                        </div>
                     
                    </form>
                </div>
        </div>
    </>
  )
}
