import React, { Component } from 'react';
import { DatePicker, Space, InputNumber, Row, Col } from 'antd';

class AddTransaction extends Component {

    state={
        date: '',
        price: 0
    };

    onDateChange = (date, dateString) => {
        this.setState({
            date: dateString
        });
    }

    onPriceChange = (value) => {
        this.setState({
            price: value
        });
    }

    getDate = () => {
        return this.state.date;
    }

    getPrice = () => {
        return this.state.price;
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={12}>
                        <span>Select Date:</span>
                        <Space direction="vertical">
                            <DatePicker onChange={this.onDateChange} />
                        </Space>
                    </Col>
                    <Col span={12}>
                        <span>Price:</span>
                        <InputNumber onChange={this.onPriceChange} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AddTransaction;