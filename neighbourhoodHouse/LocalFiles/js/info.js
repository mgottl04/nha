

function System (){
	systemInstatiated = true;
	this.accounts = new Array();

	this.addAccount = function(account){
		this.isAccountUnique(account)
		if (this.isAccountUnique(account)){
			this.accounts.push(account);
			return true;
		} else return false;
	}
	
	this.isAccountUnique = function(account){
		for (var i = 0; i < this.accounts.length; i++){
			if (!this.accounts[i].checkID){
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
	
};

function Account(uID, uPassword, uEmail) {
    var id = uID;
    var password = uPassword;
    this.email = uEmail;
    this.businesses = new Array();
    
    this.checkPW = function(pw){
    	if (password == pw){
    		return true;
    	} 
    	return false;
    }
    
    this.checkID = function(uID){
    	if (id = bID){
    		return true;
    	}
    	return false;
    }
    this.addBusiness = function(aBussiness){
    	this.businesses.push(aBusiness);
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
};

function Events(eID,eName, eLocation, eDate, eContact, eDescription, eCategories){
	this.id = eID;
	this.name = eName;
	this.location = eLocation;
	this.date = eDate;
	this.contact = eContact;
	this.description = eDescription;
	this.categories = eCategories;
	
};
function getDatabase(){
	//first account--------------------------------------------------
	var eTags1 = new Array("senior", "childcare", "youth");
	var event1= new Events(88,"eName1", "910 mainland St", "17:00.13/12/13", "phil@abc.com", "wholesome family friendly event", eTags1);
	var bTags1 = new Array("fun", "family", "fred");
	var business1= new Business("fred", "999 oak street west", "fred's pizza", 7781234567,"M-F : 12:00-16:00", "Fred", "fred@fred.fred",  bTags1);
	business1.events.push(event1);
	var account1 = new Account("uid1", "upw1", "uemail@email");
			//----------
	var eTags2 = new Array("senior", "childcare", "youth");
	var event2= new Events(78,"eName2", "West 17 Avenue Vancouver", "17:00.13/30/13", "eName2@abc.com", "wholesome childcare friendly event", eTags2);
	var bTags2 = new Array("fun", "family", "bob");
	var business2= new Business("bob", "East 17 Avenue Vancouver", "Bob's pizza", 778654321,"M-F : 12:00-16:00", "Bob", "Bob@bob.bob",  bTags2);
	business2.events.push(event2);
	
	account1.businesses.push(business1);
	account1.businesses.push(business2);
	//second account
	var eTags3 = new Array("senior", "childcare", "youth");
	var event3= new Events(68,"eName3", "789 mainland St", "17:00.13/12/13", "eName3@abc.com", "Fund Raising", eTags3);
	var bTags3 = new Array("fun", "family", "frank");
	var business3= new Business("frank", "765 oak street west", "Pizzahut", 7781234567,"M-F : 12:00-16:00", "Frank", "Frank@frank.frank",  bTags3);
	business3.events.push(event3);
			//----------
	var eTags4 = new Array("senior", "childcare", "youth");
	var event4= new Events(78,"eName4", "West 25 Avenue Vancouver", "17:00.13/30/13", "eName4@abc.com", "Charity for Cancer Association", eTags4);
	var bTags4 = new Array("fun", "family", "John");
	var business4= new Business("John", "East 25 Avenue Vancouver", "Boston Pizza", 778654321,"M-F : 12:00-16:00", "John", "boJohnb@John.John",  bTags4);
	business4.events.push(event4);
	var account2 = new Account("uid2", "upw2", "uemail2@email");
	account2.businesses.push(business3);
	account2.businesses.push(business4);

	//add all to the system
	var system = new System();
	system.addAccount(account1);
	var butts = system.getAllEvents();
	var futts = system.getAllBusinesses();

	var address = system.accounts[0].businesses[0].events[0].location;
	return system;
}
function remove (from, to) {
	  var rest = this.slice((to || from) + 1 || this.length);
	  this.length = from < 0 ? this.length + from : from;
	  return this.push.apply(this, rest);
	};

