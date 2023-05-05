// import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterContacts } from 'redux/FilterSlice';
const Filter = () => {
  const filter = useSelector(state => state.filters);
  const dispatch = useDispatch();
  const filterContact = e => {
    dispatch(getFilterContacts(e.currentTarget.value.trim()));
  };

  return (
    <>
      <Label>
        Find contacts by name
        <Input type="text" value={filter} onChange={filterContact} />
      </Label>
    </>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

export default Filter;
