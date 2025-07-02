var modal = {
	create : function(id, data){
		var haveClose = data.haveClose;
		var bodyText = data.bodyText;
		var btnType;
		
		
		var $modal = $('#' + id);
		$modal.attr('class', 'modal fade');
		$modal.attr('tabindex', '-1');
		$modal.attr('role', 'dialog');
		
		var $dialog = $('<div class="modal-dialog modal-dialog-centered" role="document">');
		var $content = $('<div class="modal-content rounded-0">');
		
		var $header = $('<div class="modal-header border-0">');
		if(haveClose){
			var $close = $('<button type="button" class="close text-green" data-dismiss="modal" aria-label="Close">').append('<span aria-hidden="true"><i class="fas fa-times"></i></span>');
			$header.append($close);
		} else{
			$modal.attr('data-backdrop', 'static');
		}
		
		var $body = $('<div class="modal-body">').append('<span class="text-center"><h2>' + data.title + '</h2></span>');
		if(bodyText){
			$body.append(bodyText);
		} else{
			$body.append($modal.html());
		}
		$modal.html('');
		
		$content.append($header);
		$content.append($body);
		$content.append(modal.creatFooter(data));
		
		$modal.append($dialog.append($content));
	},
	creatFooter : function(data){
		var btn1 = data.btn1;//{click,Text,className};
		var btn2 = data.btn2;
		var btn3 = data.btn3;
		var btnStyle = data.btnStyle;
		var $footer = $('<div class="modal-footer border-0">');
		if(btnStyle == 'H'){
			$footer.addClass('mx-auto');
			if(btn1){
				var $btn1 = $('<button type="button" class="btn ' + (btn1.className || 'btn-outline-success') + '" data-dismiss="modal">' + btn1.Text + '</button>');
				if(btn1.click){
					$btn1.on('click', btn1.click);
				}
				$footer.append($btn1);
			}
			if(btn2){
				var $btn2 = $('<button type="button" class="btn ' + (btn2.className || 'btn-success') + '">' + btn2.Text + '</button>');
				if(btn2.click){
					$btn2.on('click', btn2.click);
				}
				$footer.append($btn2);
			}
			if(btn3){
				var $btn3 = $('<button type="button" class="btn ' + (btn3.className || 'btn-success') + '">' + btn3.Text + '</button>');
				if(btn3.click){
					$btn3.on('click', btn2.click);
				}
				$footer.append($btn3);
			}
		} else if(btnStyle == 'V'){
			var $container = $('<div class="container-fluid">');
			if(btn1){
				var $row1 = $('<div class="row m-2">');
				var $col1 = $('<div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">');
				var $btn1 = $('<button type="button" class="btn btn-block ' + (btn1.className || 'btn-outline-secondary') + '">' + btn1.Text + '</button>');
				if(btn1.click){
					$btn1.on('click', btn1.click);
				}
				$col1.append($btn1);
				$row1.append($col1);
				$container.append($row1);
			}
			
			if(btn2){
				var $row2 = $('<div class="row m-2">');
				var $col2 = $('<div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">');
				var $btn2 = $('<button type="button" class="btn btn-block ' + (btn2.className || 'btn-outline-warning') + '">' + btn2.Text + '</button>');
				if(btn2.click){
					$btn2.on('click', btn2.click);
				}
				$col2.append($btn2);
				$row2.append($col2);
				$container.append($row2);
			}
			
			if(btn3){
				var $row3 = $('<div class="row m-2">');
				var $col3 = $('<div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">');
				var $btn3 = $('<button type="button" class="btn btn-block ' + (btn3.className || 'btn-warning') + '">' + btn3.Text + '</button>');
				if(btn3.click){
					$btn3.on('click', btn3.click);
				}
				$col3.append($btn3);
				$row3.append($col3);
				$container.append($row3);
			}
			$footer.append($container);
		}
		return $footer;
	}
}

