
function SideBar() {
    const divImgStyle = {
        width: '24px',
        height: '24px',
        marginLeft: '6px', // Adjusted margin to 6px
        verticalAlign: 'middle', // Centering the image vertically
    };

    const spanStyle = {
        height: '27px',
        display: 'inline-flex', // To center the text vertically
        alignItems: 'center', // To center the text vertically
    };

    const divStyles = {
        color: '#FA782F',
        fontFamily: 'Work Sans',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '191.8%',
        letterSpacing: '0.28px',
        marginBottom: '28px',
        display: 'flex', // Ensuring divs are displayed as flex containers
        alignItems: 'center', // Centering content vertically within div
    };

    return (
        <div className="side-bar">
            <div className="side-bar-content">
                <svg className='side-bar-top-line' xmlns="http://www.w3.org/2000/svg" width="203" height="1" viewBox="0 0 203 1" fill="none">
                    <path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M0 0.5C0 0.223858 0.223858 0 0.5 0H202.5C202.776 0 203 0.223858 203 0.5C203 0.776142 202.776 1 202.5 1H0.499998C0.223855 1 0 0.776142 0 0.5Z" fill="black" />
                </svg>
                <div className='side-bar-top-content'>
                    <div style={divStyles}>
                        <img src="/images/1.svg" alt="" style={divImgStyle} /><span style={spanStyle}>My Projct</span>
                    </div>
                    <div style={{ ...divStyles, color: '#C4C4C4' }}>
                        <img src="/images/2.svg" alt="" style={divImgStyle} /><span style={spanStyle}>Sample Projects</span>
                    </div>
                    <svg className='side-bar-top-line' style={{marginBottom:'28px'}} xmlns="http://www.w3.org/2000/svg" width="203" height="1" viewBox="0 0 203 1" fill="none">
                        <path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M0 0.5C0 0.223858 0.223858 0 0.5 0H202.5C202.776 0 203 0.223858 203 0.5C203 0.776142 202.776 1 202.5 1H0.499998C0.223855 1 0 0.776142 0 0.5Z" fill="black" />
                    </svg>
                    <div style={{ ...divStyles, color: '#C4C4C4' }}>
                        <img src="/images/3.svg" alt="" style={divImgStyle} /><span style={spanStyle}>Apps</span>
                    </div>
                    <div style={{ ...divStyles, color: '#C4C4C4' }}>
                        <img src="/images/4.svg" alt="" style={divImgStyle} /><span style={spanStyle}>Intro to Necleo</span>
                    </div>
                </div>
            </div>
            <div className="side-bar-content" style={{marginTop:'833.5px'}}>  
                <div className='side-bar-top-content'>
                    <div style={{ ...divStyles, color: '#C4C4C4' }}>
                        <img src="/images/5.svg" alt="" style={divImgStyle} /><span style={spanStyle}>My Projct</span>
                    </div>
                    <div style={{ ...divStyles, color: '#C4C4C4' }}>
                        <img src="/images/6.svg" alt="" style={divImgStyle} /><span style={spanStyle}>Sample Projects</span>
                    </div>
                    <div style={{ ...divStyles, color: '#000' }}>
                        <img src="/images/7.svg" alt="" style={divImgStyle} /><span style={spanStyle}>Apps</span>
                    </div>       
                </div>
            </div>
        </div>
    )
}

export default SideBar
