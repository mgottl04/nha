
var system = getDatabase();

 Array.prototype.addNoDuplicateNames = function(element){
	var alreadyContainsElement = false;
	for (var i = 0 ; i < this.length ; i++){
		if (element.name == this[i].name){
			alreadyContainsElement= true;
			break;
		}
	}
	if (!alreadyContainsElement){
		this.push(element);
	}
};

function filterBusinessesByCat(communityDevelopment, childcare, employment, family, housing, newcomers, senior, system){
	var filteredResult = new Array();	

	if (communityDevelopment){
		var catList = system.getBusinessesForCategory("community development")
		for (var i = 0; i < catList.length; i++){
			filteredResult.addNoDuplicateNames(catList[i]);
		}
	}
	if (childcare){
		var catList = system.getBusinessesForCategory("childcare")
		for (var i = 0; i < catList.length; i++){
			filteredResult.addNoDuplicateNames(catList[i]);
		}
	}
	if (employment){
		var catList = system.getBusinessesForCategory("employment")
		for (var i = 0; i < catList.length; i++){
			filteredResult.addNoDuplicateNames(catList[i]);
		}
	}
	if (family){
		var catList = system.getBusinessesForCategory("family")
		for (var i = 0; i < catList.length; i++){
			filteredResult.addNoDuplicateNames(catList[i]);
		}
	}
	if (housing){
		var catList = system.getBusinessesForCategory("housing")
		for (var i = 0; i < catList.length; i++){
			filteredResult.addNoDuplicateNames(catList[i]);
		}
	}
	if (newcomers){
		var catList = system.getBusinessesForCategory("newcomers")
		for (var i = 0; i < catList.length; i++){
			filteredResult.addNoDuplicateNames(catList[i]);
		}
	}
	if (senior){
		var catList = system.getBusinessesForCategory("senior")
		for (var i = 0; i < catList.length; i++){
			filteredResult.addNoDuplicateNames(catList[i]);
		}
	}
	return filteredResult;
};
function filterEventsByCat(communityDevelopment, childcare, employment, family, housing, newcomers, senior, system){
	var filteredResult = new Array();	

	if (communityDevelopment){
		var catList = system.getEventsForCategory("community development")
		for (var i = 0; i < catList.length; i++){
			filteredResult.addNoDuplicateNames(catList[i]);
		}
	}
	if (childcare){
		var catList = system.getEventsForCategory("childcare")
		for (var i = 0; i < catList.length; i++){
			filteredResult.addNoDuplicateNames(catList[i]);
		}
	}
	if (employment){
		var catList = system.getEventsForCategory("employment")
		for (var i = 0; i < catList.length; i++){
			filteredResult.addNoDuplicateNames(catList[i]);
		}
	}
	if (family){
		var catList = system.getEventsForCategory("family")
		for (var i = 0; i < catList.length; i++){
			filteredResult.addNoDuplicateNames(catList[i]);
		}
	}
	if (housing){
		var catList = system.getEventsForCategory("housing")
		for (var i = 0; i < catList.length; i++){
			filteredResult.addNoDuplicateNames(catList[i]);
		}
	}
	if (newcomers){
		var catList = system.getEventsForCategory("newcomers")
		for (var i = 0; i < catList.length; i++){
			filteredResult.addNoDuplicateNames(catList[i]);
		}
	}
	if (senior){
		var catList = system.getEventsForCategory("senior")
		for (var i = 0; i < catList.length; i++){
			filteredResult.addNoDuplicateNames(catList[i]);
		}
	}
	return filteredResult;
};

function filterEventsByDate(from, to, eventsList, system){
	var filteredResult = new Array();
	var timeToFrom = system.timeUntilDateString(from);
	var timeToTo = system.timeUntilDateString(to);
	for (var i = 0; i < eventsList.length; i++){
		var timeToEvent = system.timeUntilEvent(eventsList[i].date);
		if (timeToEvent > timeToFrom && timeToEvent < timeToTo){
			filteredResult.push(eventsList[i]);
		}
	}
	return filteredResult;
};

function filterEventsByCatAndDate(communityDevelopment, childcare, employment, family, housing, newcomers, senior, from, to,  system){
	var temp = filterEventsByCat(communityDevelopment, childcare, employment, family, housing, newcomers, senior, system);
	return filterEventsByDate(from, to, temp, system);
};