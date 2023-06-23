$(document).ready(function(){
    let seats = document.querySelectorAll('.seat'); 
    let btnView = document.querySelectorAll('.btn-views button'); 
    let closeBtns = document.querySelectorAll('.closeBtn'); 
    seats.forEach(function(seat) {
        seat.addEventListener('change',()=>{
            seat.setAttribute('checked','true');
        })
       
    });
    // console.log(btnView);
    btnView.forEach(btn=>{
        btn.addEventListener('click',()=>{
           card =  btn.getAttribute('id');
           let id = document.getElementById('card'+card);

           id.setAttribute('class','block');
        })
    })

    closeBtns.forEach(closeBtn =>{
        closeBtn.addEventListener('click',()=>{
            let closeCard = closeBtn.parentElement.parentElement.parentElement.parentElement.parentElement;
            closeCard.setAttribute('class','hidden');
        })
    })

})