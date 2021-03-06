data = {
  "squadName" : "QA Consulting",
  "secretBase" : "Anchorage",
  "active" : true,
  "members" : [
    {
      "name" : "Matt",
      "age" : 29,
      "secretIdentity" : "The flash-er",
      "skills" : [
        "Java",
        "Testing",
        "JavaScript"
      ]
    },
    {
      "name" : "Dev",
      "age" : 32,
      "secretIdentity" : "Dev Data",
      "skills" : [
        "DevOps",
        "Linux",
        "Consultancy Skills"
      ]
    },
    {
      "name" : "Shafeeq",
      "age" : 32,
      "secretIdentity" : "T H E S H A F E E Q",
      "skills" : [
        "Databases",
        "Java",
        "JavaScript",
        "Chicken Cottage",
      ]
    }
  ]
}

function search() {
  clearResults();
  if (checkName(document.getElementById('name').value))  {
    printTrainer(document.getElementById('name').value);
  } else if (checkSkill(document.getElementById('skill').value))  {
    printSkilledTrainers(document.getElementById('skill').value);
  } else  {
    createPTag("Both inputs are blank")
  }
}

function clearResults() {
  var parent = document.getElementById("results");
  while(parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
}

function checkName(str)  {
  var alphaEX = /^[a-zA-Z]+$/;
  if (str.match(alphaEX)) {
    return true;
  }
  else {
    console.log('not a real name');
    // createPTag('Please enter a real name');
    return false;
  }
}

function printSkilledTrainers(str)  {
  console.log(str);
  passed = false;
  var members = data.members;
  for (i = 0; i < members.length; i++) {
    for (j = 0; j < members[i].skills.length; j++) {
      if (members[i].skills[j] == str)  {
        createPTag(members[i].name);
        passed = true;
      }
    }
  }
  if (passed == false) createPTag("No trainers with '" + str + "' skill.");
}

function checkSkill(str)  {
  var alphaEX = /^[a-zA-Z\s]+$/;
  if (str.match(alphaEX)) {
    return true;
  }
  else {
    console.log('not a real skill');
    // createPTag('Please enter a real name');
    return false;
  }
}

function printTrainer(str) {
  var members = data.members;
  var passed = false;
  // console.log(str);
  for (i = 0; i < members.length; i++) {
    // console.log(members[i].name);
    if (members[i].name == str)  {
      passed = true;

      createPTag("Name: " + members[i].name);
      createPTag("Age:  " + members[i].age);
      createPTag("Secret Identity: " + members[i].secretIdentity);

      for (j = 0; j < members[i].skills.length; j++)  {
        var skillNum = j+1;
        createPTag("Skill " + skillNum + ": " + members[i].skills[j])
      }
    }
  }
  if (passed == false) {
    console.log('No trainer by that name');
    createPTag('No trainer by that name');
  }
}

function createPTag(str)	{
	var para = document.createElement("p");
	var node = document.createTextNode(str);
	para.appendChild(node);
	
	var element = document.getElementById("results");
	element.appendChild(para);
}