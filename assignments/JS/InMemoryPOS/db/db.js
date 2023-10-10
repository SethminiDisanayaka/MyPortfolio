var customerDB = [
    {id: "C00-001", name: "Sethmini Dissanayake", address: "Mathara", salary: 100000},
    {id: "C00-002", name: "RSahan Dileepa", address: "Gampaha", salary: 200000},
    {id: "C00-003", name: "Dineth Nimsara", address: "Thangalle", salary: 300000}
];

var itemDB = [
    {code:"I00-001",description:"Soap",qtyOnHand: 100,unitPrice: 145.00},
    {code:"I00-002",description:"Shampoo",qtyOnHand: 150,unitPrice: 600.00},
    {code:"I00-003",description:"Biscuit",qtyOnHand: 400,unitPrice: 500.00}
];

var orderDB = [
    {oid:"OID-001", date:"2023/10/06", customerID:"C00-001",
        orderDetails:[
            {oid:"OID-001", code:"I00-001", qty:10, unitPrice:145.00},
            {oid:"OID-001", code:"I00-002", qty:2, unitPrice:600.00}
        ]
    }
];