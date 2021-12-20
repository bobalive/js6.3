const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    tabItem = document.querySelectorAll('.tabsItem'),
    tabContent = document.querySelectorAll('.tabsContentItem');

// let date = new Date();

// console.log(date.getSeconds());

function clock() {

    let time = new Date(),
        hours = time.getHours() * 30,
        minutes = time.getMinutes() * 6,
        second = time.getSeconds() * 6;

    
    hour.style = `transform: rotate(${hours}deg)`;
    min.style = `transform: rotate(${minutes}deg)`;
    sec.style = `transform: rotate(${second}deg)`;

}


clock();

function toggle(arr, content){
    
    arr.forEach(item =>{
        item.addEventListener('click', () =>{
            arr.forEach(item =>{
            item.classList.remove('active')
            })
            // var a = arr[0].className.split(' ') ;
            // if(a[1] ==''){
            //     content.forEach(cont => {
            //         cont[0].classList.remove('active');
            //         cont[1].classList.add('active');
            //     })
            // }if(a[1] == 'active'){
            //     content.forEach(cont => {
            //         cont[0].classList.remove('active');
            //         cont[1].classList.add('active');
            //     })
            // }        
            content.forEach(cont => {
                cont.classList.toggle('active')
            })
            item.classList.toggle('active')
            
        })
    })
}


toggle(tabItem, tabContent)

    // a =tabItem[0].className.split(' ');
    // if(a[1] ===''){
    //     console.log('bpb');
    //     tabContent[1].classList.add('active');
    //     tabContent[0].classList.remove('active');
    // }else if(a[1] =='active'){
    //     console.log('bbb');
    //     tabContent[0].classList.add('active');
    //     tabContent[1].classList.remove('active');
    // }

