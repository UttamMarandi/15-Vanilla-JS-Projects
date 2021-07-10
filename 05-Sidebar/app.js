// the code is similar to previou one. - 04 Navbar toggle
//1. select required elements - siderbar, nav toggle button, nav close button
//2. use element.classList.toggle on navToggle (eventlistener used)
//3. use element.classList.remove on navClose.

const sidebarToggle = document.querySelector(".sidebar-toggle")
const sidebar = document.querySelector(".sidebar")
const btnClose = document.querySelector(".close-btn")

sidebarToggle.addEventListener("click" , function() {
    sidebar.classList.toggle("show-sidebar")
})

btnClose.addEventListener("click" , function () {
    sidebar.classList.remove("show-sidebar")
})
