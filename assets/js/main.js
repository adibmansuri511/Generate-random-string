// program to convert first letter of a string to uppercase

const capitalizeFirstLetter = () => {

    // Converting first letter to uppercase
    let str = document.getElementById("str").value;

    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    const result = `Capitalized String : ${capitalized}`;

    console.log(result);

    document.getElementById("h4").innerHTML = result;

}

