const container = document.querySelector('.container');
let limit = 4;
let pageCount = 1;
let postCount = 1;

const getPost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`);
    console.log(response);
    const data = await response.json();
    console.log(data);

    const elements = data.map((e, i) => {
        const htmlData = `
         <div class="posts">
            <p class="post-id">${postCount++}</p>
            <h2 class="title">${e.title}</h2>
            <p class="post-info">
               ${e.body} 
            </p>
        </div>`;

        return htmlData;
    });

    container.insertAdjacentHTML('beforeend', elements.join(''));
};

getPost();

const showData = () => {
    setTimeout(() => {
        pageCount++;
        getPost();
    }, 300);
};

window.addEventListener('scroll', () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
        console.log('bottom');
        showData();
    }
});