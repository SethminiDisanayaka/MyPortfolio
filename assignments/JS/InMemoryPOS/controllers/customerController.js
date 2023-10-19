
getAllCustomer();

$("#btnSaveCus").click(function () {
    if (checkAll()){
        saveCustomer();
    }else{
        alert("Error");
    }

});

$("#btnGetAll").click(function () {
    getAllCustomer();
});

function bindTrEvents() {
    $('#tblCustomer>tr').click(function () {
        let id = $(this).children().eq(0).text();
        let name = $(this).children().eq(1).text();
        let address = $(this).children().eq(2).text();
        let salary = $(this).children().eq(3).text();

        $("#txtID").val(id);
        $("#txtName").val(name);
        $("#txtAddress").val(address);
        $("#txtSalary").val(salary);
    })
}

$("#btnCusDelete").click(function () {
    let id = $("#txtCustomerID").val();

    let consent = confirm("Do you want to delete.?");
    if (consent) {
        let response = deleteCustomer(id);
        if (response) {
            alert("Customer Deleted");
            clearCustomerInputFields();
            getAllCustomer();
        } else {
            alert("Customer Not Removed..!");
        }
    }


});

$("#btnUpdate").click(function () {
    let id = $("#txtID").val();
    updateCustomer(id);
    clearCustomerInputFields();
});

$("#btn-clear1").click(function () {
    clearCustomerInputFields();
});


function updateCustomer(id) {
    if (searchCustomer(id) == undefined) {
        alert("No such Customer..please check the ID");
    } else {
        let consent = confirm("Do you really want to update this customer.?");
        if (consent) {
            let customer = searchCustomer(id);

            let customerName = $("#txtCustomerName").val();
            let customerAddress = $("#txtCustomerAddress").val();
            let customerSalary = $("#txtCustomerSalary").val();

            customer.name = customerName;
            customer.address = customerAddress;
            customer.salary = customerSalary;

            getAllCustomer();
        }
    }

}

function searchCustomer(id) {
    return customerDB.find(function (customer) {
        return customer.id == id;
    });
}

function getAllCustomer(){
    $("#tblCustomer").empty();

    for (let i=0; i<customerDB.length; i++){
        let id = customerDB[i].id;
        let name= customerDB[i].name;
        let address = customerDB[i].address;
        let salary = customerDB[i].salary;
    }

    let row =`<tr>
        <td>$(id)</td>
        <td>$(name)</td>
        <td>$(address)</td>
        <td>$(salary)</td>
</tr>`;

    $("#tblCustomer").append(row);

    bindTrEvents();

}
function saveCustomer() {
    let customerID = $("#txtID").val();
    if (searchCustomer(customerID.trim()) == undefined) {

        let customerName = $("#txtName").val();
        let customerAddress = $("#txtAddress").val();
        let customerSalary = $("#txtSalary").val();

        let newCustomer = Object.assign({}, customer);

        newCustomer.id = customerID;
        newCustomer.name = customerName;
        newCustomer.address = customerAddress;
        newCustomer.salary = customerSalary;

        customerDB.push(newCustomer);
        clearCustomerInputFields();
        getAllCustomer();

    } else {
        alert("Customer already exits.!");
        clearCustomerInputFields();
    }
}

function deleteCustomer(id) {
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].id == id) {
            customerDB.splice(i, 1);
            return true;
        }
    }
    return false;
}