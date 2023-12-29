const blogTitleField = document.querySelector('.title');
const articleField = document.querySelector('.article');

//banner
const bannerImage = document.querySelector("#banner-upload");
const banner = document.querySelector(".banner");
let bannerPath;

const publishBtn = document.querySelector('.publish-btn');
const uploadInput = document.querySelector('#image-upload');

bannerImage.addEventListener('change', function(){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result; 
        document.querySelector(".banner").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
})
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
publishBtn.addEventListener('click', () => {
    if(articleField.value.length && blogTitleField.value.length){
        let letters = 'abcdefghijklmnopqrstuvwxyz';
        let blogTitle = blogTitleField.value.split(" ").join("-");
        let id = '';
        for(let i = 0; i < 4; i++){
            id += letters[Math.floor(Math.random() * letters.length)];
        }
        //setting up docName
        let docName = `${blogTitle}-${id}`;
        let date = new Date(); // for publish at info

        // acess firestore with db variable;
        db.collection("blogs").doc(docName).set({
            title: blogTitleField.value,
            article: articleField.value,
            bannerImage: bannerPath,
            publishedAt: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
        })
        .then(() => {
            console.log('date entered');
        })
        .catch((err) => {
            console.error(err);
        })
    }
})
