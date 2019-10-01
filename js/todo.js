$(document)
    .ready(function () {

        function generateUUID() {
            /*jshint bitwise:false */
            var i,
                random;
            var uuid = '';

            for (i = 0; i < 32; i++) {
                random = Math.random() * 16 | 0;
                if (i === 8 || i === 12 || i === 16 || i === 20) {
                    uuid += '-';
                }
                uuid += (i === 12
                    ? 4
                    : (i === 16
                        ? (random & 3 | 8)
                        : random)).toString(16);
            }
            return uuid;
        }

        // code to be implemented
		$(".selectActive").click(function(){
				$(".checked").hide();
				$(".unchecked").show();
			});
		
		
		$(".selectComplete").click(function(){
				$(".checked").show();
				$(".unchecked").hide();
			});

		
		$(".selectAll").click(function(){
				$(".checked").show();
				$(".unchecked").show();
			});
			
		
		$("#button").click(function(){
				var currentId = generateUUID;
				$(".container ol").append('<li id="tempId" class="unchecked"><input name="done-todo" type="checkbox" class="done-todo"></li>');
		$("#tempId").append('<span>' + $("#item").val() + '</span>');
				$("#tempId").attr("id", currentId);
				
		});
			
		$(document).on("click", ".done-todo", function(event){
			if($(this).parent()[0].className == "unchecked"){
				$(this).parent()[0].className = "checked";
			}
			else{
				$(this).parent()[0].className = "unchecked";
			}
		});
		
		$(document).on("dblclick", "li", function(){
			var list = $(this)
                .children('span')
                .attr('contentEditable', 'true')
                .focus();
			list.keypress(function(event){
				if(event.keyCode == 13){
					list.html(list.text());
					list.attr('contentEditable', 'false');
				}
			});
		});
	});
		