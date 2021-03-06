import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    input {
        flex: 1;
        border: 1px solid ${props => (props.error ? '#ff6b6b' : '#eee')};
        padding: 10px 15px;
        border-radius: 6px;
        font-size: 16px;
    }
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading,
}))`
    background: #7159c1;
    border: 0;
    padding: 0 15px;
    margin-left: 10px;
    border-radius: 6px;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        margin-right: 0px;
    }

    ${props => props.loading && css`
        svg {
            animation: ${rotate} 2s linear infinite;
        }
    `}

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    }
`;

export const List = styled.ul`
    list-style: none;
    margin-top: 30px;

    li {
        padding: 15px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        & + li {
            border-top: 1px solid #eee;
        }

        a {
            color: #7159c1;
            text-decoration: none;
        }
    }
`;
