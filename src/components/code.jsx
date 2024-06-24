import Editor from "./editor";
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

import { Box, styled } from '@mui/material';

import htmlLogo from './HTML.png';
import cssLogo from './CSS.png';
import jsLogo from './JavaScript.png';

const Container = styled(Box)`
    display: flex;
    flex-direction: row;
    background-color: #060606;
    min-height: 45vh;
    border-top: 1px solid #333;
`;

const Code = () => {
    const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

    return (
        <Container>
            <Editor
                heading="HTML"
                icon={<img src={htmlLogo} alt="HTML Logo" style={{ width: '30px', height: '30px', alignSelf: 'center' }}/>}
                value={html}
                onChange={setHtml}
            />
            <Editor
                heading="CSS"
                icon={<img src={cssLogo} alt="CSS Logo" style={{ width: '26px', height: '26px', alignSelf: 'center' }}/>}
                value={css}
                onChange={setCss}
            />
            <Editor
                heading="JavaScript"
                icon={<img src={jsLogo} alt="JavaScript Logo" style={{ width: '25px', height: '25px', alignSelf: 'center' }}/>}
                value={js}
                onChange={setJs}
            />
        </Container>
    );
};

export default Code;
