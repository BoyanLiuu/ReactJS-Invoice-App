import styled from 'styled-components';
import Image from 'next/image';

const HeaderDiv = styled.div`
    width: 100%;
    height: 7.2rem;
    background-color: ${(props) => props.theme.header};
    display: flex;
    align-items: center;
    position: sticky;
    top: 0px;
    z-index: 10;

    .logo--container {
        width: 17%;
        height: 100%;
        background-color: red;
        margin-right: auto;
        border-radius: 0px 2.2rem 2.2rem 0px;
        background-color: hsl(252, 94%, 67%);
        position: relative;
    }
    .logo--container::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 2.8rem;
        height: 2.6rem;
        background: url('/images/logo.svg');
        background-repeat: no-repeat;
        background-position: center center;
        z-index: 5;
    }
    .logo--container::after {
        content: '';
        position: absolute;
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 3.7rem;
        background: rgb(146, 119, 255);
        border-radius: 2.2rem 0px;
    }
    .theme-toggler {
        cursor: pointer;
    }
    .userLogo--container {
        width: 21.6%;
        height: 100%;
        border-left: 2px solid #494e6e;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 2.8rem;
    }
    .userLogo {
        width: 3.2rem;
        border-radius: 50%;
        cursor: pointer;
    }
`;
const Navbar = () => {
    return (
        <HeaderDiv>
            <div className="logo--container" />
            <Image
                className="theme-toggler"
                src="/images/icon-sun.svg"
                alt="theme-toggler"
                width={20}
                height={20}
            />
            <div className="userLogo--container">
                <Image
                    className="userLogo"
                    src="/images/image-avatar.jpg"
                    alt="user"
                    width={32}
                    height={32}
                />
            </div>
        </HeaderDiv>
    );
};
export default Navbar;
