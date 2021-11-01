let sideMenuButton = document.querySelector('#side-menu-button');
let sideMenu = document.querySelector('.side-menu');
let listItem = document.querySelectorAll('.list-item');



sideMenuButton.addEventListener('click',()=>{
  if(sideMenuButton.className=='bx bx-x')
  {
   sideMenuButton.className='bx bx-menu';
  }else
  {
   sideMenuButton.className='bx bx-x';
  }

   sideMenu.classList.toggle('active')

})

listItem.forEach(item=>{
  item.addEventListener('click',()=>{
    listItem.forEach(item=>{
      item.classList.remove("current")
    })
    item.classList.add("current")

  })
})

