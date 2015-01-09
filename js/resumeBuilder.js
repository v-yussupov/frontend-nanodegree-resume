var bio = {
	"name":"Vladimir Yussupov",
	"role":"web-developer",
	"contacts":{
		"cellphone":"87778270509", 
		"email": "v.yussupov@gmail.com", 
		"github": "v-yussupov", 
		"location": "Almaty"		
	},
	"welcomeMsg":"Hello!",
	"skills":["awesomeness", "intelligence", "asdasdasd", "blah-blah"],
	"pictureUrl":"images/picture.jpg"
};
bio.display = function(){
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	var formattedPicture = HTMLbioPic.replace("%data%",bio.pictureUrl);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMsg);
	$("#header").append(formattedPicture);
	$("#header").append(formattedWelcomeMsg);
	// appending contacts info with capitalized contact name
	for (var contactNum in bio.contacts){
		if (bio.contacts.hasOwnProperty(contactNum)) {
    		var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contactNum]);
    		formattedContact = formattedContact.replace("%contact%", contactNum.charAt(0).toUpperCase() + contactNum.slice(1) + ": ");
    		$("#topContacts").append(formattedContact);
		}
	}
	// appending skills array
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (var skillNum in bio.skills){
			var formattedSkill = HTMLskills.replace("%data%",bio.skills[skillNum]);
			$("#skills").append(formattedSkill);
		}
	}
}
var education = {
	"schools": [
		{
			"name": "Almaty University of Power, Energy and Telecommunications",
			"location": "Republic of Kazakhstan, Almaty",
			"degree": "BA",
			"majors":["Computer Science", "Software Support"],
			"dates": "2004 - 2008",			
			"url": "http://www.aipet.kz/index_eng.htm"
		},
		{
			"name": "Kaplan Aspect",
			"location": "New Zealand, Auckland",
			"degree": "Non-degree programme",
			"majors":["English"],
			"dates": "2008 - 2009",			
			"url": "http://www.kaplaninternational.com/schools/new-zealand/learn-english.aspx"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-end web-developer Nanodegree",
			"school": "Udacity",
			"date": "2014 - Future",			
			"url": "https://www.udacity.com/course/nd001"
		}			
	]
};
education.display = function(){
	var school = HTMLschoolName.replace("%data%",education.school);
	if (education.schools.length > 0) {
		$("#education").append(HTMLschoolStart);
		for (var schoolNum in education.schools){
			for (var schoolPropNum in education.schools[schoolNum]){
				var formattedSchool = HTMLschoolName.replace("%data%",education.schools[schoolNum][schoolPropNum]);
				$("#education").append(formattedSchool);
			}
		}
	}
	
}

var work = {
	"jobs": [
		{
			"employer": "Job1",
			"title": "Title1",
			"location": "Kazakhstan, Almaty",
			"dates": "dates1 - dates1",
			"description": "Lorem ipsum..."
		},
		{
			"employer": "Job2",
			"title": "Title2",
			"location": "Kazakhstan, Almaty",
			"dates": "dates2 - dates2",
			"description": "Lorem Ipsum......."
		},
		{
			"employer": "Job3",
			"title": "Title3",
			"location": "Kazakhstan, Almaty",
			"dates": "dates3 - dates3",
			"description": "Lorem ipsum....."
		}		
	]
};

var projects = {
	"projects": [
		{
			"title": "Proj1",
			"dates": "dates1-dates1",
			"description": "Project1 description",
			"images": []			
		}		
	]
};
projects.display = function(){
	for (projNum in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var title = HTMLprojectTitle.replace("%data%",projects.projects[projNum].title);
		$(".project-entry:last").append(title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[projNum].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[projNum].description);
		$(".project-entry:last").append(formattedDescription);
		if (projects.projects[projNum].images.length > 0){
			for (imgNum in projects.projects[projNum].images){
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[projNum].images[imgNum]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}




$("#main").append(internationalizeButton);



for (var jobNum in work.jobs) {
	var employer = HTMLworkEmployer.replace("%data%",work.jobs[jobNum].employer);
	var title = HTMLworkTitle.replace("%data%",work.jobs[jobNum].title);
	var formattedDates = HTMLworkDates.replace("%data%",work.jobs[jobNum].dates);
	var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[jobNum].location);
	var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[jobNum].description);
	var formattedEmployerTitle = employer + title;
	$("#workExperience").append(HTMLworkStart);
	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedLocation);
	$(".work-entry:last").append(formattedDescription);
}

function inName(str){
	var arr = [];
	arr = str.trim().split(" ");
	arr[0] = arr[0].slice(0,1).toUpperCase() + arr[0].slice(1).toLowerCase();
    arr[1] = arr[1].toUpperCase();
	str = arr.join(" ");
	return str;
}

 
bio.display();
projects.display();
education.display();

/*$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x, y);
})*/

/*

var employer = HTMLworkEmployer.replace("%data%",work["employer"]);
var workDates = HTMLworkDates.replace("%data%",work.years);
var workCity = HTMLworkLocation.replace("%data%",work.city);

$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(employer);   
$("#workExperience").append(workCity);   
$("#workExperience").append(workDates);   

*/


