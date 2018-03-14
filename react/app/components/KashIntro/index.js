import React from 'react';
import LogoImg from '../../images/store/logo.png';
import FingerImg from '../../images/KashIntro/finger.png';
import BCenter from '../../BComponents/BCenter';
import BPage from '../../BComponents/BPage';
import BBtn from '../../BComponents/BBtn';
import { InImg, BlueBg, BName, UnderL, BSalary, FinImg } from './skins';
import { FormattedMessage } from 'react-intl';
import messages from '../../containers/KashIntro/messages';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import '../../css/slick.css';
import { BUEName } from '../../urls';


const settings = {
    className: 'eligibleSlider',
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false
};

const KashIntro = props => {
    const { userName } = props;
    const { headerHi, getYour, salAdv, getInst, isNow, veryEasy } = messages;
    return (
        <BPage noPad>
            <BCenter>
                <InImg src = { LogoImg } />
            </BCenter>
            
            <BlueBg>
            <Slider {...settings}>
                <div>
                    <BName><FormattedMessage { ...headerHi } /> { userName },</BName>
                    <br />
                    <BSalary>
                        <FormattedMessage { ...getYour } />
                        <UnderL><FormattedMessage { ...salAdv } /></UnderL>
                        <FormattedMessage { ...isNow } />
                        <UnderL><FormattedMessage { ...veryEasy } /></UnderL>
                    </BSalary>
                </div>
                <div>
                    <BName><FormattedMessage { ...headerHi } /> { userName },</BName>
                    <br />
                    <BSalary>
                        <FormattedMessage { ...getYour } />
                        <UnderL><FormattedMessage { ...salAdv } /></UnderL>
                        <FormattedMessage { ...isNow } />
                        <UnderL><FormattedMessage { ...veryEasy } /></UnderL>
                    </BSalary>
                </div>
                <div>
                    <BName><FormattedMessage { ...headerHi } /> { userName },</BName>
                    <br />
                    <BSalary>
                        <FormattedMessage { ...getYour } />
                        <UnderL><FormattedMessage { ...salAdv } /></UnderL>
                        <FormattedMessage { ...isNow } />
                        <UnderL><FormattedMessage { ...veryEasy } /></UnderL>
                    </BSalary>
                </div>
            </Slider>
             <FinImg src = { FingerImg } />
            </BlueBg>
            <BCenter>
                <Link to = { BUEName }><BBtn><FormattedMessage { ...getInst } /></BBtn></Link>
            </BCenter>
        </BPage>
    )
}

export default KashIntro;