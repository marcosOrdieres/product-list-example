import styled from 'styled-components';

export interface MainLayoutProps {
  children?: any;
}

const MainLayoutStyled = styled.div`
  display: flex;
  flex-direction:column;
  width: 100vw;
  height: 100vh;
  align-items: center;
`;

export const MainLayout: React.FC<MainLayoutProps> = (props) => <MainLayoutStyled {...props}>{props.children}</MainLayoutStyled>;

export default MainLayoutStyled;