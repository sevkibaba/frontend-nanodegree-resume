var work = {
	"jobs" : 
	[
		{
			"employer": "JotForm",
			"title": "Technical Support",
			"location": "Hacettepe - Ankara",
			"dates": "2016 - in progress",
			"description": "Helping JotForm customers at JotForm Suppot Forum"
		},
		{
			"employer": "KSB",
			"title": "Management Support Engineer",
			"location": "İstanbul Yolu 18. km- Ankara",
			"dates": "11.2006 - 10.2007",
			"description": "Helping Factory Management in Production Planning, Process Analysis and Benchmark reporting"
		}
	],
	'display' : function () {
		console.log('hello work!');
	}
};

var projects = {
	"projects" : 
	[
		{
			"title": "Maintenance Management System (EUAS - Havelsan",
			"dates": "2009 - 2011",
			"description": "Sofware Requirement Analysis, Process Analysis, Software Testing, Software Education",
			"images": ["images/gp-project.png" ]
		}
	],
	'display' : function () {
		console.log('hello!');
	}
};

var bio = {
	'name' : "Şevki Yöntem",
	'role' : "Technical Support",
	'welcomeMessage' : 'May the force be with you',
	'biopic' : 'images/vesika.jpg',	
	'contacts' : {
		'mobile' : '+90 543 819 65 88',
		'email' : 'sevkiyontem@gmail.com',
		'gitHub' : 'sevkibaba',
		'twitter' : '@cropcoffeeshop',
		'location' : 'Ankara/TURKEY',
	},
	'skills' : [
		'Programming,     Software Testing,     Process Modelling,     Documentation'   
	],
	'display' : function () {
		console.log('hello!');
	}
};

education = {
	"schools" : 
	[
		{
			"name" : "Middle East Technical University",
			"location" : "Ankara",
			"degree" : "BA",
			"dates" : "2002 - 2008",
			"url" : "http://ie.metu.edu.tr/",
			"major" : ["Industrial Engineering"]
		},
		{
			"name" : "Middle East Technical University",
			"location" : "Ankara",
			"degree" : "Master of Science",
			"dates" : "2011 - 2015",
			"url" : "http://ii.metu.edu.tr/general-information-about-cognitive-science-programs",
			"major" : ["Cognitive Science"]

		}

	],
	"onlinecourses" : 
	[
		{
		"title" : "Javascript Crash Course",
		"school" : "UDacity",
		"dates" : "2017",
		"url" : "https://classroom.udacity.com/courses/ud804/"
		}
	],
	"display" : function () {
		console.log('hello I studied a lot');
	}
};

var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
var formattedPhone = HTMLmobile.replace('%data%', bio.contacts.mobile);
var formattedImage = HTMLbioPic.replace('%data%', bio.biopic);
var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
var formattedGit = HTMLgithub.replace('%data%', bio.contacts.gitHub);
var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
var formattedSkills = HTMLskills.replace('%data%', bio.skills);
var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
$('#header').prepend(formattedImage);

$('#topContacts').prepend(formattedTwitter);
$('#topContacts').prepend(formattedGit);
$('#topContacts').prepend(formattedEmail);
$('#topContacts').prepend(formattedPhone);
// $('#header').append(formattedLocation);


 if(bio.skills.length > 0) {
      $('#header').append(HTMLskillsStart);

      for (skill in bio.skills) {
      		var formattedSkill = HTMLskills.replace('%data%', bio.skills[skill]);
        	$('#skills-h3').append(formattedSkill);
      };
  };

function displayWork ()
	{
  	for (job in work.jobs) {
  	$('#workExperience').append(HTMLworkStart);

  	var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
  	var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
  	var formattedEmployerTitle = formattedEmployer + formattedTitle;

  	$('.work-entry:last').append(formattedEmployerTitle);

  	var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
  	var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
  	var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);

  	$('.work-entry:last').append(formattedDates);
  	$('.work-entry:last').append(formattedLocation);
  	$('.work-entry:last').append(formattedDescription);
	};
};

displayWork();

$(document).click(function(loc) {			// logs click locations.
  logClicks(loc.pageX, loc.pageY);
})

projects.display = function () {
	  	for (key in projects.projects) {
	  	$('#projects').append(HTMLprojectStart);

	  	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[key].title);
	  	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[key].dates);
	  	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[key].description);
	  	var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[key].images);

	  	$(".project-entry:last").append(formattedTitle);
	  	$(".project-entry:last").append(formattedDates);
	  	$(".project-entry:last").append(formattedDescription);
	  	$(".project-entry:last").append(formattedImage);
	  };
};

projects.display ();

$("#mapDiv").append(googleMap);