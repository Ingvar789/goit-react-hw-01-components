import styled from '@emotion/styled'

export const FriendListStyled = styled.ul`
display:flex;
flex-direction:column;
align-items: center;

`;
export const FriendLiStyled = styled.ul`
width:100%;
display:flex;
align-items:center;
border: 3px solid teal;
.status{
    display:block;
    width: 20px;
    height:20px;
    margin-left:10px;
    border-radius:50%;
    background-color: ${props => {
			switch (props.status) {
				case true:
					return "#08e600";
				case false:
					return "#e60f00";
				default:
					return "#000";
			}
		}
    }}
.avatar{
    margin-left:20px;
}
.name{
    margin-left:20px;
}
    `;
