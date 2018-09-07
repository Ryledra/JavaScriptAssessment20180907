
onload = function() {
    document.getElementById("dd1").style.display = 'none';
    document.getElementById("dd2").style.display = 'none';
}

function drop(i)    {
    if(i == 1)    {
        dropFunction("dd1");
    } else if (i == 2)  {
        dropFunction("dd2");
    }
}

function dropFunction(str)	{
	if(document.getElementById(str).style.display == 'none')	{
		document.getElementById(str).style.display = 'block';
	} else {
		document.getElementById(str).style.display = 'none';
	}
}

// function close(i)	{
// 	if(i == 1)    {
//         document.getElementById("dd1").style.display = 'none';
//     } else if (i == 2)  {
//         document.getElementById("dd2").style.display = 'none';
//     }
// }

function high(i,j)	{
	if (i == 1)	{
		if (j == 1)	{
			highlight('JSON');
		}
	} else if (i == 2)	{
		if (j == 1)	{
			highlight('entry');
		} else if (j == 2)	{
			highlight('form');
		}
	}
}

function highlight(str)	{
	document.getElementById(str).style.background = '#23705f';
	document.getElementById(str).innerHTML += '*';
	document.getElementById(str).style.color = 'white';
}

function unhigh(i,j)	{
	if (i == 1)	{
		if (j == 1)	{
			unhighlight('JSON','JSON Manipulation');
		}
	} else if (i == 2)	{
		if (j == 1)	{
			unhighlight('entry','Entry Form');
		} else if (j == 2)	{
			unhighlight('form','Form Data');
		}
	}
}

function unhighlight(str, str1)	{
	document.getElementById(str).style.background = '#cccccc';
	document.getElementById(str).innerHTML = str1;
	document.getElementById(str).style.color = 'blue';
}
