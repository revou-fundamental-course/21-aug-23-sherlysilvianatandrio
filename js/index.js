const nama = document.getElementById('nama');
const bod = document.getElementById('date');
const laki = document.getElementById('laki');
const perempuan = document.getElementById('perempuan');
const submit = document.getElementById('formulir');
const outputField = document.getElementById('output-text');
const pesan = document.getElementById('pesan');

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let username = 'Sherly Tandrio';
const welcomeTagElement = document.getElementById('welcome-user');
welcomeTagElement.innerHTML = `Hi ${username}, Welcome To Website`;

function submitFunction(event){
    event.preventDefault();
    let currdate = new Date();
    let bod_date = new Date(bod.value);
    let text = `
        Current time: ${currdate} 
        <br/> Nama: ${nama.value} 
        <br/> Tanggal Lahir: ${bod_date.getDay()} ${months[bod_date.getMonth()]} ${bod_date.getFullYear()} 
        <br/> Jenis Kelamin: ${laki.checked ? 'Laki - laki' : 'Perempuan'}
        <br/> Pesan: ${pesan.value}
    `
    outputField.innerHTML = text;
}

const img_inside = document.getElementById('img-inside');
let leftSize = 0;

function handleprev(){
    console.log(leftSize);
    leftSize = leftSize + 100 > 0 ? leftSize : leftSize + 100;
    img_inside.style.left = `${leftSize}%`
}

function handlenext(){
    console.log(leftSize);
    leftSize = leftSize - 100 < -200 ? leftSize : leftSize - 100;
    img_inside.style.left = `${leftSize}%`
}