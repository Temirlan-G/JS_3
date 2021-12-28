const usd = document.querySelector('#usd')
const som = document.querySelector('#som')


function convert (elem, target, isTrue) {
    elem.addEventListener('input', () => {
        const request = new XMLHttpRequest()
        request.open('GET', 'data.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()

        request.addEventListener('load', () => {
            const response = JSON.parse(request.response)
            if (isTrue) {
                target.value = (+elem.value/response.usd).toFixed(2)
            } else {
                target.value = (+elem.value*response.usd).toFixed(2)
            }
            if(elem.value === '') {
                target.value = ''
            }

        })
    })
}

convert(som, usd, true)

convert(usd, som)