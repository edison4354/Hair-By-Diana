import styled from 'styled-components';

export const ResContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #BFD2BE;
`;

export const ResBox = styled.div`
  background-color: white;
  height: 60vh;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
`

export const ResForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Header = styled.div`
  width: 100%;
  height: 100px;
  background-color: #667F64;
  border-radius: 10px 10px 0 0;
  margin-bottom: 70px;
  text-align: center;
`

export const HeaderText = styled.h1`
  color: white;
  font-size: 36px;
  font-weight: 600;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  margin-right: 50px;
  margin-left: 50px;
  margin-bottom: 20px;
`

export const Input = styled.input`
  width: 250px;
  height: 30px;
  border: none;
  border: 1px solid lightgray;
  border-radius: 4px;
`

export const Row = styled.div`
  display: flex;
`

export const SumbitInput = styled.input`
  background-color: #95a994;
  border: none;
  color: white;
  padding: 16px 80px;
  text-decoration: none;
  margin: 10px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 6px;
`
// export const Context = styled.div`
//   display: flex;
//   width: 78vw;
//   margin-top: 57px;
// `

// export const SideTitle = styled.div`
//   flex-grow: 1;
// `

// export const SideText = styled.p`
//   font-size: 1rem;
//   font-weight: 700;
//   color: #ADB1B5;
//   padding-bottom: 10px;
//   margin-top: 0;
// `

// export const Footer = styled.div`
//   position: fixed;
//   bottom: 0;
//   height: 70px;
//   width: 100vw;
//   border-top: 1px solid rgba(0, 0, 0, 0.1);
// `