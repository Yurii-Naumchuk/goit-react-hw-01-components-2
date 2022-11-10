import PropTypes from 'prop-types';
import { Container, Title, StatList, StatListItem } from './Statistics.styled';

export default  function Statistics({ stats, title }) {
  return (
    <Container>
      <Title>{title}</Title>
      <StatList>
        {stats.map(stats => (
          <StatListItem key={stats.id}>
            <span >{stats.label}</span>
            <span >{stats.percentage}%</span>
          </StatListItem>
        ))}
      </StatList>
    </Container>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
}