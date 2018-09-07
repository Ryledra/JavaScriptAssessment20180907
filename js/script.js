
onload = function() {
    document.getElementById("dd1").style.display = 'none';
    document.getElementById("dd2").style.display = 'none';
}

function drop(i)    {
    if(i == 1)    {
        if(document.getElementById("dd1").style.display == 'none')	{
		document.getElementById("dd1").style.display = 'block';
	    } else {
		document.getElementById("dd1").style.display = 'none';
		}
    } else if (i == 2)  {
        if(document.getElementById("dd2").style.display == 'none')	{
		document.getElementById("dd2").style.display = 'block';
	    } else {
		document.getElementById("dd2").style.display = 'none';
		}
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
			document.getElementById("JSON").style.background = '#23705f';
			document.getElementById("JSON").innerHTML += '*';
			document.getElementById("JSON").style.color = 'white';
		}
	} else if (i == 2)	{
		if (j == 1)	{
			document.getElementById("entry").style.background = '#23705f';
			document.getElementById("entry").innerHTML += '*';
			document.getElementById("entry").style.color = 'white';
		} else if (j == 2)	{
			document.getElementById("form").style.background = '#23705f';
			document.getElementById("form").style.color = 'white';
			document.getElementById("form").innerHTML += '*';
		}
	}
}

function unhigh(i,j)	{
	if (i == 1)	{
		if (j == 1)	{
			document.getElementById("JSON").style.background = '#cccccc';
			document.getElementById("JSON").innerHTML = 'JSON manipulation';
			document.getElementById("JSON").style.color = 'blue';
		}
	} else if (i == 2)	{
		if (j == 1)	{
			document.getElementById("entry").style.background = '#cccccc';
			document.getElementById("entry").innerHTML = 'Entry Form';
			document.getElementById("entry").style.color = 'blue';
		} else if (j == 2)	{
			document.getElementById("form").style.background = '#cccccc';
			document.getElementById("form").innerHTML = 'Form Data';
			document.getElementById("form").style.color = 'blue';
		}
	}
}