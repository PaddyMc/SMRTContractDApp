$(document).ready(function() {

	$("#hope").click(function() {
	    //var value = parseInt($("#blockchain input.text").val(), 10);
	    var value = $("#input").val();
	    console.log(web3.eth.defaultAccount);
	    SimpleStorage.methods.set(value).send({from: web3.eth.defaultAccount});
	    


	    // If web3.js 1.0 is being used
	    /*if (EmbarkJS.isNewWeb3()) {
	      SimpleStorage.methods.set(value).send({from: web3.eth.defaultAccount});
	      addToLog("#blockchain", "SimpleStorage.methods.set(value).send({from: web3.eth.defaultAccount})");
	    } else {
	      
	      addToLog("#blockchain", "SimpleStorage.set(" + value + ")");
	    }*/

  	});

  	$("#hope2").click(function() {
	    //var value = $("#inputGet").text();
	    //$("#inputGet").text(value);

	    SimpleStorage.methods.get().call().then(function(value) { $("#inputGet").val(value) });
	    //BestContract.methods.listStats().call().then(function(value) { console.log(value) });
  	});

  	$("#setStats").click(function() {
		BestContract.methods.createStats($("#health").val(),$("#type").val()).send({from: web3.eth.defaultAccount});
  	});

  	$("#getStats").click(function() {
	    //var value = ;
	    //
	    //SimpleStorage.methods.get().call().then(function(value) { $("#inputGet").text(value); });
	    BestContract.methods.listStats().call().then(function(value) { $("#inputGetStats").val(value) });
  	});



	//SimpleStorage.methods.set(100).send({from: web3.eth.defaultAccount});
	//BestContract.methods.
	console.log("Test");
	//SimpleStorage.methods.get().call().then(function(value) { console.log(value.toNumber()) });
	//SimpleStorage.methods.storedData().then(function(value) { console.log(value.toNumber()) });

 });