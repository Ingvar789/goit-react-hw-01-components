import PropTypes from 'prop-types';
import { FriendListStyled } from './FriendList.styled';
import {FriendLiStyled} from './FriendList.styled';
function FriendList({data}) {
    return (
        <FriendListStyled className="friend-list">
    {data.map(({avatar, name, isOnline, id}) => {
            return (
               <FriendLiStyled className="item" key={id} status={isOnline}>
                    <span className="status"></span>
                    <img className="avatar" src={avatar} alt="User avatar" width="48" />
                    <p className="name">{name}</p>
               </FriendLiStyled>
            );
      })}          
        </FriendListStyled>
    );
} 
export { FriendList };
    
    FriendList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }))
}
