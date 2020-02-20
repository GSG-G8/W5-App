
const input = document.querySelector('.query-search');
const button = document.querySelector('.btn');
const researchInput = document.querySelector('.research-input');
const researchAll = document.querySelector('.research-all');

const renderDataAll = (arr)=> {
    arr.map(el=> {
        const div = document.createElement('div');
        div.classList.add('content');
        const title = document.createElement('h2');
        title.textContent = el._source.title;
        div.appendChild(title);

        const description = document.createElement('p');
        description.textContent = el._source.description.slice(0,100);
        div.appendChild(description);

        const author = document.createElement('p');
        author.textContent = el._source.authors;
        div.appendChild(author);

       researchAll.appendChild(div);


    })
}

const renderDataInput = (arr)=> {
    arr.map(el=> {
        const div = document.createElement('div');
        div.classList.add('content')
        const title = document.createElement('h2');
        title.textContent = el._source.title;
        div.appendChild(title);

        const description = document.createElement('p');
        description.textContent = el._source.description;
        div.appendChild(description);

        const author = document.createElement('p');
        author.textContent = el._source.authors;
        div.appendChild(author);

        researchInput.appendChild(div);
    })
}

<<<<<<< HEAD
<<<<<<< HEAD

||||||| merged common ancestors
<<<<<<<<< Temporary merge branch 1
    if(!value === ''){
    button.addEventListener('click', (e)=> {
    const value = input.value.trim();
||||||||| merged common ancestors
=======
>>>>>>> 900354559af8d315899929441ec6c51fc4b26219

<<<<<<< HEAD
button.addEventListener('click', (e)=> {
    const value = input.value;
||||||| merged common ancestors
||||||| merged common ancestors
button.addEventListener('click', (e)=> {
    const value = input.value;
=========

=======

>>>>>>> 900354559af8d315899929441ec6c51fc4b26219

button.addEventListener('click', (e)=> {
    const value = input.value;
<<<<<<< HEAD
=======
    if(!value === ''){
    button.addEventListener('click', (e)=> {
    const value = input.value.trim();
    // console.log(value);


    fetch('/search', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title: value})
    }
    )
    .then(res => res.json())
    .then(res=> renderDataInput(res.data))
    .catch(console.log)
})
    }
    
 fetch(`/all` )
 .then(res=>res.json())
 .then(res=> renderDataAll(res.data))
 .catch(err=> console.log(err));
}