import React from 'react'

const Spinner = () => {
    return (
        <div class="center flex flex-col">
            <div class="ring"></div>
            {/* <div>
                <h1 className='spinnerH1'>Project Vely...  </h1><br/>
                </div> */}
            <div className="waviy">
                <span style={{ "--i": 1 }}>E</span>
                <span style={{ "--i": 2 }}>D</span>
                <span style={{ "--i": 3 }}>U</span>
                <span style={{ "--i": 3 }}>C</span>
                <span style={{ "--i": 4 }}>A</span>
                <span style={{ "--i": 5 }}>T</span>
                <span style={{ "--i": 6 }}>E</span>
                <span style={{ "--i": 3 }}>&nbsp;&nbsp;</span>
                {/* <span style={{ "--i": 7 }}>V</span>
                                <span style={{ "--i": 8 }}>E</span>
                                <span style={{ "--i": 9 }}>L</span>
                                <span style={{ "--i": 10}}>L</span>
                                <span style={{ "--i": 11 }}>Y</span> */}

            </div>

            <div>
                <h1 className='spinnerH1 text-[20px] text-green-300'>Get Better Every Day...  </h1><br />
            </div>

        </div>
    )
}

export default Spinner