var page = {
	reload : function(){
		$img = $('<img src="../../../../images/reload.png" style="width:250px;margin:auto;">');
		$col1 = $('<div class="col-auto">');
		$row1 = $('<div class="row justify-content-center" style="margin-top:150px">');
		$col2 = $('<div class="col-sm-auto">');
		$row2 = $('<div class="row justify-content-center">');
		$span = $('<span><h2>Oops, something wrong…</h2></span>');
		$btnReload = $('<button class="btn btn-block  btn-warning">132</button>');
		
		$container = $('<div class="container-fluid">');
		
		$col1.append($img);
		$row1.append($col1);
		
		$col2.append($span);
		$col2.append($btnReload);
		$row2.append($col2);
		
		$container.append($row1);
		$container.append($row2);
		$('#page').html('');
		$('#page').append($container);
	},
	notFound404 : function(){
		$img = $('<img src="../../../../images/oopsCry.png" style="width:250px;margin:auto;">');
		$col1 = $('<div class="col-auto">');
		$row1 = $('<div class="row justify-content-center" style="margin-top:150px">');
		$col2 = $('<div class="col-sm-auto">');
		$row2 = $('<div class="row justify-content-center mb-4">');
		$col3 = $('<div class="col-md-auto col-12">');
		$row3 = $('<div class="row justify-content-center">');
		$span1 = $('<span class="text-oops text-center">Oops!&nbsp; 404</span>');
		$span2 = $('<span class="text-gray-2 text-center"><h2>Page not found</h2></span>');
		$span3 = $('<span class="text-gray-2 text-left"><h5>The Page you are looking for doesn’t exist or an other error occurred.</h5></span>');
		$span4 = $('<span class="text-gray-2 text-left"><h5><a href="#" class="text-green">Go back</a>, or head over to <a href="#" class="text-green">home page</a> to choose a new direction.</h5></span>');
		$container = $('<div class="container-fluid">');
		
		$col1.append($img);
		$row1.append($col1);
		
		$col2.append($span1);
		$col2.append($span2);
		$row2.append($col2);
		
		$col3.append($span3);
		$col3.append($span4);
		$row3.append($col3);
		
		$container.append($row1);
		$container.append($row2);
		$container.append($row3);
		$('#page').html('');
		$('#page').append($container);
	},
	forbidden403 : function(){
		$img = $('<img src="../../../../images/oopsCry.png" style="width:250px;margin:auto;">');
		$col1 = $('<div class="col-auto">');
		$row1 = $('<div class="row justify-content-center" style="margin-top:150px">');
		$col2 = $('<div class="col-sm-auto">');
		$row2 = $('<div class="row justify-content-center mb-4">');
		$col3 = $('<div class="col-md-auto col-12">');
		$row3 = $('<div class="row justify-content-center">');
		$span1 = $('<span class="text-oops text-center">Oops!&nbsp; 403</span>');
		$span2 = $('<span class="text-gray-2 text-center"><h2>Forbidden</h2></span>');
		$span3 = $('<span class="text-gray-2 text-left"><h5>The server understood the request, but is refusing to fulfill it.</h5></span>');
		$span4 = $('<span class="text-gray-2 text-left"><h5>Authorization will not help and the request SHOULD NOT be repeated.</h5></span>');
		$span5 = $('<span class="text-gray-2 text-left"><h5><a href="#" class="text-green">Go back</a>, or head over to <a href="#" class="text-green">home page</a> to choose a new direction.</h5></span>');
		$container = $('<div class="container-fluid">');
		
		$col1.append($img);
		$row1.append($col1);
		
		$col2.append($span1);
		$col2.append($span2);
		$row2.append($col2);
		
		$col3.append($span3);
		$col3.append($span4);
		$col3.append($span5);
		$row3.append($col3);
		
		$container.append($row1);
		$container.append($row2);
		$container.append($row3);
		$('#page').html('');
		$('#page').append($container);
	},
	workInProgress : function(){
		$img = $('<img src="../../../../images/workInProgress.png" style="width:250px;margin:auto;">');
		$col1 = $('<div class="col-auto">');
		$row1 = $('<div class="row justify-content-center" style="margin-top:150px">');
		$col2 = $('<div class="col-sm-auto">');
		$row2 = $('<div class="row justify-content-center mb-4">');
		$col3 = $('<div class="col-md-auto col-12">');
		$row3 = $('<div class="row justify-content-center">');
		$span1 = $('<span class="text-oops text-center">Work in progress</span>');
		$span2 = $('<span class="text-gray-2 text-center"><h2>Sorry~</h2></span>');
		$span3 = $('<span class="text-gray-2 text-center"><h5>we’ll be right back to you</h5></span>');
		$span4 = $('<span class="text-gray-2 text-left"><h5><a href="#" class="text-green">Go back</a>, or head over to <a href="#" class="text-green">home page</a> to choose a new direction.</h5></span>');
		$container = $('<div class="container-fluid">');
		
		$col1.append($img);
		$row1.append($col1);
		
		$col2.append($span1);
		$col2.append($span2);
		$row2.append($col2);
		
		$col3.append($span3);
		$col3.append($span4);
		$row3.append($col3);
		
		$container.append($row1);
		$container.append($row2);
		$container.append($row3);
		$('#page').html('');
		$('#page').append($container);
	}
}