import React from 'react'
import { Input } from 'antd';

const { TextArea } = Input;
const onChange = e => {
}

export default class Weekly extends React.Component{
    render() {
        return (
            <div>
                <Input placeholder="input with clear icon" allowClear onChange={onChange} />
                <br />
                <br />
                <Input placeholder="input with clear icon" allowClear onChange={onChange} />
                <br />
                <br />
                <TextArea placeholder="textarea with clear icon" allowClear onChange={onChange} />
            </div>
        )
    }
}
