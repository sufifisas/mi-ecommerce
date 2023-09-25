module.exports = (number) => {
    const brandList = ['Jaya Grocer', 'Start Grocer', 'Mydin', 'Giant', 'Speedmart'];

    let faker = [];
    const getRandomInt = () => {
        return Math.floor(Math.random() * brandList.length);
    }

    for (let index = 0; index < number; index++) {
        faker.push({
            brand: brandList[getRandomInt()],
            name: `Product ${index + 1}`,
            barcode: `0123456${(index + 1).toString().padStart(5, '0')}5`
        })
        
    }
    
    return faker;
}