(() => {
    type Person = {
        firstName: string;
        lastName: string;
        age: number;
        phone: string;
    };

    let arr: Person[] = [
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

    function search(val: string) {
        const table = document.querySelector(".table") as HTMLElement;
        table.innerHTML = "";

        let found = false;

        arr.forEach(obj => {
            if (val === obj.firstName.toLowerCase()) {
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

    function autocomplete(val: string) {
        const autocompleteList = document.getElementById("autocomplete-list") as HTMLElement;
        autocompleteList.innerHTML = "";

        if (!val) return;

        const filtered = arr.filter(person => person.firstName.toLowerCase().startsWith(val.toLowerCase()));

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
    const searchInput = document.getElementById("inputField") as HTMLInputElement;

    searchInput.addEventListener("input", () => {
        const val = searchInput.value.trim().toLowerCase();
        autocomplete(val);
    });

    const searchBtn = document.getElementById("search-btn") as HTMLButtonElement;

    searchBtn.addEventListener("click", () => {
        
        const val = searchInput.value.trim().toLowerCase();
        search(val);
    });
})();
