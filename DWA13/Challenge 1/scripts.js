const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

names.forEach((names) => {
    console.log(names)
})
console.log('')


//names and provinces
names.forEach((names, province) => {
    console.log(names, ':' , provinces[province])
})

console.log(' ')

//upper case
provinces.map(function(provinces) {
    const province = provinces.toUpperCase()
    console.log(province)
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

const hasSArray = names.map((name) => name.includes('S'));
console.log(hasSArray);

// const provinceObject = names.reduce((acc, name, index) => {
//     acc[name] = provinces[index];
//     console.log(acc);
//   }, {});



