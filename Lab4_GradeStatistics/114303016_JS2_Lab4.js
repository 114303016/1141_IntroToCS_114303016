document.getElementById("submitBtn").addEventListener("click", function() {
	var math = parseFloat(document.getElementById("mathScore").value);
	var english = parseFloat(document.getElementById("englishScore").value);

	var tbody = document.getElementById("scoreBody");
	var rowCount = tbody.rows.length + 1;
	var avg = ((math + english) / 2).toFixed(1);

  // 用數字 + 字串拼接
	tbody.innerHTML += "<tr>" + "<td>" + rowCount + "</td>" + "<td>" + math + "</td>" + "<td>" + english + "</td>" +"<td>" + avg + "</td>" + "</tr>";

  // 計算欄位平均
	var mathSum = 0, englishSum = 0;
	for (var i = 0; i < tbody.rows.length; i++) {
		mathSum += parseFloat(tbody.rows[i].cells[1].innerText);
		englishSum += parseFloat(tbody.rows[i].cells[2].innerText);
	}

	var count = tbody.rows.length;
	document.getElementById("mathAvg").innerText = (mathSum / count).toFixed(1);
	document.getElementById("englishAvg").innerText = (englishSum / count).toFixed(1);
	document.getElementById("overallAvg").innerText = ((mathSum + englishSum) / (count * 2)).toFixed(1);

	document.getElementById("mathScore").value = "";
	document.getElementById("englishScore").value = "";
});