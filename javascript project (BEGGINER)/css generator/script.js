document.addEventListener("DOMContentLoaded",()=>{

    const btncopy=document.querySelector("#copy")
    const box=document.querySelector(".box")
    const allborder=document.getElementById("all") 
    const all_value=document.getElementById("all-value")
    const code=document.getElementById("code")
    const border=document.getElementById("border")

  const border__style=document.getElementById("border-style")

    var all_radius=10
    var border_style="solid"
    var border_size=3
       var coding=""


    function updateborder(){

        all_radius=allborder.value
       border_size=border.value

        all_value.innerText=all_radius+"px"

         coding=`
        border-radius:${all_radius}px;

        border: ${border_size}px  ${border_style }  red`

        code.value=coding

        box.style.cssText=coding

    }
    
    allborder.addEventListener("mousemove",updateborder)
    allborder.addEventListener("change",updateborder)

    
    border.addEventListener("mousemove",updateborder)
    border.addEventListener("change",updateborder)
    btncopy.addEventListener("click",()=>{
        document.querySelector("textarea").select()
        document.execCommand("copy") 
      })

    updateborder();


    border__style.addEventListener("change",function(){
        border_style=this.value
        updateborder()
    })
  
});


