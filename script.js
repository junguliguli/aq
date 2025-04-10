const urlParams = new URLSearchParams(window.location.search);
const dataParam = urlParams.get('data');

if (!dataParam) {
  document.getElementById('tableArea').innerHTML = '데이터가 없습니다.';
} else {
  const data = JSON.parse(decodeURIComponent(dataParam));
  drawTable(data);
}

function drawTable(data) {
  let html = '<table>';
  html += `
    <tr>
      <th>레이드</th><th>딜러1</th><th>딜러2</th><th>딜러3</th><th>딜러4</th>
      <th>딜러5</th><th>딜러6</th><th>서폿1</th><th>서폿2</th><th>시간</th><th>완료여부</th><th>비고</th>
    </tr>`;

  data.forEach(row => {
    const status = row[10] === 'X' ? 'incomplete' : 'complete';
    html += `<tr class="${status}">`;
    for (let i = 0; i < 12; i++) {
      html += `<td>${row[i] ?? ''}</td>`;
    }
    html += `</tr>`;
  });

  html += '</table>';
  document.getElementById('tableArea').innerHTML = html;
}
