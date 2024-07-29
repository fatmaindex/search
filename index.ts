(() => {

    // -----------------------------------USER'S DATA----------------------------------------
    type Person = {
        firstName: string;
        lastName: string;
        age: string;
        phone: string;
    };

    let arr: Person[] = [
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
    function search(val: string) {
        const table = document.querySelector(".table") as HTMLElement;

        let found = false;

        arr.forEach(obj => {
            if (val === obj.firstName.toLowerCase() || val === obj.age || val === obj.phone) {
                table.innerHTML += `<tr>
                    <td>${obj.firstName}</td>
                    <td>${obj.lastName}</td>
                    <td>${obj.age}</td>
                    <td>${obj.phone}</td>
                </tr>`;
                found = true;

            }
        });

        if (!found) {
            table.innerHTML += `<tr><td style="text-align:center" colspan="4">No results found</td></tr>`;
        }
    }


    // --------------------------------------firstname auto-complete function---------------------------------//
    const autocompleteList = document.getElementById("autocomplete-list") as HTMLElement;

    const autocompleteList2 = document.getElementById("autocomplete-list2") as HTMLElement;
    const autocompleteList3 = document.getElementById("autocomplete-list3") as HTMLElement;

    function autocomplete1(val: string) {
        autocompleteList.innerHTML = "";

        if (!val) return;

        const filtered = arr.filter(person => person.firstName.toLowerCase().includes(val.toLowerCase()));

        filtered.forEach(person => {
            const item = document.createElement("div");
            item.innerHTML = `${person.firstName}`;
            item.addEventListener("click", () => {
                const searchInput = document.getElementById("inputField") as HTMLInputElement;
                searchInput.value = person.firstName;
                search(person.firstName.toLowerCase());
                autocompleteList.innerHTML = "";
            });
            autocompleteList.appendChild(item);
        });

    }
    // ---------------------------------------age auto-complete function-------------------------------------------//

    function autocomplete2(age: string) {
        autocompleteList2.innerHTML = "";

        if (!age) return;

        const filtered = arr.filter(person => person.age.includes(age.trim()));

        filtered.forEach(person => {
            const item = document.createElement("div");
            item.innerHTML = `${person.age}`;
            item.addEventListener("click", () => {
                const searchInput2 = document.getElementById("inputField2") as HTMLInputElement;
                searchInput2.value = person.age;
                search(person.age);
                autocompleteList2.innerHTML = "";
            });
            autocompleteList2.appendChild(item);
        });

    }
    // ----------------------------------phone-number auto-complete function--------------------------------------//

    function autocomplete3(phoneNum: string) {
        autocompleteList3.innerHTML = "";

        if (!phoneNum) return;

        const filtered = arr.filter(person => person.phone.includes(phoneNum.trim()));

        filtered.forEach(person => {
            const item = document.createElement("div");
            item.innerHTML = `${person.phone}`;
            item.addEventListener("click", () => {
                const searchInput3 = document.getElementById("inputField3") as HTMLInputElement;
                searchInput3.value = person.phone;
                search(person.phone);
                autocompleteList3.innerHTML = "";
            });
            autocompleteList3.appendChild(item);
        });

    }

    //--------------------------add event listener to the search inputs-------------------------------//
    const searchInput = document.getElementById("inputField") as HTMLInputElement;

    searchInput.addEventListener("input", () => {
        autocompleteList2.innerHTML = "";
        autocompleteList3.innerHTML = "";
        const val = searchInput.value.trim().toLowerCase();
        autocomplete1(val);
    });
    // --------------------------------------------------------------------------------------------//
    const searchInput2 = document.getElementById("inputField2") as HTMLInputElement;

    searchInput2.addEventListener("input", () => {
        autocompleteList.innerHTML = "";
        autocompleteList3.innerHTML = "";
        const num = searchInput2.value;
        autocomplete2(num);
    });
    // --------------------------------------------------------------------------------------------//

    const searchInput3 = document.getElementById("inputField3") as HTMLInputElement;

    searchInput3.addEventListener("input", () => {
        autocompleteList2.innerHTML = "";
        autocompleteList.innerHTML = "";
        const phoneNum = searchInput3.value;
        autocomplete3(phoneNum);
    });


})();
