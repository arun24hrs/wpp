const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const thisXmas = new Date(currentYear, 11, 25);

if (currentDate > thisXmas) {
    const nextXmas = new Date(currentYear+1, 11, 25)
    const result = Math.ceil((nextXmas - currentDate)/(24*60*60*1000));
    console.log(`${result} days left for Christmas.`)
} else {
    const result = Math.ceil((thisXmas - currentDate)/(24*60*60*1000));
    console.log(`${result} days left for Christmas.`)
}