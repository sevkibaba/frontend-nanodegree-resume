var work = {
	"jobs" : 
	[
		{
			"employer": "JotForm",
			"title": "Technical Support",
			"location": "Ankara",
			"dates": "2016 - in progress",
			"description": "Helping JotForm customers at JotForm Suppot Forum"
		},
		{
			"employer": "KSB",
			"title": "Management Support Engineer",
			"location": "Ankara",
			"dates": "11.2006 - 10.2007",
			"description": "Helping Factory Management in Production Planning, Process Analysis and Bencmark reporting"
		}
	]
};

var projects = {
	"projects" : 
	[
		{
			"title": "Maintenance Management System",
			"dates": "2009 - 2011",
			"description": "Sofware Requirement Analysis, Process Analysis, Software Testing, Software Education",
			"images": ["http://gelisimpark.com.tr/en/euas-termik-santraller-isletim-ve-bakim-yonetimi/"]
		}
	]
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
		'Programming', 'Software Testing', ' Process Modelling', ' Documentation',   
	]
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
	]
};

console.log(work.jobs[0].employer);

var formattedName = HTMLheaderName.replace('%data%', bio.name);
$('#header').prepend(formattedName);

 if(bio.skills.length > 0) {
      $('#header').append(HTMLskillsStart);

      for (skill in bio.skills) {
      		var formattedSkill = HTMLskills.replace('%data%', bio.skills[skill]);
        	$('#skills').append(formattedSkill);
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

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
})

