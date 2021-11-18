import styled from 'styled-components'

export const Container = styled.section`
  background-color: #CADAC9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding-top: 10vh;
`
export const BackgroundImageBottomRight = styled.img`
  position: absolute; 
  bottom: 0px; 
  right: 0px;
  height: 660px;
`
export const BackgroundImageTopLeft = styled.img`
  position: absolute; 
  top: 0px; 
  left: 0px;
  height: 120px;
`
export const BackgroundImageTopRight = styled.img`
  position: absolute; 
  top: 0px; 
  right: 0px;
  height: 120px;
`
export const H1 = styled.h1`
  position: absolute;
  width: 483px;
  height: 216px;
  left: 160px;
  top: 300px;
  font-family: Butler;
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 72px;
  display: flex;
  align-items: center;
  color: #27311F;
`
export const BookButton = styled.button`
  position: absolute;
  width: 200px;
  height: 50px;
  left: 160px;
  top: 600px;
  position: absolute;
  background: #27311F;
  color: white;
  border: none;
  font-size: 18px;
`

