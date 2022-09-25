import React from 'react'
import { useEffect, useState } from 'react'
import { TopButtons } from './TopButtonElements';
const TopButton = () => {
    const [toTop, setToTop] = useState(false);
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setToTop(true)
            } else {
                setToTop(false)
            }
        })
    }, [])

    return (
        <>
            {toTop && (
                <>
                    <TopButtons onClick={scrollUp}>
                        <i className="fa-solid fa-arrow-up"></i>
                    </TopButtons>
                </>
            )}
        </>
    )
}

export default TopButton