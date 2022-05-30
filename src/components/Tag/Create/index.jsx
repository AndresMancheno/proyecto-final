import { HeaderContainer, HeaderTitle, StyledSelect } from './styled';

export const SelectTag = ({ tags, setSelectState, selectState }) => {
  const onValueChange = (value) => {
    setSelectState({
      ...selectState,
      tagSelected: value,
    });
  };

  return (
    <>
      <HeaderContainer>
        <HeaderTitle h4> Tus etiquetas </HeaderTitle>
        <StyledSelect
          value={selectState.tagSelected}
          onChange={(option) => onValueChange(option.target.value)}
        >
          <option value="">Elige una etiqueta</option>
          {tags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </StyledSelect>
      </HeaderContainer>
    </>
  );
};
