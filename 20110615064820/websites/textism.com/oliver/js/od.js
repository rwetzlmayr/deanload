function tD(id)
{
	if (!document.getElementById)
	{
		return false;
	}

	var obj = document.getElementById(id);

	if (obj.style.display == 'none')
	{
		obj.style.display = 'block';
	}

	else
	{
		obj.style.display = 'none';
	}
}