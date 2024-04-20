import CHLogo from "../Assets/CHLogo.jpeg"

export default function HomeSub(){
    return(
        <div>
            
        <div className='sec-sub-container'>
          <div className="left-content">
            <img src={CHLogo} alt="LeftImage" className="image" />
          </div>
          <div className="right-content">
            <p>Your paragraph content here</p>
          </div>
        </div>
        </div>
    )
}