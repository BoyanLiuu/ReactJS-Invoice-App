import styled from 'styled-components';

const FilterBarDiv = styled.div``;
const FilterBar = () => {
    return (
        <FilterBarDiv>
            <div className="filter--title">
                <p> Invoices</p>
                <span>There are 8 total invoices</span>
            </div>
            <div className="filter--function">
                <p> filter</p>
            </div>
            <button className="filter__button--new" type="button">
                <span> image</span>
                New
            </button>
        </FilterBarDiv>
    );
};
export default FilterBar;
