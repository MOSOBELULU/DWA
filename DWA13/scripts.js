const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

names.forEach((names) => {
    console.log(names)
})
console.log('')

names.forEach((names, provinces) => {
    console.log(names, provinces[provinces])
})

console.log(' ')

//upper case
provinces.map(function(provinces) {
    const provinces = provinces.toUpperCase()
    console.log(provinces)
})
//creating an array
const lengthofNames = names.map(name => name.length);
console.log(lengthofNames);

console.log('')

//sorting alphabetically
const sortProvinces = provinces.sort();
console.log(sortProvinces)
console.log('')

//removing provinces with the word cape
const filterProvince = provinces.filter(provinces => !provinces.includes('Cape'));
const filterProvinceCount = provinces.filter(provinces => !provinces.includes('Cape'))
console.log(filterProvinceCount);

console.log('')