import { Box, styled } from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { useState } from 'react';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import '../App.css';

import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: 5px;
    border: 1px solid #333;
`;

const Header = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #060606;
    color: #AAAEBC;
    padding: 5px;
`;

const Heading = styled(Box)`
    display: flex;
    align-items: center;
    color: white;
    background: #1d1e22;
    padding: 5px 10px;
`;

const Editor = ({ heading, icon, color, value, onChange }) => {
    const [open, setOpen] = useState(true);

    const handleChange = (editor, data, value) => {
        onChange(value);
    };

    return (
        <Container style={{ flexBasis: open ? 'auto' : 0, flexGrow: open ? 1 : 0 }}>
            <Header>
                <Heading>
                    <Box
                        component="span"
                        style={{
                            background: color,
                            height: 20,
                            width: 20,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 5,
                            marginRight: 5,
                            paddingBottom: 2,
                            color: '#000'
                        }}
                    >
                       {icon}
                    </Box>
                    {heading}
                </Heading>
                <CloseFullscreenIcon
                    onClick={() => setOpen(prevState => !prevState)}
                    fontSize='small'
                    style={{ cursor: 'pointer', color: 'white' }}
                />
            </Header>
            {open && (
                <ControlledEditor
                    className='controlled-editor'
                    value={value}
                    onBeforeChange={handleChange}
                    options={{
                        theme: 'material',
                        lineNumbers: true
                    }}
                />
            )}
        </Container>
    );
};

export default Editor;
