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

    function autocomplete(val: string) {
        autocompleteList.innerHTML = "";

        if (!val) return;

        let notfound= false;

        arr.forEach(person => {

            let firstName = person.firstName.toLowerCase().includes(val.toLowerCase());
            let age = person.age.includes(val.trim());
            let phone = person.phone.includes(val.trim());
            
            if(!firstName&& !age && !phone){
                 notfound= true;
            }
           
            if (firstName) {
                const filtered = arr.filter(person => person.firstName.includes(val.toLowerCase()))

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
            else if (age) {
                const filtered = arr.filter(person => person.age.includes(val.toLowerCase()))
                filtered.forEach(person => {
                    const item = document.createElement("div");
                    item.innerHTML = `${person.age}`;
                    item.addEventListener("click", () => {
                        const searchInput = document.getElementById("inputField") as HTMLInputElement;
                        searchInput.value = person.age;
                        search(person.age);
                        autocompleteList.innerHTML = "";
                    });
                    autocompleteList.appendChild(item);
                });
            }

            else if (phone) {
                const filtered = arr.filter(person => person.phone.includes(val.toLowerCase()))
                filtered.forEach(person => {
                    const item = document.createElement("div");
                    item.innerHTML = `${person.phone}`;
                    item.addEventListener("click", () => {
                        const searchInput = document.getElementById("inputField") as HTMLInputElement;
                        searchInput.value = person.phone;
                        search(person.phone);
                        autocompleteList.innerHTML = "";
                    });
                    autocompleteList.appendChild(item);
                });
            }
         
        })
         if(notfound){

            const item = document.createElement("div");
            item.innerHTML = `${searchInput.value}`;
            item.addEventListener("click", () => {
                const searchInput = document.getElementById("inputField") as HTMLInputElement;
                search(searchInput.value);
                autocompleteList.innerHTML = "";
            });
            autocompleteList.appendChild(item);
    }
    }
    //--------------------------add event listener to the search input-------------------------------//
    const searchInput = document.getElementById("inputField") as HTMLInputElement;

    searchInput.addEventListener("input", () => {

        const val = searchInput.value.trim();
        autocomplete(val)
    });
})();
