import React, { Component } from 'react';
import { Table, Button, Modal, message } from 'antd';
import {allTransactions, transactionColumns, rewardsColumns} from '../dataset';
import AddTransaction from './AddTransaction';


class Main extends Component {

    constructor(){
        super();
        this.state = {
            transactions: allTransactions,
            rewards: [
                {
                    key: '1',
                    month: 'July',
                    rewards: 0
                },
                {
                    key: '2',
                    month: 'August',
                    rewards: 0
                },
                {
                    key: '3',
                    month: 'September',
                    rewards: 0
                },
                {
                    key: '4',
                    month: 'Total',
                    rewards: 0
                }
            ],
            visible: false
        }
    }

    componentDidMount(){
        this.calculateRewards();
        this.getTotalRewards();
    }

    calculateRewards(){
        this.state.transactions.map((transaction) => {
            if(transaction.price <= 50){
                return transaction.rewardPoint = 0;
            }else if(transaction.price > 50 && transaction.price <= 100){
                return transaction.rewardPoint = transaction.price - 50;
            }else{
                return transaction.rewardPoint = (transaction.price - 100) * 2 + 50;
            }
        });
        this.setState({
            transaction: allTransactions
        });
    }

    getTotalRewards(){
        let julyTotal = 0;
        let augustTotal = 0;
        let sepTotal = 0;
        this.state.transactions.filter((transaction) => {
            return transaction.date.substring(5, 7) === '07';
        }).forEach((transaction) => {
            julyTotal += transaction.rewardPoint
        });
        this.state.transactions.filter((transaction) => {
            return transaction.date.substring(5, 7) === '08';
        }).forEach((transaction) => {
            augustTotal += transaction.rewardPoint
        });
        this.state.transactions.filter((transaction) => {
            return transaction.date.substring(5, 7) === '09';
        }).forEach((transaction) => {
            sepTotal += transaction.rewardPoint
        });
        this.setState({
            rewards: [
                {
                    key: '1',
                    month: 'July',
                    rewards: julyTotal
                },
                {
                    key: '2',
                    month: 'August',
                    rewards: augustTotal
                },
                {
                    key: '3',
                    month: 'September',
                    rewards: sepTotal
                },
                {
                    key: '4',
                    month: 'Total',
                    rewards: julyTotal + augustTotal + sepTotal
                }
            ]
        });
    }

    handleAdd = () => {
        this.setState({
            visible: true
        });
    }

    handleOk = e => {
        this.setState({
            visible: false
        });
        const newTransaction = {
            key: this.state.transactions.length + 1,
            id: this.state.transactions.length + 1,
            date: this.transaction.getDate(),
            price: this.transaction.getPrice(),
            rewardPoint: 0
        };
        this.setState({
            transactions: [newTransaction, ...this.state.transactions]
        });
        let current = this.state.transactions;
        current.push(newTransaction);
        this.calculateRewards();
        this.getTotalRewards();
        message.success("New Transaction Added");
    }

    handleCancel = e =>{
        this.setState({
            visible: false
        });
    }

    getTransactionRef = (instance) => {
        this.transaction = instance;
    }
    
    render() {
        return (
            <div>
                <h2>Current Customer Transactions</h2>
                <Table 
                    columns={transactionColumns} 
                    dataSource={this.state.transactions}
                    pagination={{pageSize : 4}}
                />
                <div className="btn">
                    <Button 
                        onClick={this.handleAdd}
                        size="large"
                        type="primary"
                    >
                        Add New Transaction
                    </Button>
                </div>
                <Modal
                    title="Add a new transaction (from July to September)"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <AddTransaction ref={this.getTransactionRef}></AddTransaction>
                </Modal>

                <h2>Rewards Summary</h2>
                <Table 
                    columns = {rewardsColumns}
                    dataSource={this.state.rewards}
                />
            </div>
        );
    }
}

export default Main;