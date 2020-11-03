export const transactionColumns = [
    {
        title: 'Transaction ID',
        dataIndex: 'id',
    },
    {
        title: 'Date',
        dataIndex: 'date',
        sorter: (a, b) => parseInt(a.date.substring(5, 7)) - parseInt(b.date.substring(5, 7)),
    },
    {
        title: 'Price',
        dataIndex: 'price',
        sorter: (a, b) => a.price - b.price,
    },
    {
        title: 'Reward Point',
        dataIndex: 'rewardPoint',
    }
];

export const rewardsColumns = [
    {
        title: 'Month',
        dataIndex: 'month',
    },
    {
        title: 'Rewards',
        dataIndex: 'rewards',
    }
]

export const allTransactions = [
    {
        key: 1,
        id: 1,
        date: '2020-07-01',
        price: 90,
        rewardPoint: 0
    },
    {
        key: 2,
        id: 2,
        date: '2020-08-02',
        price: 120,
        rewardPoint: 0
    },
    {
        key: 3,
        id: 3,
        date: '2020-09-03',
        price: 30,
        rewardPoint: 0
    },
    {
        key: 4,
        id: 4,
        date: '2020-07-10',
        price: 246,
        rewardPoint: 0
    },
    {
        key: 5,
        id: 5,
        date: '2020-09-22',
        price: 128,
        rewardPoint: 0
    }
]