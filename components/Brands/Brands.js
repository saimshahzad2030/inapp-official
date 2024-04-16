import React from 'react';
import Line from '../Line/Line';
// import styles from './Brands.module.css';
import styles from './Brands2.module.css'
import { logos } from '../../constants/brands-contants'

function Brands() {
    return (
        <>
            <div>
                <section className={styles.brandsSection}>
                    <div className={styles.brandsBox}>
                        <div
                            className={styles.brandsHeading}
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                        >
                            <Line title="BRANDS" />
                            <h2>Brands we've worked with</h2>
                            <p>
                                Our customer centric approach has encouraged teaming up with our
                                clients to create world class marques; this has made us one of the
                                best brands to work with.
                            </p>
                        </div>
                        <div className={styles.mainBox}>
                            <div className={styles.gridLogos} data-aos="fade-up" data-aos-duration="1000">
                                {
                                    logos.map((logo, index) => {
                                        return (
                                            <a className={styles.gridLogosItem} key={index}>
                                                <img
                                                    className={styles.gridLogosItemImg}
                                                    src={logo.imgsrc}
                                                    width={logo.width && logo.width}
                                                    alt={`logo-${index}`} />
                                            </a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className={styles.shayan}>
                        <div
                            className={styles.backgroundImage}
                            data-aos="fade"
                            data-aos-duration="2000"
                            data-aos-delay="300"
                        >
                            <img src="/assets/images/brands-bg.jpg" alt="brands-bg" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Brands;
