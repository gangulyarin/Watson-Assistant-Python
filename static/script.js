$(document).ready(function(){
    $("#send").click(function(){
        text = $("#message").val()
        $('#chat').append("<p class=\"bg-primary text-white\">"+text+"</p>");

        $('#message').val('');
        $.ajax({
                type: "POST",
                url: "/sendChat",
                data: {'text':text.trim()},
                dataType: "json",
                success: function(data){

                    for(var i=0; i<data.output.generic.length; i++){
                        if(data.output.generic[i].response_type == 'text'){
                            $('#chat').append("<p class=\"bg-secondary text-white\">"+data.output.generic[i].text+"</p>");
                        }
                        if(data.output.generic[i].response_type == 'option'){
                            for (var j = 0; j < data.output.generic[i].options.length; j++)
                                $("#chat").append("<div class=\"badge\">"+data.output.generic[i].options[j].label+"</div>");
                        }
                    }


                    document.getElementById('chat').scrollTop = document.getElementById('chat').scrollHeight;
                }
            })
    })
})
