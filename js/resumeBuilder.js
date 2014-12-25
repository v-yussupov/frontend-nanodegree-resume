var bio = {
	"name": "Vladimir Yussupov",
	"role": "web-developer",
	"contactInfo": ["87778270509", "v.yussupov@gmail.com", "v-yussupov", "Almaty"],
	"pictureUrl": "images/picture.jpg",
	"welcomeMsg": "Hello!",
	"skills": ["asdasdasd, asdasdasdasdd", "asdas", "asdasdasd"]
};

var work = {};
work.position = "business analyst";
work.employer = "Bass Technology";
work.years = "2011 - Future";
work.city = "Almaty";

var education = {};
education["school"] = "AUPET";
education["years"] = "2004 - 2008";
education["city"] = "Almaty";


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var mobile = HTMLmobile.replace("%data%", bio.contactInfo[0]);
var email = HTMLemail.replace("%data%", bio.contactInfo[1]);
var github = HTMLgithub.replace("%data%", bio.contactInfo[2]);
var myLocation = HTMLlocation.replace("%data%", bio.contactInfo[3]);
var picture = HTMLbioPic.replace("%data%",bio.pictureUrl);
var welcomeText = HTMLWelcomeMsg.replace("%data%",bio.welcomeMsg);
var skill1 = HTMLskills.replace("%data%",bio.skills[0]);
var skill2 = HTMLskills.replace("%data%",bio.skills[1]);
var skill3 = HTMLskills.replace("%data%",bio.skills[2]);
var employer = HTMLworkEmployer.replace("%data%",work["employer"]);
var workDates = HTMLworkDates.replace("%data%",work.years);
var workCity = HTMLworkLocation.replace("%data%",work.city);

var school = HTMLschoolName.replace("%data%",education.school);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(mobile);
$("#topContacts").append(email);
$("#topContacts").append(github);
$("#topContacts").append(myLocation);
$("#header").append(picture);
$("#header").append(welcomeText);
$("#header").append(HTMLskillsStart);
$("#header").append(skill1);
$("#header").append(skill2);
$("#header").append(skill3);
$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(employer);   
$("#workExperience").append(workCity);   
$("#workExperience").append(workDates);   

$("#education").append(HTMLschoolStart);
$("#education").append(school);


