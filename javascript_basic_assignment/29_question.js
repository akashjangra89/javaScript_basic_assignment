// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

let file = prompt('Enter File Name with extention', 'myfile.pdf')


let extension = file.indexOf('.')
if(file.includes('.')){
    fileFormat = file.toUpperCase().slice(extension)
    alert(`File format is ${fileFormat}`)
}
else{
    alert('Please include [dot] before extention')
}