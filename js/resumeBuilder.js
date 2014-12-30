var bio = {
	"name": "Vladimir Yussupov",
	"role": "web-developer",
	"welcomeMsg": "Hello!",
	"contacts": {
		"cellphone":"87778270509", 
		"email": "v.yussupov@gmail.com", 
		"github": "v-yussupov", 
		"city": "Almaty"		
	},
	"pictureUrl": "images/picture.jpg",
	"skills": ["awesomeness", "intelligence", "asdasdasd", "blah-blah"]
};

var education = {
	"schools": [
		{
			"name": "Almaty University of Power, Energy and Telecommunications",
			"location": "Republic of Kazakhstan, Almaty",
			"degree": "BA",
			"major":["Computer Science", "Software Support"],
			"dates": "2004 - 2008",			
			"url": "http://www.aipet.kz/index_eng.htm"
		},
		{
			"name": "Kaplan Aspect",
			"location": "New Zealand, Auckland",
			"degree": "Non-degree programme",
			"major":["English"],
			"dates": "2008 - 2009",			
			"url": "http://www.kaplaninternational.com/schools/new-zealand/learn-english.aspx"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-end web-developer Nanodegree",
			"school": "Udacity",
			"dates": "2014 - Future",			
			"url": "https://www.udacity.com/course/nd001"
		}			
	]	
};

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

var project = {
	"projects": [
		{
			"title": "Proj1",
			"dates": "dates1-dates1",
			"description": "Project1 description",
			"images": []			
		}		
	]	
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var mobile = HTMLmobile.replace("%data%", bio.contacts.cellphone);
var email = HTMLemail.replace("%data%", bio.contacts.email);
var github = HTMLgithub.replace("%data%", bio.contacts.github);
var myLocation = HTMLlocation.replace("%data%", bio.contacts.city);
var picture = HTMLbioPic.replace("%data%",bio.pictureUrl);
var welcomeText = HTMLWelcomeMsg.replace("%data%",bio.welcomeMsg);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(mobile);
$("#topContacts").append(email);
$("#topContacts").append(github);
$("#topContacts").append(myLocation);
$("#header").append(picture);
$("#header").append(welcomeText);
$("#main").append(internationalizeButton);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedSkill);
}

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

projects.display = function(){
	for (projNum in project.projects){
		$("#projects").append(HTMLprojectStart);
		var title = HTMLprojectTitle.replace("%data%",project.projects[projNum].title);
		$(".project-entry:last").append(title);
		var formattedDates = HTMLprojectDates.replace("%data%",project.projects[projNum].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",project.projects[projNum].description);
		$(".project-entry:last").append(formattedDescription);
		if (project.projects[projNum].images.length > 0){
			for (imgNum in project.projects[projNum].images){
				var formattedImage = HTMLprojectImage.replace("%data%",project.projects[projNum].images[imgNum]);
				$(".project-entry:last").append(formattedImage);
			}
		}
		
		
	}

} 

projects.display();

/*$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x, y);
})*/

/*

var employer = HTMLworkEmployer.replace("%data%",work["employer"]);
var workDates = HTMLworkDates.replace("%data%",work.years);
var workCity = HTMLworkLocation.replace("%data%",work.city);

var school = HTMLschoolName.replace("%data%",education.school);



$("#header").append(HTMLskillsStart);
$("#header").append(skill1);
$("#header").append(skill2);
$("#header").append(skill3);
$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(employer);   
$("#workExperience").append(workCity);   
$("#workExperience").append(workDates);   

$("#education").append(HTMLschoolStart);
$("#education").append(school);*/


