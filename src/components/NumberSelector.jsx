import styled from "styled-components"


const NumberSelector = ({selectedNumber, setSelectedNumber}) => {
    const arrNumber = [1, 2, 3, 4, 5, 6];
  return (
    <NumberSelectorContainer>
      <div className="flex">
          {
        arrNumber.map((value, i) => (
            <Box 
            isSelected={value === selectedNumber}
            key={i} onClick={() => setSelectedNumber(value)}>
                {value}</Box>
        ))
        }
      </div>
      <p>select number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
   display: flex;
  flex-direction: column;
    align-items: end;

    
  .flex{
    display: flex;
    gap: 20px;

  }
  p {
    font-size: 24px;
    font-weight: 700;
    
  }`;

const Box = styled.div`
  height: 60px;
  width: 60px;
  border: 1px solid #000;
  display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 600;
    background-color: ${(props) => (props.isSelected ? "#000000" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};
  `;
