import EducationContainer from './styles';

const Education = ({ institute, degree, major, date, address }) => {
  return (
    <EducationContainer>
      <div>
        <span>{degree}: </span>
        <strong>{major}</strong>
        <span> - {date}</span>
      </div>
      <div>
        <strong>{institute}</strong>
        <span>, {address}</span>
      </div>
    </EducationContainer>
  );
};

export default Education;
