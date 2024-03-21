import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
const Muialert = (props) => {

    return (
        <> <div className='flex justify-center fixed w-screen z-20 '  >
            <Alert severity={props.severity} className='  max-w-3xl mt-9'>
                {props.msg}
            </Alert>

        </div></>
    )
}

export default Muialert