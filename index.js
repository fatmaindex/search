(function () {
    var arr = [
        {
            firstName: "john",
            lastName: "Doe",
            age: 30,
            phone: "(123) 456-7890"
        },
        {
            firstName: "emily",
            lastName: "Jones",
            age: 35,
            phone: "(345) 678-9012"
        },
        {
            firstName: "jane",
            lastName: "Smith",
            age: 25,
            phone: "(234) 567-8901"
        },
        {
            firstName: "sarah",
            lastName: "Davis",
            age: 28,
            phone: "(567) 890-1234"
        },
        {
            firstName: "david",
            lastName: "Wilson",
            age: 32,
            phone: "(678) 901-2345"
        }
    ];
    function search(val) {
        var table = document.querySelector(".table");
        table.innerHTML = "";
        var found = false;
        arr.forEach(function (obj) {
            if (val === obj.firstName.toLowerCase()) {
                table.innerHTML += "<tr>\n                    <td>".concat(obj.firstName, "</td>\n                    <td>").concat(obj.lastName, "</td>\n                    <td>").concat(obj.age, "</td>\n                    <td>").concat(obj.phone, "</td>\n                </tr>");
                found = true;
            }
        });
        if (!found) {
            table.innerHTML += "<tr><td style=\"text-align:center\" colspan=\"4\">No results found</td></tr>";
        }
    }
    function autocomplete(val) {
        var autocompleteList = document.getElementById("autocomplete-list");
        autocompleteList.innerHTML = "";
        if (!val)
            return;
        var filtered = arr.filter(function (person) { return person.firstName.toLowerCase().startsWith(val.toLowerCase()); });
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
        // autocompleteList.style.display = filtered.length ? 'block' : 'none'; 
    }
    var searchInput = document.getElementById("inputField");
    searchInput.addEventListener("input", function () {
        var val = searchInput.value.trim().toLowerCase();
        autocomplete(val);
    });
    var searchBtn = document.getElementById("search-btn");
    searchBtn.addEventListener("click", function () {
        var val = searchInput.value.trim().toLowerCase();
        search(val);
    });
})();
