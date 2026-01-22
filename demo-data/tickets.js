//sample data
const tickets = [
    {
        id: 1,
        title: "Purchase equipment",
        amount: 2500,
        status: "Pending",
        level: "Manager",
        created_on: "2026-01-15",
        status_timeline: []
    },
    {
        id: 2,
        title: "Site inspection",
        amount: 500,
        status: "Approved",
        level: "Finance",
        created_on: "2026-01-16",
        status_timeline: [
            {
                status: "Approved",
                level: "Manager",
                date: "2026-01-18",
                reason: ""
            },
            {
                status: "Approved",
                level: "Finance",
                date: "2026-01-20",
                reason: ""
            }
        ]
    },
    {
        id: 3,
        title: "Material delivery",
        amount: 1500,
        status: "Rejected",
        level: "Manager",
        created_on: "2026-01-17",
        status_timeline: [
            {
                status: "Rejected",
                level: "Manager",
                date: "2026-01-17",
                reason: "Insufficient budget"
            }
        ]
    },
    {
        id: 4,
        title: "Labor costs",
        amount: 3000,
        status: "Pending",
        level: "Manager",
        created_on: "2026-01-18",
        status_timeline: []
    },
    {
        id: 5,
        title: "Safety equipment",
        amount: 800,
        status: "Approved",
        level: "Finance",
        created_on: "2026-01-02",
        status_timeline: [
            {
                status: "Approved",
                level: "Manager",
                date: "2026-01-16",
                reason: ""
            },
            {
                status: "Approved",
                level: "Finance",
                date: "2026-01-17",
                reason: ""
            }
        ]
    },
    {
        id: 6,
        title: "Material delivery",
        amount: 2300,
        status: "Pending",
        level: "Finance",
        created_on: "2026-01-17",
        status_timeline: [
            {
                status: "Approved",
                level: "Manager",
                date: "2026-01-19",
                reason: ""
            },
        ]
    },
    {
        id: 7,
        title: "Safety equipment",
        amount: 1000,
        status: "Rejected",
        level: "Finance",
        created_on: "2026-01-02",
        status_timeline: [
            {
                status: "Approved",
                level: "Manager",
                date: "2026-01-05",
                reason: ""
            },
            {
                status: "Rejected",
                level: "Finance",
                date: "2026-01-10",
                reason: "Insufficient funds"
            }
        ]
    },
];



// {
//                 status: "Pending",
//                 level: "Manager",
//                 date: "",
//                 reason: ""
//             },
//             {
//                 status: "Pending",
//                 level: "Finance",
//                 date: "",
//                 reason: ""
//             }