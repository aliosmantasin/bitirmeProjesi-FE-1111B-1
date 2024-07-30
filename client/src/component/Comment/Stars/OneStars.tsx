import styled from '@emotion/styled'

const Custom1StarSVG = styled("svg")`
  .cls-1 {
    fill: #faaf00;
  }
`

const OneStars = () => {
  return (
    <>
    <Custom1StarSVG id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20">
     <polygon className="cls-1" points="13.5 2.39 15.39 8.2 21.5 8.2 16.55 11.8 18.44 17.61 13.5 14.02 8.56 17.61 10.45 11.8 5.5 8.2 11.61 8.2 13.5 2.39"/>
    </Custom1StarSVG>
    </>
  )
}

export default OneStars