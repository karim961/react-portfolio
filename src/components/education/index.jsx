import EducationCol from './styles';

const Education = ({ institute, degree, major, date, address }) => {
  return (
    <EducationCol>
      <div>
        <span>{degree}: </span>
        <strong>{major}</strong>
        <span> - {date}</span>
      </div>
      <div>
        <strong>{institute}</strong>
        <span>, {address}</span>
      </div>
    </EducationCol>
  );
};

export default Education;
