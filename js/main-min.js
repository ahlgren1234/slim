function openModal(){modal.style.display="block"}function closeModal(){modal.style.display="none"}if($(".modal")[0]){var modal=document.getElementById("modal"),modalBtn=document.getElementById("modalBtn"),modalCloseBtn=document.getElementsByClassName("modalCloseBtn")[0];modalBtn.addEventListener("click",openModal),modalCloseBtn.addEventListener("click",closeModal)}$(".alert-close")[0]&&$(".alert-close").click(function(){$(this).closest(".alert-closable").hide("slow")});