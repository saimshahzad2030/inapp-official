import { React, useState } from 'react'
import style from './Portfolio.module.css'
// import ''
export default function Portfolio() {
    const [btnselected, setBtnSelected] = useState("Mobile Apps")
    const [buttonClicked, setbuttonClicked] = useState(false)
    const handleClickBtn = (value) => {
        setBtnSelected(value)
        setbuttonClicked(true)
    }

    return (
        <>
            <div className={style.portfolioSection} style={{ display: buttonClicked ? 'none' : 'flex' }}>
                <div className={style.porfolioTopSection}>
                    <div className={style.textSection}>
                        <p style={{ fontSize: '50px', fontWeight: 'bold' }}>Our <text style={{ color: '#1d78be' }}>Portfolio</text></p>
                        <p>Welcome to your portfolio section! Here, you can showcase your projects, achievements, and skills to potential clients and employers. Upload your portfolio items to demonstrate your expertise and creativity.</p>
                        <button className={style.textSectionButton}>Schedule a Meeting</button>
                    </div>
                    <div className={style.formSection}>
                        <form action="#" method="post" className={style.form}>
                            <h4>Book a Free Consultation</h4>
                            <div className={style.fieldDiv}>

                                <input type="text" id="fullname" name="fullname" placeholder="Enter your full name" required className={style.field} />
                            </div>
                            <div className={style.fieldDiv}>

                                <input type="email" id="email" name="email" placeholder="Enter your business email" required className={style.field} />
                            </div>
                            <div className={style.fieldDiv}>

                                <input type="tel" id="phone" name="phone" placeholder="Phone number" required className={style.field} />
                            </div>
                            <div className={style.fieldDiv}>

                                <input type="text" id="subject" name="subject" placeholder="Enter Your subject" required className={style.field} />
                            </div>
                            <div className={style.fieldDiv}>

                                <textarea id="message" name="message" placeholder="Your message" rows="4" required style={{
                                    width: '80%', /* Set custom width */
                                    /* Set custom height */
                                    paddingLeft: '10px',
                                    resize: 'none' /* Disable resizing */
                                }}></textarea>
                            </div>
                            <div className={style.fieldDivBtn}>  <button type="submit" className={style.textSectionButton}>Get in Touch</button></div>
                        </form>

                    </div>
                </div>
                <div className={style.porfolioBottomSection}>
                    <img className={style.whatsappLogo} src='https://thumbs.dreamstime.com/b/whatsapp-logo-icon-voronezh-russia-january-green-round-soft-shadow-171161304.jpg' alt='whatsapp logo' />
                    <div className={style.buttonDivBottom}>
                        <button className={btnselected == "Mobile Apps" ? `${style.bottomSectionButtonSelected}` : style.bottomSectionButtonNonSelected}
                            onClick={()=>handleClickBtn("Mobile Apps")}>Mobile Apps</button>

                        <button className={btnselected == "Web Apps" ? `${style.bottomSectionButtonSelected}` : style.bottomSectionButtonNonSelected}
                            onClick={()=>handleClickBtn("Web Apps")}>Web Apps</button>
                        <button className={btnselected == "WordPress" ? `${style.bottomSectionButtonSelected}` : style.bottomSectionButtonNonSelected}
                            onClick={()=>handleClickBtn("WordPress")}>WordPress</button>
                        <button className={btnselected == "UI/UX" ? `${style.bottomSectionButtonSelected}` : style.bottomSectionButtonNonSelected}
                            onClick={()=>handleClickBtn("UI/UX")}
                        >UI/UX</button>
                    </div>
                </div>
            </div>

            <div className={style.cardDivSection} style={{ display: buttonClicked ? 'flex' : 'none' }}>
                <div className={style.backButtonDiv}>
                    <img className={style.backbtnImg} src={'../../assets/images/left.png'} alt=''
                    
                    onClick={() => {
                        setbuttonClicked(false)
                    }}/>
                     {/* <button className={style.backBtn} onClick={() => {
                    setbuttonClicked(false)
                }}>Our Portfolio Section</button>
                 */}
                 <p className={style.backBtn}><text style={{color:'black'}}>Our</text> Portfolio</p>
                </div>

                <div className={style.cardDivMain}>
                    <div className={style.card}>
                        <div className={style.cardbg1}></div>
                        <h2 className={style.cardHeading}>Mauritius</h2>
                        <p className={style.cardtext}>Great brands are created to tell a story that never stops unfolding, our aim is not only to develop and designs, we want to give our client's an experience, an impression, a promise, an outstanding symbol that will always connect and remain relevant</p>
                        <button className={style.cardButton}>View Case Study</button>
                    </div>
                    <div className={style.card}>
                        <div className={style.cardbg2}></div>
                        <h2 className={style.cardHeading}>Burj App</h2>
                        <p className={style.cardtext}>Great brands are created to tell a story that never stops unfolding, our aim is not only to develop and designs, we want to give our client's an experience, an impression, a promise, an outstanding symbol that will always connect and remain relevant</p>
                        <button className={style.cardButton}>View Case Study</button>
                    </div>
                    <div className={style.card}>
                        <div className={style.cardbg3}></div>
                        <h2 className={style.cardHeading}>QWIK</h2>
                        <p className={style.cardtext}>Great brands are created to tell a story that never stops unfolding, our aim is not only to develop and designs, we want to give our client's an experience, an impression, a promise, an outstanding symbol that will always connect and remain relevant</p>
                        <button className={style.cardButton}>View Case Study</button>
                    </div>
                </div>
            </div></>
    )
}
