import { HeaderContainer, HeaderTitle, StyledSelect } from './styled';

export const SelectTag = ({
  lists,
  tags,
  setListFiltered,
  setSelectState,
  selectState,
}) => {
  const onValueChange = (value) => {
    setSelectState({
      ...selectState,
      tag: value,
    });
  };
  return (
    <>
      <HeaderContainer>
        <HeaderTitle h4> Tus etiquetas </HeaderTitle>
        <StyledSelect onChange={(option) => onValueChange(option.target.value)}>
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
