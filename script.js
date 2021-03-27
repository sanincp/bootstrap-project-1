$(document).ready(function(){
 $("#fnam").blur(function(){
     var text=$(this).val()
     if(text.length<5){
         $("#error1").show()
     }else{
         $("#error1").hide()
     }
 })
     $("#lname").blur(function(){
    var text=$(this).val()
    
    if(text.length<4){
        $("#error2").show()
    }else{
        $("#error2").hide()
    }
})

$("#country").blur(function(){
    var text=$(this).val()
    if(text.length<1){
        $("#error4").show()
    }else{
        $("#error4").hide()
    }
})
})
