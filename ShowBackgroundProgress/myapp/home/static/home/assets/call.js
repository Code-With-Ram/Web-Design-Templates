var bar = $('.progress-bar')
var bar_info = $('.sr-only')

function upload_file(){
    //var formData = new FormData();
    //formData.append('csrfmiddlewaretoken', '{{csrf_token}}');
    $.ajax({
        type : 'POST',
        url : 'bgtask/',
        //url : '/home',
        dataType: 'json',
        data :{'csrfmiddlewaretoken': '{{ csrf_token }}','Name':'Ram'},
        //processData: false,
        //contentType: false,
       success : function(data) {
          console.log(data['pro']);  
          check_progress();
       }
    });
};

function updateBar(val)
{
 bar.css('width',val+'% ');
 bar_info.text(val+"% completed"); 
}
function check_progress(){
    //var formData = new FormData();
    //formData.append('csrfmiddlewaretoken', '{{csrf_token}}');


    $.ajax({
        type : 'GET',
        url : 'bgtask/',
        dataType: 'json',

        success : function(data) {

          updateBar(data['pro'])
          if(data['pro']<100)
          {
            setTimeout(function () {
                check_progress();
                }, 200);       

          }
          else
          {
            setTimeout(function(){
            $.get('',async=false,function(data){
                location.reload()
            });
            // Simulate an HTTP redirect:
            //window.location.replace("http://127");    
            
            }, 1000);       
          }
    }
    
});
}

