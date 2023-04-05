// 1秒ごとに実行
interval_id = setInterval(() => {

    const elements = document.querySelectorAll("svg");

    var count = 0;
    elements.forEach(function(element){
        console.log(element);
        const element_Wrapper = element.parentNode;
        const imgElement = document.createElement('img');

        if( count % 2 == 0 ){
            var imageUrl = chrome.extension.getURL("dog.png")
        }else{
            var imageUrl = chrome.extension.getURL("elon.png")
        }
        // ここはコメント外すのダメ↓
        // count++;
        // ここはコメント外すのダメ↑

        // imgElement.src = imageUrl
        imgElement.src = imageUrl
        imgElement.style.width = '2rem'
        imgElement.style.height = '2rem'
        var rndm = Math.floor(Math.random()*2);
        if( rndm == 0 ){
            imgElement.classList.add("spin")
        }

        element_Wrapper.appendChild(imgElement)
        element.remove()
    });

}, 1000);
