// solution goes here


type CommentDt={
    id:number
    content:string
    imageId:number
}

type Image={
    id: number
    title: string
    likes:number
    image:string
    comments: CommentDt[]
}


type State={
    images:image[]
}


let state :State={
    images:[]
}

function getImages(){
fetch('http://localhost:5000/images')
.then(resp=>resp.json())
.then(imagesFromServer=>{
    state.images=imagesFromServer
    render()
})
}

getImages()



function render(){
for(let image of state.images){
    

   
//     <article class="image-card">
//     <h2 class="title">Title of image goes here</h2>
//     <img src="./assets/image-placeholder.jpg" class="image" />
//     <div class="likes-section">
//       <span class="likes">0 likes</span>
//       <button class="like-button">♥</button>
//     </div>
//     <ul class="comments">
//       <li>Get rid of these comments</li>
//       <li>And replace them with the real ones</li>
//       <li>From the server</li>
//     </ul>
//   </article>
let article=document.createElement('article')
article.className="image-card"

let title=document.createElement('h2')
title.className="title"
title.textContent=image.title

let img=document.createElement('img')
img.className="image"
img.src=image.image

let div=document.createElement('div')
div.className="likes-section"

let span=document.createElement('span')
span.className="likes"
span.textContent="0 likes"

let button=document.createElement('button')
button.className="like-button"
button.textContent="♥"

let ulComments=document.createElement('ul')
ulComments.className="comments"

let liFirst=document.createElement('li')
liFirst.textContent=image.comments

let liSecond=document.createElement('li')
liSecond.textContent="And replace them with the real ones"

let liThird=document.createElement('li')
liThird.textContent="From the server"


div.append(span,button)
ulComments.append(liFirst,liSecond,liThird)
article.append(div,ulComments,title,img)
let mondi=document.querySelector('.image-container')
mondi.append(article)

// window.article=article




}
}

render()