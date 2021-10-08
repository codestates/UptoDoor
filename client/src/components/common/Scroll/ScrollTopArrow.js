import React,{useState,useEffect} from 'react'
import { ArrowChk,I,} from './StyledScroll'

function ScrollTopArrow() {

  const [btnStatus, setBtnStatus] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const showScrollBtn = () => {
    setScrollY(window.pageYOffset);
    if (scrollY > 400) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0);
    setBtnStatus(false);
  }
  useEffect(() => {
    const chkScroll = () => {
      window.addEventListener("scroll", showScrollBtn);
    };
    chkScroll();
    return () => {
      window.removeEventListener("scroll", showScrollBtn);
    };
  });

  return (
    <ArrowChk>
      <I 
        className={
        btnStatus
          ? "fas fa-angle-double-up click-icon active"
          : "fas fa-angle-double-up click-icon"
        }
        onClick={scrollTop}>
      </I>
    </ArrowChk>
  )
}

export default ScrollTopArrow
