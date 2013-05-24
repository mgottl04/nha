

function System (){
	systemInstatiated = true;
	this.accounts = new Array();

	
	this.getAccount = function(aName){
		for (var i = 0 ; i < this.accounts.length; i++){
			if (this.accounts[i].name === aName){
				return this.accounts[i];
			}
		}
	}
	
	this.getAllBusinessesForAccount = function(aName){
		return this.getAccount(aName).businesses;
	}
	
	this.getAllEventsForAccount = function(aName){
		var businesses = this.getAccount(aName);
		var events = new Array();
		for (var i =0; i < businesses.length; i++){
			var temp = events.concat(businesses[i].events);
			events = temp;
		}
		return events;
	}
	
	this.addAccount = function(account){
		this.isAccountUnique(account)
		if (this.isAccountUnique(account)){
			this.accounts.push(account);
			return true;
		} else return false;
	}
	
	this.isAccountUnique = function(account){
		for (var i = 0; i < this.accounts.length; i++){
			if (this.accounts[i].name == account.name){
				return false;
			}
			if (this.accounts[i].email == account.email){
				return false;
			}
		}
		return true;
	}
	
	this.removeAccount = function(account){
		var noAccounts = this.accounts.length;
		for (var i = 0; i < noAccounts; i++){
			if (this.accounts[i] == account){
				this.accounts.remove(i);
				return true;
			} 
		}
		return false;
	}
	this.getAllBusinesses = function(){
		var allBusinesses = new Array();
		for (var i = 0; i < this.accounts.length ; i++){
			var temp = allBusinesses.concat(this.accounts[i].businesses);
			allBusinesses = temp;
		}
		return allBusinesses;
	}
	this.getAllEvents = function(){
		var allBusinesses = this.getAllBusinesses(); 
		var allEvents = new Array();
		for (var i = 0; i < allBusinesses.length ; i++){
			var temp = allEvents.concat(allBusinesses[i].events);
			allEvents = temp;
		}
		return allEvents;
	}


	this.getBusinessesForCategory = function(category){
		var allBusinesses = this.getAllBusinesses();
		var allBusinessesForCategory = new Array();
		for ( var i = 0; i< allBusinesses.length; i++){
			for (var j = 0 ; j < allBusinesses[i].categories.length; j++){
				if (allBusinesses[i].categories[j] === category){
					allBusinessesForCategory.push(allBusinesses[i]);
					break;
				}
			}
		}
		return allBusinessesForCategory;
	}
	
	this.getEventsForCategory = function(category){
		var allEvents = this.getAllEvents();
		var allEventsForCategory = new Array();
		for ( var i = 0; i< allEvents.length; i++){
			for (var j = 0 ; j < allEvents[i].categories.length; j++){
				if (allEvents[i].categories[j] === category){
					allEventsForCategory.push(allEvents[i]);
					break;
				}
			}
		}
		return allEventsForCategory;
	}
	
	this.getBusinessByName = function(bName){
		var allBusinesses = this.getAllBusinesses();
		for ( var i = 0; i < allBusinesses.length ; i++){
			if (allBusinesses[i].name === bName){
				return allBusinesses[i];
			}
		}
	}
	this.getEventByName = function(eName){
		var allEvents = this.getAllEvents();
		for ( var i = 0; i < allEvents.length ; i++){
			if (allEvents[i].name === eName){
				return allEvents[i];
			}
		}
	}
	this.getBusiness = function(accountName, businessName){
		var account = this.getAccount(accountName);
		return account.getBusinessByName(businessName);
	}
	this.getEvent = function(accountName, businessName, eventName){
		var business = this.getBusiness(accountName, businessName);
		return business.getEventByName(eventName);
	}
	

	this.timeUntilEvent = function(anEventDateString){
		
		var eventInMiliSecs = Date.parse(anEventDateString);
		var miliSecsToEvent = eventInMiliSecs;
		
		return miliSecsToEvent;
	}

	this.timeUntilDateString = function(ds){
		var dsInMiliSecs = Date.parse(ds);
		var miliSecsToDS = dsInMiliSecs;
		
		return miliSecsToDS;
	}
	//returns all events within cutOff MS of Now from provided list
	this.eventsWithinBlankMS = function(cutOff, listOfEvents){
		var eventsWithinRange = new Array();
		for (var i = 0 ; i < listOfEvents; i++){
			var msToEvent = this.timeUntilEvent(listOfEvents[i].date); 
			if (msToEvent > 0 && msToEvent < cutOff){
				eventsWithinRange.push(listOfEvents[i]);
			}
		}
		return eventsWithinRange;
	}
	//returns all events within cutOff MS from all events
	this.filterEvents = function(cutOff){
		return this.eventsWithinBlankMS(cutoff, this.getAllEvents());
	}
};

