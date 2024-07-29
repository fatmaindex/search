(function () {
    var arr = [
        {
            firstName: "john",
            lastName: "Doe",
            age: '30',
            phone: "123 456-7890"
        },
        {
            firstName: "emily",
            lastName: "Jones",
            age: '35',
            phone: "345 678-9012"
        },
        {
            firstName: "emily",
            lastName: "smith",
            age: '20',
            phone: "345 567-9012"
        },
        {
            firstName: "jane",
            lastName: "Smith",
            age: '25',
            phone: "234 567-8901"
        },
        {
            firstName: "sarah",
            lastName: "Davis",
            age: '28',
            phone: "567 890-1234"
        },
        {
            firstName: "david",
            lastName: "Wilson",
            age: '32',
            phone: "678 901-2345"
        }
    ];
    // ----------------------------------------search function---------------------------------------------//
    function search(val) {
        var table = document.querySelector(".table");
        var found = false;
        arr.forEach(function (obj) {
            if (val === obj.firstName.toLowerCase() || val === obj.age || val === obj.phone) {
                table.innerHTML += "<tr>\n                    <td>".concat(obj.firstName, "</td>\n                    <td>").concat(obj.lastName, "</td>\n                    <td>").concat(obj.age, "</td>\n                    <td>").concat(obj.phone, "</td>\n                </tr>");
                found = true;
                // searchInput.value = ""
            }
        });
        if (!found) {
            table.innerHTML += "<tr><td style=\"text-align:center\" colspan=\"4\">No results found</td></tr>";
        }
    }
    // --------------------------------------firstname auto-complete function---------------------------------//
    var autocompleteList = document.getElementById("autocomplete-list");
    var autocompleteList2 = document.getElementById("autocomplete-list2");
    var autocompleteList3 = document.getElementById("autocomplete-list3");
    function autocomplete1(val) {
        autocompleteList.innerHTML = "";
        if (!val)
            return;
        var filtered = arr.filter(function (person) { return person.firstName.toLowerCase().includes(val.toLowerCase()); });
        filtered.forEach(function (person) {
            var item = document.createElement("div");
            item.innerHTML = "".concat(person.firstName);
            item.addEventListener("click", function () {
                var searchInput = document.getElementById("inputField");
                searchInput.value = person.firstName;
                search(person.firstName.toLowerCase());
                autocompleteList.innerHTML = "";
            });
            autocompleteList.appendChild(item);
        });
    }
    // ---------------------------------------age auto-complete function-------------------------------------------//
    function autocomplete2(age) {
        autocompleteList2.innerHTML = "";
        if (!age)
            return;
        var filtered = arr.filter(function (person) { return person.age.includes(age.trim()); });
        filtered.forEach(function (person) {
            var item = document.createElement("div");
            item.innerHTML = "".concat(person.age);
            item.addEventListener("click", function () {
                var searchInput2 = document.getElementById("inputField2");
                searchInput2.value = person.age;
                search(person.age);
                autocompleteList2.innerHTML = "";
            });
            autocompleteList2.appendChild(item);
        });
    }
    // ----------------------------------phone-number auto-complete function--------------------------------------//
    function autocomplete3(phoneNum) {
        autocompleteList3.innerHTML = "";
        if (!phoneNum)
            return;
        var filtered = arr.filter(function (person) { return person.phone.includes(phoneNum.trim()); });
        filtered.forEach(function (person) {
            var item = document.createElement("div");
            item.innerHTML = "".concat(person.phone);
            item.addEventListener("click", function () {
                var searchInput3 = document.getElementById("inputField3");
                searchInput3.value = person.phone;
                search(person.phone);
                autocompleteList3.innerHTML = "";
            });
            autocompleteList3.appendChild(item);
        });
    }
    //--------------------------add event listener to the search inputs-------------------------------//
    var searchInput = document.getElementById("inputField");
    searchInput.addEventListener("input", function () {
        autocompleteList2.innerHTML = "";
        autocompleteList3.innerHTML = "";
        var val = searchInput.value.trim().toLowerCase();
        autocomplete1(val);
    });
    // --------------------------------------------------------------------------------------------//
    var searchInput2 = document.getElementById("inputField2");
    searchInput2.addEventListener("input", function () {
        autocompleteList.innerHTML = "";
        autocompleteList3.innerHTML = "";
        var num = searchInput2.value;
        autocomplete2(num);
    });
    // --------------------------------------------------------------------------------------------//
    var searchInput3 = document.getElementById("inputField3");
    searchInput3.addEventListener("input", function () {
        autocompleteList2.innerHTML = "";
        autocompleteList.innerHTML = "";
        var phoneNum = searchInput3.value;
        autocomplete3(phoneNum);
    });
})();
