const openWindowButton = document.querySelector('.view-button');

openWindowButton.addEventListener('click', function(){

    const modalWindow = document.createElement('div')

    modalWindow.classList.add('modal-window');
    
    const modalBox = document.createElement('div')
    
    modalBox.classList.add('modal-box')
    
    const closeButton = document.createElement('button')
    
    closeButton.textContent ="×"
    
    closeButton.classList.add('close-button')
    
    const windowTitle = document.createElement('h1')
    
    windowTitle.textContent = 'Shiba Inu'
    
    windowTitle.classList.add('window-title')
    
    const RealShiba = document.createElement('img')
    
    RealShiba.src = "./img/800px-Shiba_inu_taiki.jpg"
    
    RealShiba.alt = "real shiba"
    
    RealShiba.classList.add('real-shiba-img')
    
    const windowParagraph = document.createElement('p')
    
    windowParagraph.textContent = "it's real shiba"
    
    windowParagraph.classList.add('window-paragraph')
    
    document.body.appendChild(modalWindow)
    modalWindow.appendChild(modalBox)
    modalBox.appendChild(closeButton)
    modalBox.appendChild(windowTitle)
    modalBox.appendChild(RealShiba)
    modalBox.appendChild(windowParagraph)

    modalWindow.classList.add('open')

    closeButton.addEventListener('click', function() {
        modalWindow.classList.remove('open')
        document.querySelector('.modal-window').remove()
    })
   
})