function Account(uID, uPassword, uEmail) {
    this.name = uID;
    this.password = uPassword;
    this.email = uEmail;
    this.isLoggedIn = false;
    this.businesses = new Array();
    
    this.checkPW = function(pw){
    	if (password == pw){
    		return true;
    	} 
    	return false;
    }
    
    this.checkID = function(uID){
    	if (name = uID){
    		return true;
    	}
    	return false;
    }
    this.addBusiness = function(aBusiness){
    	this.businesses.push(aBusiness);
    }
    this.getBusinessByName = function(aBusiness){
    	for (var i = 0; i < this.businesses.length ; i++){
    		if (this.businesses[i].name == aBusiness){
    			return this.businesses[i];
    		}
    	}
    }
};

function Business (bName, bAddress, bDescription, bPhone, bHours, bContactName, bEmail, bCategories, bEvents){
	this.name = bName;
	this.address = bAddress;
	this.description = bDescription;
	this.phone = bPhone;
	this.hours = bHours;
	this.contactName = bContactName;
	this.email = bEmail
	this.categories = bCategories;
	this.events = new Array();
	if (bEvents != null) {
		this.events = bEvents;
	} 

	this.addEvent = function(e){
		this.events.push(e);
	}
	
	this.removeEvent = function(eID){
		var noEvents = this.events.length;
		for (var i = 0; i < noEvents; i++){
			if (eID == this.events[i].id){
				this.events.remove(i);
				return true;
			}
		}
		return false;
	}
	this.getEventByName = function(eventName){
		for (var i = 0 ; i < this.events.length; i++){
			if (this.events[i].name == eventName){
				return  this.events[i];
			}
		}
	}
};

function Events(eID,eName, eAddress, eDateString, eContact, eDescription, eCategories){
	this.id = eID;
	this.name = eName;
	this.address = eAddress;
	this.date = eDateString;
	this.contact = eContact;
	this.description = eDescription;
	this.categories = eCategories;
	
};
function getDatabase(){
	//first account--------------------------------------------------
	var eTags1 = new Array("senior", "childcare", "newcomers");
	var event1= new Events(88,"eName1", "University of British Columbia", "October 13, 2013 11:13:00", "phil@abc.com", "wholesome family friendly event", eTags1);
	var bTags1 = new Array( "family", "senior");
	var business1= new Business("fred", "Simon Fraser University", "Fred gives you family fun",7781234567,"M-F : 12:00-16:00","Dr. Fred" , "fred@fred.fred",  bTags1);
	business1.events.push(event1);
	var eTags8 = new Array("childcare", "newcomers", "family");
	var event8 = new Events(92, "Fun event", "BCIT", "October 13, 1975 11:13:00", "jojo@aol.com", "best event ever", eTags8);
	business1.events.push(event8);
	var account1 = new Account("Default", "password", "default@email.com");
			//----------
	var eTags2 = new Array("newcomers", "childcare", "community development");
	var event2= new Events(78,"eName2", "Stanley Park of Vancouver", "October 13, 1975 11:13:00", "eName2@abc.com", "wholesome childcare friendly event", eTags2);
	var bTags2 = new Array("childcare", "family", "employment");
	var business2= new Business("bob", "Emily Carr University", "Bob's pizza", 778654321,"M-F : 12:00-16:00", "Bob", "Bob@bob.bob",  bTags2);
	business2.events.push(event2);
	
	account1.businesses.push(business1);
	account1.businesses.push(business2);

	//second account
	var eTags3 = new Array("family", "housing", "employment");
	var event3= new Events(68,"eName3", "Waterfront skytrain station", "October 13, 1975 11:13:00", "eName3@abc.com", "Fund Raising", eTags3);
	var bTags3 = new Array("childcare", "senior", "community development");
	var business3= new Business("frank", "Vancouver Airport", "Pizzahut", 7781234567,"M-F : 12:00-16:00", "Frank", "Frank@frank.frank",  bTags3);
	business3.events.push(event3);
			//----------
	var eTags4 = new Array("senior", "childcare", "family");
	var event4= new Events(78,"eName4", "Vancouver Art Gallery", "October 13, 2013 11:13:00", "eName4@abc.com", "Charity for Cancer Association", eTags4);
	var bTags4 = new Array("senior", "childcare", "family");
	var business4= new Business("John", "Telus World of Science of Vancouver", "Boston Pizza", 778654321,"M-F : 12:00-16:00", "John", "boJohnb@John.John",  bTags4);
	business4.events.push(event4);
	var account2 = new Account("uid2", "upw2", "uemail2@email");
	account2.businesses.push(business3);
	account2.businesses.push(business4);

	//add all to the system
	var system = new System();
	system.addAccount(account1);
	system.addAccount(account2);
	var address = system.accounts[0].businesses[0].events[0].address;
	return system;
}
function remove (from, to) {
	  var rest = this.slice((to || from) + 1 || this.length);
	  this.length = from < 0 ? this.length + from : from;
	  return this.push.apply(this, rest);
	};

