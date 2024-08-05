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
            }
        });
        if (!found) {
            table.innerHTML += "<tr><td style=\"text-align:center\" colspan=\"4\">No results found</td></tr>";
        }
    }
    // --------------------------------------firstname auto-complete function---------------------------------//
    var autocompleteList = document.getElementById("autocomplete-list");
    function autocomplete(val) {
        autocompleteList.innerHTML = "";
        if (!val)
            return;
        var notfound = false;
        arr.forEach(function (person) {
            var firstName = person.firstName.toLowerCase().includes(val.toLowerCase());
            var age = person.age.includes(val.trim());
            var phone = person.phone.includes(val.trim());
            if (!firstName && !age && !phone) {
                notfound = true;
            }
            if (firstName) {
                var filtered = arr.filter(function (person) { return person.firstName.includes(val.toLowerCase()); });
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
            else if (age) {
                var filtered = arr.filter(function (person) { return person.age.includes(val.toLowerCase()); });
                filtered.forEach(function (person) {
                    var item = document.createElement("div");
                    item.innerHTML = "".concat(person.age);
                    item.addEventListener("click", function () {
                        var searchInput = document.getElementById("inputField");
                        searchInput.value = person.age;
                        search(person.age);
                        autocompleteList.innerHTML = "";
                    });
                    autocompleteList.appendChild(item);
                });
            }
            else if (phone) {
                var filtered = arr.filter(function (person) { return person.phone.includes(val.toLowerCase()); });
                filtered.forEach(function (person) {
                    var item = document.createElement("div");
                    item.innerHTML = "".concat(person.phone);
                    item.addEventListener("click", function () {
                        var searchInput = document.getElementById("inputField");
                        searchInput.value = person.phone;
                        search(person.phone);
                        autocompleteList.innerHTML = "";
                    });
                    autocompleteList.appendChild(item);
                });
            }
        });
        if (notfound) {
            var item = document.createElement("div");
            item.innerHTML = "".concat(searchInput.value);
            item.addEventListener("click", function () {
                var searchInput = document.getElementById("inputField");
                search(searchInput.value);
                autocompleteList.innerHTML = "";
            });
            autocompleteList.appendChild(item);
        }
    }
    //--------------------------add event listener to the search input-------------------------------//
    var searchInput = document.getElementById("inputField");
    searchInput.addEventListener("input", function () {
        var val = searchInput.value.trim();
        autocomplete(val);
    });
})();
