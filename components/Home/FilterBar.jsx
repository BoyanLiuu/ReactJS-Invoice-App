import styled from 'styled-components';

const FilterBarDiv = styled.div`
    width: 100%;
    height: 4.4rem;
    margin-top: 3.2rem;
    padding: 0 2.4rem;
    display: flex;
    align-items: center;
    .filter--title {
        margin-right: auto;
    }
    .filter--title p {
        margin-bottom: 0.5rem;
        font-weight: 700;
        line-height: 2.4rem;
        font-size: 2rem;
        color: ${(props) => props.theme.mainText};
    }

    .filter--title span {
        line-height: 1.5rem;
        font-size: 1.2rem;
        font-weight: 500;

        color: ${(props) => props.theme.homeSubText};
    }
    .filter--function {
        width: 5.4rem;
        height: 1.5rem;
        margin-right: 1.8rem;
        display: flex;
        justify-content: space-between;
        position: relative;
    }
    .filter--function p {
        font-weight: 700;
        line-height: 1.5rem;
        font-size: 1.2rem;
        color: ${(props) => props.theme.mainText};
    }
    .checkbox {
        appearance: none;
        cursor: pointer;
        outline: none;
    }
    .filter-checkbox {
        width: 0.9rem;
        height: 0.5rem;
        background: url('/images/icon-arrow-down.svg');
        background-size: cover;
        background-repeat: no-repeat;
        align-self: center;

        transition: transform 300ms ease-in;
    }

    .filter-checkbox:checked {
        -webkit-transform: rotate(-180deg);
        -moz-transform: rotate(-180deg);
        -ms-transform: rotate(-180deg);
        -o-transform: rotate(-180deg);
        transform: rotate(-180deg);
    }
    .filter-checkbox:checked ~ .filter-options {
        display: flex;
        opacity: 1;
        visibility: visible;
    }
    .filter-options {
        position: absolute;
        display: none;
        opacity: 0;
        visibility: hidden;
        flex-direction: column;
        padding: 2.4rem 0 0 2.4rem;
        bottom: -150px;
        left: -3.1rem;
        width: 19.2rem;
        height: 12.8rem;
        border-radius: 0.8rem;
        background-color: ${(props) => props.theme.filterOptionsBg};
        box-shadow: rgb(72 84 159 / 25%) 0px 10px 20px;
        animation: fade 1s;
    }
    .filter-option {
        display: flex;
        align-items: center;
    }
    .filter-option:not(:last-child) {
        margin-bottom: 1.6rem;
    }
    .filter-option span {
        font-weight: 700;
        line-height: 1.5rem;
        font-size: 1.2rem;
        color: ${(props) => props.theme.mainText};
    }

    .filter-select {
        width: 1.6rem;
        height: 1.6rem;
        margin-right: 1.3rem;
        background-color: ${(props) => props.theme.filterCheckBox};
    }
`;
const FilterBar = () => {
    return (
        <FilterBarDiv>
            <div className="filter--title">
                <p> Invoices</p>
                <span>8 invoices</span>
            </div>
            <div className="filter--function">
                <p> Filter</p>
                <input
                    aria-label="toggle filter"
                    type="checkbox"
                    className="filter-checkbox checkbox"
                />

                <div className="filter-options">
                    <label className="filter-option" htmlFor="paid">
                        <input
                            type="checkbox"
                            className="checkbox filter-select"
                            id="paid"
                        />

                        <span>Paid</span>
                    </label>
                    <label className="filter-option" htmlFor="pending">
                        <input
                            type="checkbox"
                            className="checkbox filter-select"
                            id="pending"
                        />
                        <span>Pending</span>
                    </label>
                    <label className="filter-option" htmlFor="draft">
                        <input
                            type="checkbox"
                            className="checkbox filter-select"
                            id="draft"
                        />
                        <span>Draft</span>
                    </label>
                </div>
            </div>
            <button className="filter__button--new" type="button">
                <span> image</span>
                New
            </button>
        </FilterBarDiv>
    );
};
export default FilterBar;
