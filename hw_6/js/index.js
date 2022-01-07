class dataToPage {
    constructor(src, title, body) {
        this.src = src
        this.title = title
        this.body = body
    }

    render() {
        const wrapper = document.querySelector('#cardWrapper')
        const elem = document.createElement('div')
        elem.classList.add('data_item')

        elem.innerHTML = `
		<div class="data_item">
			<img src=${this.src} alt="img/kojima.jpg">
			<h3 class="data_item-title">${this.title}</h3>
			<div class="data_item-desc">${this.body}</div>
		</div>
        `
        wrapper.append(elem)
    }
}


const getData = async(url) => {
    const res = await fetch(url)
    if (!res.ok){
        new Error(`Error status ${(await res).status}, ${url}`)
    }

    return await res.json()
}

getData('https://jsonplaceholder.typicode.com/posts')
    .then((data) => {
        data.forEach(({src, title, body}) => {
            new dataToPage('img/latifi.jpg', title, body).render()

        })
    })
