$(document).ready(function(){
    $("#send").click(function(){
        text = $("#message").val()
        $('#chat').append(text+"<br/>");
        $('#message').val('');
        //alert(text)
        $.ajax({
                type: "POST",
                url: "/sendChat",
                data: {'text':text.trim()},
                dataType: "json",
                success: function(data){
                    //data = JSON.stringify(data);
                    for(var i=0; i<data.output.generic.length; i++){
                        if(data.output.generic[i].response_type == 'text'){
                            $('#chat').append(data.output.generic[i].text+"<br/>");
                        }
                        if(data.output.generic[i].response_type == 'option'){
                            for (var j = 0; j < data.output.generic[i].options.length; j++)
                                $("#chat").append(data.output.generic[i].options[j].label+"<br/>");
                        }
                    }
                    //$('#chat').append(data+"<br/>");

                    document.getElementById('chat').scrollTop = document.getElementById('chat').scrollHeight;
                }
            })
    })
})
