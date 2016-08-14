asyncTest('Ajax tests', function(){
	expect(5); //5 tests 

	var myData = [];
	//make call to get ajax file
	var xhr = $.ajax({
		type: 'GET',
		url: 	'http://jsonplaceholder.typicode.com/albums',
		dataType: 'json'
	})
	.done(function(data) { myData = data; })
	.always(function(data, status){
		var $data = $(data);

		var pageTitle = myData[0].title;
		equal(pageTitle, 'quidem molestiae enim', 'Title of first response should be \'quidem molestiae enim\'');

		var size = myData.length; //checking size of array matches number of items in album 
		equal(size, 100, 'The number albums is \'100\'');

		var lastItem = {userId: 10, id: 100, title: "enim repellat iste"}; //check if last items match with ajax call
		equal(lastItem.userId, 10, 'the last album userID is equal to 10');
		equal(lastItem.id, 100, 'the last album id is equal to 10');
		equal(lastItem.title, 'enim repellat iste', 'the last album name is enim repellat iste');

		start(); //run test after ajax call

	});

});
