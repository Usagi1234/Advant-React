import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const Panel = styled.div`
    flex: ${(p) => p.flex};
`;

export const SplitScreen = ({ children, leftWeight = 1, rightWeight = 1 }) => {
    const [left, right] = children;
    return (
        <Container>
            <Panel flex={leftWeight}>
                {left}
            </Panel>
            
            <Panel flex={rightWeight}>  
                {right}
            </Panel>
        </Container>
    );
};