import { useEffect, useRef } from "react"
import { textIntro, buttonIntro, imgIntro } from "./Animate"
import { Link } from "react-router-dom"

const HomepageSlider = () => {
    let firstLine = useRef(null)
    let secondLine = useRef(null)
    let thirdLine = useRef(null)
    let firstButton = useRef(null)
    let firstImg = useRef(null)

    useEffect(() => {
        textIntro(firstLine)
        textIntro(secondLine)
        textIntro(thirdLine)
        buttonIntro(firstButton)
        imgIntro(firstImg)
    }, [firstLine, secondLine, thirdLine, firstButton])
    return (
        <div style={{ 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'height': '100vh' }}>
            <div className="container px-3 px-lg-5">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center align-items-center order-lg-2 mb-5 mb-md-0">
                        <div>
                            <img ref={(el) => { firstImg = el }} src="/me2.jpg" alt='Abhi Rijal' className="img-fluid rounded-circle mx-auto d-block" style={{ 'width': '500px', 'height': 'auto' }} />
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center order-lg-1">
                        <div className="font-manrope mb-2" ref={(el) => { firstLine = el }} style={{ 'fontSize': '40px', 'textAlign': 'left' }}>Hi,</div>
                        <div className="font-manrope fw-semibold mb-2" ref={(el) => { secondLine = el }} style={{ 'fontSize': '55px', 'textAlign': 'left' }}>I'm Abhi Rijal,</div>
                        <div className="font-manrope mb-5" ref={(el) => { thirdLine = el }} style={{ 'fontSize': '24px', 'textAlign': 'left' }}>a software engineer specializing in full stack developement.</div>
                        <div className="d-flex mt-4">
                            <Link to={'/about'} ref={(el) => { firstButton = el }} type="button" className="btn btn-primary bg-red border-red font-manrope rounded-pill fw-bold py-3 text-left" style={{ 'whiteSpace': 'nowrap' }}>know more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomepageSlider;