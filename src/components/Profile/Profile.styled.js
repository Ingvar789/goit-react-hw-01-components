import styled from '@emotion/styled'

export const ProfileStyled = styled.div`
display:flex;
flex-direction:column;
align-items: center;
border-bottom: 3px solid teal;
ul {
    display:flex;
    width:100%;
    justify-content:space-between;

}
li{
    display:flex;
    justify-content:space-around;
    width:100%;
    border: 1px solid teal; 
    padding:0 10px ;
}
p{
    display:flex;
    justify-content:center;
    margin:10px 0;
}
`;
