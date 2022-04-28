import React from 'react';
import './Footer.css';
import { FaMapMarkerAlt, FaMobileAlt, FaEnvelope } from 'react-icons/fa';


function Footer(props) {

    // return (
    //     <div className='footer__div' id="footer">

    //             <ul className='footer_info' id="info">
    //                 <li>
    //                 <FaMapMarkerAlt className='location-dot'/>
    //                     {/* <i className='fa-solid fa-location-dot'></i> */}
    //                     274 Redwood Shores Parkway #504, Redwood City, CA 94065
    //                 </li>
    //                 <li>
    //                     <FaMobileAlt className='mobile-icon'/>
    //                     {/* <i className='fa-solid fa-mobile-screen-button'></i> */}
    //                     650-339-3768
    //                 </li>
    //                 <li>
    //                 <FaEnvelope className='envelope-icon' />
    //                     llin@globalpartner.com
    //                 </li>
    //             </ul>

    //     </div>
     
    // );

    return (
        <div className='footer__div' id="footer">

            <div className='footer_info' id="info">
                
                <ul>
                    <li>
                        <FaMapMarkerAlt className='location-dot' />
                        274 Redwood Shores Parkway #504, Redwood City, CA 94065
                    </li>
                    <li>
                        <FaMobileAlt className='mobile-icon' />
                        650-339-3768
                    </li>
                    <li>
                        <FaEnvelope className='envelope-icon' />
                        llin@globalpartner.com
                    </li>
                </ul>
                
            </div>

        </div>

    );
}

export default Footer;
