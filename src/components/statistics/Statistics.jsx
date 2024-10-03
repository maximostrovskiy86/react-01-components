import {Stat, List} from './Statistics.styled';
import {randomColor} from '../../utils/randomColorFunction';
import PropTypes from 'prop-types';


const Statistics = ({title = 'Upload title', stats}) => {
    return (
        <Stat>
            <h2 className="title">{title}</h2>
            <List>
                {stats.map(item => (
                    <li key={item.id} style={{ backgroundColor: randomColor()}}>
                        <span className="label">{item.label}</span>
                        <span className="percentage">{item.percentage}%</span>
                    </li>
                ))}
            </List>
        </Stat>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}

export default Statistics;
