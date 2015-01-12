var bio = {
	"name":"Vladimir Yussupov",
	"role":"web-developer",
	"contacts":{
		"mobile":"+77778270509", 
		"email": "v.yussupov@gmail.com", 
		"github": "v-yussupov", 
		"location": "Almaty, Kazakhstan"		
	},
	"welcomeMsg":"Hello!",
	"skills":["HTML, CSS", "JavaScript, C", "MySQL, MS SQL Server", "Technical writing", "Graphic design / layout, ADOBE products knowledge (PS, AI, InDesign, Framemaker)", "UNIX-like OSes just for fun"],
	"pictureUrl":"images/picture.jpg"
};
bio.display = function(){
	$("#header").prepend(internationalizeButton);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	var formattedPicture = HTMLbioPic.replace("%data%",bio.pictureUrl);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMsg);
	$("#header").append(formattedPicture);
	$("#header").append(formattedWelcomeMsg);
	
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (var skillNum in bio.skills){
			var formattedSkill = HTMLskills.replace("%data%",bio.skills[skillNum]);
			$("#skills").append(formattedSkill);
		}
	}

	for (var contactNum in bio.contacts){
		if (bio.contacts.hasOwnProperty(contactNum)) {
    		var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contactNum]);
    		formattedContact = formattedContact.replace("%contact%", contactNum.charAt(0).toUpperCase() + contactNum.slice(1) + ": ");
    		$("#topContacts").append(formattedContact);
    		$("#footerContacts").append(formattedContact);
		}
	}
}
var education = {
	"schools": [
		{
			"name": "Almaty University of Power, Energy and Telecommunications",
			"location": "Kazakhstan, Almaty",
			"degree": "Bachelor",
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
			"url": "http://www.kaplaninternational.com/schools/new-zealand/english-courses-auckland.aspx"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-end web-developer Nanodegree",
			"school": "Udacity",
			"date": "2014 - ...",			
			"url": "https://www.udacity.com/course/nd001"
		}			
	]
};
education.display = function(){
	var school = HTMLschoolName.replace("%data%",education.school);
	if (education.schools.length > 0) {
		for (var schoolNum in education.schools){
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%",education.schools[schoolNum].name);
			formattedName = formattedName.replace("#",education.schools[schoolNum].url);
			$(".education-entry:last").append(formattedName);
			var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[schoolNum].degree);
			$(".education-entry:last a").append(formattedDegree);
			var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[schoolNum].location);
			$(".education-entry:last").append(formattedLocation);
			var formattedDates = HTMLschoolDates.replace("%data%",education.schools[schoolNum].dates);
			$(".education-entry:last").append(formattedDates);
			var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[schoolNum].majors);
			$(".education-entry:last").append(formattedMajor);
		}
	}
	if (education.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses);
		for (var courseNum in education.onlineCourses){
			$("#education").append(HTMLschoolStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[courseNum].title);
			$(".education-entry:last").append(formattedTitle);
			var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[courseNum].school);
			$(".education-entry:last a").append(formattedSchool);
			var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[courseNum].date);
			$(".education-entry:last").append(formattedDates);
			var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[courseNum].url);
			formattedURL = formattedURL.replace("#",education.onlineCourses[courseNum].url);
			$(".education-entry:last").append(formattedURL);
		}
	}	
}

var work = {
	"jobs": [
		{
			"employer": "Bass Technology LLP",
			"title": "System analyst / Software developer",
			"location": "Kazakhstan, Almaty",
			"dates": "2014 - ...",
			"description": "Queue management system functional development, third-party systems integration specialist, C/Delphi developer"
		},
		{
			"employer": "Bass Technology LLP",
			"title": "Software tester",
			"location": "Kazakhstan, Almaty",
			"dates": "2012 - 2014",
			"description": "Queue management system testing, technical documentation, clients design layout"
		},
		{
			"employer": "Kazakhstan Federation of UNESCO Clubs (KAZFUCA)",
			"title": "Graphic design / Flash programming",
			"location": "Kazakhstan, Almaty",
			"dates": "2011 - 2012",
			"description": "Graphic materials design and macking up, Adobe Flash projects"
		}		
	]
};
work.display = function(){
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
};

var projects = {
	"projects": [
		{
			"title": "Queue management system userguides pack",
			"dates": "2012 - ...",
			"description": "Server-side and client-side components userguides, 14 userguides in total. Examples below:",
			"images": ["images/doc.png", "images/doc1.png", "images/doc2.png", "images/doc3.png"]
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

bio.display();
projects.display();
education.display();
work.display();
$("#mapDiv").append(googleMap);




