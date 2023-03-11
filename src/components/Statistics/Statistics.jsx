import PropTypes from 'prop-types';
import { StatisticsStyled } from './Statistics.styled';

function Statistics({data, title}) {
    
    return (
        <StatisticsStyled className="statistics">
            {
                title === true || title === undefined || title.trim() === '' ?
                null :
                <h2 className="title">{title}</h2>
            }
    <ul className="stat-list">
        {data.map(({id, label, percentage}) => {
            return (
                <li className="item" key={id} style={{ backgroundColor: getRandomColor() }}>
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage}%</span>
                </li>
            );
      })}          
  </ul>
        </StatisticsStyled>
);
} 
export { Statistics };

Statistics.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}

function getRandomColor() {
    const randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
    return randomColor
}