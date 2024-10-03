function lowerCaseWords(data) {
return new Promise((resolve, reject) => {
if (!Array.isArray(data)) {
reject(new Error("Your input is not an array!"));
return;
}

try {
const result = data
.filter(item => typeof item === 'string').map(item => item.toLowerCase());
resolve(result);
} catch (error) {
reject(error);
}
});
}


lowerCaseWords(['This', 15, 'my', true, 'Lab Test', 1, 'q', 1])
.then(result => console.log(result))
.catch(error => console.error(error));