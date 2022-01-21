import EducationContainer from './styles';

interface EducationProps {
  institute: string;
  degree: string;
  major: string;
  date: string;
  address: string;
}

const Education = ({
  institute,
  degree,
  major,
  date,
  address,
}: EducationProps) => {
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
