window.onload = function onload() {
    let list = document.getElementById("list")

    const grocery = [
        {
            category: "Meat",
            list: ["fish","chicken","pork","beef","ground beef"],
        },
        {
            category: "Vegetable",
            list: ["carrots","bok choy","egg plant","green bean","cucumber","onion","garlic","ginger"],
        },
        { 
            category: "Canned Good",
            list: ["corned beef","corned tuna","sardines","luncheon meat"],
        },
        {
            category: "Toiletry",
            list: ["Head & Shoulders","bodywash","hair conditioner","toothpaste"],
        },
    ]

    let listofGrocery = ``

    for (const title of grocery){
        listofGrocery += `
            <div id="container">
            <h2>${title.category}</h2> `
        for(const item of title.list) {
            listofGrocery += `
            <li><input type="checkbox" id="${item}" name="${item}" value="${item}">
            <label for="${item}">${item}</label></li> `
        }
        listofGrocery += ` </div> `
    }

    list.innerHTML = listofGrocery
}