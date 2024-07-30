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
  <polygon className="cls-1" points="31.75 2.39 33.64 8.2 39.75 8.2 34.8 11.8 36.69 17.61 31.75 14.02 26.81 17.61 28.7 11.8 23.75 8.2 29.86 8.2 31.75 2.39"/>
  <polygon className="cls-1" points="50 2.39 51.89 8.2 58 8.2 53.05 11.8 54.94 17.61 50 14.02 45.06 17.61 46.95 11.8 42 8.2 48.11 8.2 50 2.39"/>
    </Custom1StarSVG>
    </>
  )
}

export default OneStars